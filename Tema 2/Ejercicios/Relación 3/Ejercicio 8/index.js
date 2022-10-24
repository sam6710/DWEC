function contabilizar(cad){
    cadena_spliteada = cad.split(" ");
    return cadena_spliteada;
}

cadena = prompt("Introduzca la frase que quiera contabilizar:");

document.write(contabilizar(cadena));