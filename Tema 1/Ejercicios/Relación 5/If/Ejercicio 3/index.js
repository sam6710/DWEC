edad = parseInt(prompt("Introduzca su edad: "));
localidad = (prompt("Introduzca la localidad en la que nació: "));

if(edad > 25){
    if(localidad === "Madrid"){
        console.log("Enhorabuena");
    }
    else{
        console.log("No vive en Madrid.")
    }
}
else{
    console.log("No es mayor de 25 años.");    
}