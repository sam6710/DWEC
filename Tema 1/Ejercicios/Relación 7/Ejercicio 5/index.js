//--Está mal, lo entendí mal--//
// function sumEveryOther(array){
//     for(i=0; i<array.length; i++){
//         suma += array[i];
//     }
//     document.write("la suma " + suma);
// }

// let suma = 0;
// let array_a_sumar = [6,7,10,8]

// sumEveryOther(array_a_sumar);

function sumEveryOther(...arguments){
    let acumulator = 0;
    for(position = 0; position < arguments.length; position += 2){
        acumulator += arguments[position];
    }
    return acumulator;
}

document.write(sumEveryOther(5, 6, 3, 4, 1) + "<br>");
document.write(sumEveryOther(10, 2, 11, 4) + "<br>");