function combineTwoArrays(array1, array2){
    arrays_sumados = [...array1, ...array2]
    return arrays_sumados;
}

let array_suma = [1,3,5,7,9];
let array_suma2 = [2,4,6,8,10];

combineTwoArrays(array_suma, array_suma2);

document.write(arrays_sumados)