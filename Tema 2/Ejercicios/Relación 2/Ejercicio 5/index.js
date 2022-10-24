function raiz(a, b, c){
    return (b*b - 4*a*c);
}

function solucion(a, b ,c){
    let inside = raiz(a, b, c);
    if(inside < 0){
        document.write("No existe una solución real para esta ecuación.");
    }
    else{
        let sqrt = Math.sqrt(inside);
        let sol1 = ((-b + sqrt)/2*a);
        let sol2 = ((-b - sqrt)/2*a);
        return (sol1, sol2);
    }
}


let coeficiente_cuadrado = parseInt(prompt("Introduzca el coeficiente q acompaña a la x^2:"));
let coeficiente = parseInt(prompt("Introduzca el coeficiente q acompaña a la x:"));
let coeficiente_solo = parseInt(prompt("Introduzca el termino solitario:"));

document.write(solucion(coeficiente_cuadrado, coeficiente, coeficiente_solo));
