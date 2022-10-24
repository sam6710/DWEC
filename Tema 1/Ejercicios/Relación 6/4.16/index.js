numero_secreto = parseFloat(prompt("Introduzca un número a adivinar:"));
adivinar = parseFloat(prompt("Introduzca un número para intentar adivinar el número secreto:"));

do{
    if(adivinar<numero_secreto){
        alert("El número secreto es mayor al introducido.");
        adivinar = parseFloat(prompt("Introduzca un número para intentar adivinar el número secreto:"));
    }
    else{
        alert("El número secreto es menor al introducido.");
        adivinar = parseFloat(prompt("Introduzca un número para intentar adivinar el número secreto:"));
    }
}while(adivinar!=numero_secreto)
document.write("¡HAS CONSEGUIDO ADIVINAR EL NÚMERO SECRETO!");