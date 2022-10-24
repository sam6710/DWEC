// function foundSaddlePoint(array){
//     solucion = [];
//     for(let i=0; i<array.length; i++)
//         for(j=0; j<array[i].length; j++)
//             if(mayorIgualATodos(array[i][j],i,array))
//                 if(menorIgualATodos(array[i][j],j,array))
//                     solucion.push(i.toString()+jtoString());
//      return solucion;
// };

// function mayorIgualATodos(valor,posFila,array){
//     mayor = true;
//     for(let i=0; i<array[posFila].length && mayor; i++){
//         if(valor < array[posFila][i]){
//             mayor = false;
//         }
//     }
//     return mayor;
// };
// function menorIgualATodos(valor,posCol, array){
//     menor = true;
//     for(let i=0; i<array[posCol].length && menor; i++){
//         if(valor > array[i][posCol]){
//             menor = false;
//         }
//     }
//     return menor;
// };

// arr = [
//     [4,5,16,7],
//     [4,5,9,7],
//     [4,5,16,7]
// ];

// result = foundSaddlePoint(arr);