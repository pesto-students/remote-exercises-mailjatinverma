const PENDING = 'pending';
const FULFILLED = 'fulfilled';
const REJECTED = 'rejected';
const UNDEFINED = 'undefined';


class MyPromise {
  constructor(executorFunction) {
    if (typeof executorFunction !== "function") {
      throw new TypeError(
        'Expected function, received $(typeof executorFunction}',
      );
    }
    this.state = PENDING;
    this.result = UNDEFINED;
    this.resolvers = [];
    this.then = this.then.bind(this);
    const resolve = value => {
      if (this.state !== PENDING) {
        return;
      }
      if (typeof value === 'object' && value !== null && typeof value.then === 'function') {
        return value.then(resolve, reject);
      }
      this.state = FULFILLED;
      this.result = value;
      this.resolvers.forEach(( { onResolve}, index) => {
        this.result = onResolve(this.result);
      });
    };
    const reject = error => {
      if(this.state !== PENDING) {
        return;
      }
      this.state = REJECTED;
      this.result = error;
      this.resolvers.forEach(({ onReject}, index) => {
        this.result = onReject(this.result);
      });
    };
    try {
      executorFunction(resolve, reject);  
    }  
    catch (error) {
      reject(error);
    }
  }

  static resolve(maybeAPromise){
    if (maybeAPromise instanceof MyPromise) {
      return maybeAPromise;
    }
    return new MyPromise((resolve, reject) => {
      return resolve(maybeAPromise);
    });
  }

  static reject(value) {
    return new MyPromise((resolve, reject) => {
      return reject(value);
    });
  }

  then(onResolve, onReject){
    return new MyPromise((resolve, reject) => {
      const onFulfiledInternal = value => {
        if(typeof onResolve === 'function') {
          try{
            return resolve(onResolve(value));
          }
          catch(error){
            return reject(error);
          }
        } 
        else {
          return resolve(value);
        }
      };
      const onRejectedInternal = value => {
        if (typeof onReject === 'function') {
          try {
            return resolve(onReject(value));
          } catch(error){
            return reject(error);
          }
        } 
        else {
          return reject(value);
        }
      };
      if (this.state === FULFILLED) {
        return onFulfiledInternal(this.result);
      } 
      else if (this.state === REJECTED) {
        return onRejectedInternal(this.result);
      } 
      else {
        this.resolvers.push({
          onResolve: onFulfiledInternal,
          onReject: onRejectedInternal
        });
      }
    });
  }

  catch(onReject) {
    return this.then(undefined, onReject);
  }

  finally(onFilnally) {
    return this.then(onFilnally, onFilnally);
  }

  static all(promises) {
    const results = [];
    let completedPromises = 0;
    return new MyPromise((resolve, reject) => {
      const resolveIfDone = () => {
        if (completedPromises === promises.length) {
          resolve(results);
        }
      };
      promises.forEach((promise, index) => {
        if (promise instanceof MyPromise) {
          promise.then(
            value => {
              results[index] = value;
              completedPromises += 1;
              resolveIfDone();
            },
            err => {
              reject(err);
            }
          );
        } else {
          results[index] = promise;
          completedPromises += 1;
          resolveIfDone();
        }
      });
    });
  }
  static allSettled(promises) {
    const results = [];
    let settledPromises = 0;
    return new MyPromise((resolve, reject) => {
      const resolveIfDone = () => {
        if (settledPromises === promises.length) {
          resolve(results);
        }
      };
      promises.forEach((promise, index) => {
        if (promise instanceof MyPromise) {
          promise.then(
            value => {
              settledPromises += 1;
              results[index] = {
                status: promise.state,
                value
              };
              resolveIfDone();
            },
            err => {
              settledPromises += 1;
              results[index] = {
                status: promise.state,
                reason: err
              };
              resolveIfDone();
            }
          );
        } 
        else {
          const p1 = MyPromise.resolve(promise);
          p1.then(value => {
            settledPromises += 1;
            results[index] = {
              status: p1.state,
              value
            };
            resolveIfDone();
          });
        }
      });
    });
  }
}

export { MyPromise };

