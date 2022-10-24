let fecha = new Date();
let contador = 60;

function reloj(){
    document.write(contador + "<br>");
    contador --;
    if(contador >= 0){
        setTimeout(reloj ,1000);
    }
}

setTimeout(reloj ,1000);

//¿?

// function contador(){
//     hora = new Date();
//     document.write(hora.getSeconds() + "<br>");
//     if(hora.getSeconds()<0);
//         setTimeout(contador ,1000);
// }

// setTimeout(contador ,1000);