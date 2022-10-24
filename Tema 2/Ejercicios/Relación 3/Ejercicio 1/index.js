function inviertCadena(cad_arg){
    var cadenaSplited = cad_arg.split("");
    var invertirArreglo = cadenaSplited.reverse();
    var unirArreglo = invertirArreglo.join("");
    return unirArreglo;
}

function inviertePalabra(cad_arg){
    var palabras = cad_arg.split(" ");
    for(element of palabras){
        resultado += element.split("").reverse().join("");
    }
    return resulado;
}

function encuentraPalabraMasLarga(cad_arg){
    var palabras = cad_arg.split(" ");
    var palabramaslarga = "";
    for(element of palabras){
        if(element.length > palabramaslarga.length){
            palabramaslarga = element;
        }
    }
    return palabramaslarga;
    
}

function filtraPalabraMasLarga(cad_arg, num=0){
    contador = 0;
    var palabras = cad_arg.split(" ");
    for(element of palabras){
        if(element.length > num){
             contador++;
        }
    }
    return contador;
}

function cadenaBienFormada(cad_arg){
    resultado = cad_ard.toLowerCase();
    letra = cadena.charAt(0).toUpperCase();
    resultado = letra + resultado.substr();
    return resultado;
}


frase = prompt("Introduzca una cadena de texto cualquiera:");

// document.write(inviertCadena(frase));
// document.write(inviertePalabra(frase));
// document.write(encuentraPalabraMasLarga(frase));
// document.write(filtraPalabraMasLarga(frase));
// document.write(cadenaBienFormada(frase));
