
function curry(fn) {
  return function func(...args) {
    if (args.length >= fn.length) {
      return fn.apply(this, args);
    }
    return function (...args1) {
      return func.apply(this, Array.prototype.concat(args, args1));
    };
  };
}

export {
  curry,
};
