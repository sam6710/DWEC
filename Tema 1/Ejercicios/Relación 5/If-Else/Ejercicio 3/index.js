edad = prompt("Edad:");

if(edad<5){
    console.log("Jardín de infancia.");
}
else if(edad>=6 && edad<=11){
    console.log("Primaria.")
}
else if(edad>=12 && edad<=16){
    console.log("ESO.")
}
else if(edad>=17 && edad<=21){
    console.log("Bachillerato o Ciclos.")
}
else if (edad>21){
    console.log("Universidad.")
}