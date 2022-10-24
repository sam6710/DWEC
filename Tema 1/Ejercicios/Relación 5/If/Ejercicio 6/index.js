lugar = prompt("Introduzca su lugar de residencia.");
edad = prompt("Introduzca su edad.");

if(lugar=="Madrid"){
    if(edad>18 && edad<30){
        console.log("Puede acceder al carnet de empresarios emprendedores.");
    }
    else{
        console.log("No.");
    }
}
else{
    console.log("No vives en Madrid.");
}