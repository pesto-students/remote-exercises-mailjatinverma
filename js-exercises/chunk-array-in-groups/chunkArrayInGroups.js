function chunkArrayInGroups(array, chunkSize) {
  const matrix = [];
  let i;
  let k;
  for (i = 0, k = -1; i < array.length; i++) {
    if (i % chunkSize === 0) {
      k = k + 1;
      matrix[k] = [];
    }
    matrix[k].push(array[i]);
  }
  return matrix;
}

export {
  chunkArrayInGroups,
};
