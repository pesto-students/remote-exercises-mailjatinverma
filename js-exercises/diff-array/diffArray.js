
function uniqueElements(...arr){
    let unique = [...new Set(arr)];
    return unique;
}

function uniqueInFirst(arr1, arr2){
    var uniqueInFirst = []
    for(let i=0; i<arr1.length; i++){
        let ch = arr1[i];
        if ( ! arr2.includes(ch)){uniqueInFirst.push(ch);}
    }
    return uniqueInFirst;
}

function diffArray(arr1, arr2) {
    let uniqueElements1 = uniqueElements(...arr1);
    let uniqueElements2 = uniqueElements(...arr2);

    let diffArray = uniqueInFirst(uniqueElements1, uniqueElements2).concat(uniqueInFirst(uniqueElements2, uniqueElements1));
    return diffArray;
}

export {
  diffArray,
};
