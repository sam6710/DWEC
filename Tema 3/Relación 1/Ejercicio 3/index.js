function lanzamiento(){
    return Math.floor(Math.random() * 6 + 1)
}

function tiradas(){
    veces1 = 0;
    veces2 = 0;
    veces3 = 0;
    veces4 = 0;
    veces5 = 0;
    veces6 = 0;
    for(i=0; i<=6000; i++){
        valor = lanzamiento();
        if(valor === 1){
            veces1 ++;
        }
        else if(valor === 2){
            veces2 ++;
        }
        else if(valor === 3){
            veces3 ++;
        }
        else if(valor === 4){
            veces4 ++;
        }
        else if(valor === 5){
            veces5 ++;
        }
        else{
            veces6 ++;
        }
    }
}


// document.write(lanzamiento());

document.write("A");
document.write();
document.write();
document.write();
document.write();
document.write();