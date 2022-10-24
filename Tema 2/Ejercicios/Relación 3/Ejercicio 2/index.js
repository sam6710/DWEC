function cad_info(cad){
    cadUpper = cad.toUpperCase();
    cadLower = cad.toLowerCase();
    if(cad === cadUpper){
        document.write("La cadna esta formada completamente por mayúsculas.");
    }
    else if(cad === cadLower){
        document.write("La cadena está formada completamente por minúsculas.");
    }
    else{
        document.write("La cadena es una mezcla de mayúsculas y minúsculas.");
    }
}

cad = prompt("Introduzca una cadena de teto cualquiera:");

cad_info(cad);