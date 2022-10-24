let fecha = new Date();

function reloj(){
    document.open();
    fecha = new Date();
    document.write(fecha.getHours() + ":");
    document.write(fecha.getMinutes() + ":");
    document.write(fecha.getSeconds() + "<br>");
    setTimeout(reloj, 1000);
}

setTimeout(reloj, 1000);



//--Con SetInterval--//

// let fecha = new Date();

// function reloj(){
//     document.open();
//     fecha = new Date();
//     document.write(fecha.getHours() + ":");
//     document.write(fecha.getMinutes() + ":");
//     document.write(fecha.getSeconds() + "<br>");
//     if(fecha.getSeconds() === 0){
//         clearInterval(Intervalo);
//     }
// }

// var Intervalo = setInterval(reloj, 1000);