function forEach(array, callback, thisArg) {
  if (!Array.isArray(array)) {
    throw TypeError('1st argument is not a valid array');
  }
  if (typeof callback !== 'function') {
    throw TypeError('callback is not a function');
  }
  let clonedArray = array.slice(0);
  let index = 0;
  let length = clonedArray.length;
  while (index < length) {
    if (clonedArray.hasOwnProperty(index)) {
      callback.call(thisArg || this, clonedArray[index], index, clonedArray,);
    }
    index += 1;
  }
  return undefined;
}

function map(array, callback, thisArg) {
  if (!Array.isArray(array)) {
    throw TypeError('1st argument is not a valid array');
  }
  if (typeof callback !== 'function') {
    throw TypeError('callback is not a function');
  }
  let result = [];
  let clonedArray = array.slice(0);
  let index = 0;
  let length = clonedArray.length;
  while (index < length) {
    if (clonedArray.hasOwnProperty(index)) {
      result.push(
        callback.call(thisArg || this, clonedArray[index], index, clonedArray,)
      );
    }
    index += 1;
  }
  return result;
}

function filter(array, callback, thisArg) {
  if (!Array.isArray(array)) {
    throw TypeError('1st argument is not a valid array');
  }
  if (typeof callback !== 'function') {
    throw TypeError('callback is not a function');
  }
  let result = [];
  let clonedArray = array.slice(0);
  let index = 0;
  let length = clonedArray.length;
  while (index < length) {
    if (array.hasOwnProperty(index)) {
      const selected = callback.call(
        thisArg || this,
        clonedArray[index],
        index,
        clonedArray,
      );
      if (selected === true) {
        result.push(clonedArray[index]);
      }
    }
    index += 1;
  }
  return result;
}

function reduce(array, callback, initialValue) {
  if (!Array.isArray(array)) {
    throw TypeError('1st argument is not a valid array');
  }
  if (array.length === 0 && !initialValue) {
    throw TypeError('array length is 0 and initialValue is not present');
  }
  if (typeof callback !== 'function') {
    throw TypeError('callback is not a function');
  }
  const clonedArray = array.slice(0);
  const length = clonedArray.length;
  let accumulator;
  let index = 0;
  if (initialValue) {
    accumulator = initialValue;
  } else {
    let isPresent = false;
    while (isPresent === false && index < length) {
      isPresent = clonedArray.hasOwnProperty(index);
      if (isPresent) {
        accumulator = clonedArray[index];
      }
      index += 1;
    }
  }
  while (index < length) {
    if (clonedArray.hasOwnProperty(index)) {
      accumulator = callback(
        accumulator,
        clonedArray[index],
        index,
        clonedArray,
      );
    }
    index += 1;
  }
  return accumulator;
}

export {
  forEach,
  map,
  filter,
  reduce,
};