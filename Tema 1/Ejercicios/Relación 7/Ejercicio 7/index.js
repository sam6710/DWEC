function combineAllArrays(...arrays){
    combinedArrays = []
    for(array of arrays){
        combinedArrays = combinedArrays, array
    }
}

array1 = [1, 2, 3];
array2 = [5, 6, 7];
document.write(combineAllArrays(array1, array2));