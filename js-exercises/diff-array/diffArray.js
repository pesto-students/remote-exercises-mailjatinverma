
function uniqueElements(...arr) {
  const unique = [...new Set(arr)];
  return unique;
}

function uniqueInFirst(arr1, arr2) {
  const uniqueInFirstArray = [];
  for (let i = 0; i < arr1.length; i++) {
    const ch = arr1[i];
    if (!arr2.includes(ch)) { uniqueInFirstArray.push(ch); }
  }
  return uniqueInFirstArray;
}

function diffArray(arr1, arr2) {
  const uniqueElements1 = uniqueElements(...arr1);
  const uniqueElements2 = uniqueElements(...arr2);

  const differenceArray = uniqueInFirst(uniqueElements1, uniqueElements2)
    .concat(uniqueInFirst(uniqueElements2, uniqueElements1));
  return differenceArray;
}

export {
  diffArray,
};
