
function lastIndexOf(...args) {
  const value = args[0];
  let arr = [...args[1]];
  arr.reverse();
  let position = arr.indexOf(value);

  if (position === -1) { return position; }
  position = arr.length - (position + 1);

  return position;
}

export {
  lastIndexOf,
};
