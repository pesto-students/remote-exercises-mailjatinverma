function chunkArrayInGroups(array, chunkSize) {
    var matrix = [], i, k;
    for(i=0, k=-1; i<array.length; i++){
        if(i%chunkSize===0){
            k++;
            matrix[k] = [];
        }
        matrix[k].push(array[i]);
    }
    return matrix;
}

export {
  chunkArrayInGroups,
};
