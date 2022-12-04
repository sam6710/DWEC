var bola, posX, posY, direccionX, direccionY, velocidadX, velocidadY, radio, posY_barra1, posY_barra2, velocidad_barra1, velocidad_barra2, barra1, barra2, goles_j1, goles_j2;

window.onload = () => {
    //bola
    bola = document.getElementById("bola");
    posX = 500;
    posY = 220;
    direccionX = 1;
    direccionY = 1;
    velocidadX = 1;
    velocidadY = 1;
    radio = 20;

    //barras
    barra1 = document.getElementById("barra1");
    barra2 = document.getElementById("barra2");
    velocidad_barra1 = 16;
    velocidad_barra2 = 16;
    posX_barra1 = 8;
    posY_barra1 = 180;
    posX_barra2 = 980;
    posY_barra2 = 180;
    direccion_barra1 = 1;
    direccion_barra2 = 1;

    //marcador
    marcador1 = document.getElementById("j1");
    marcador2 = document.getElementById("j2");

    setInterval(dibujaEscenario, 10);

    document.addEventListener("keydown", (e) => {
        if(e.key == "w"){
            if(posY_barra1>5){
                posY_barra1  -= direccion_barra1*velocidad_barra1;
                barra1.setAttribute("y", posY_barra1);
            }
        }
        if(e.key == "s"){
            if(posY_barra1<420){
                posY_barra1  += direccion_barra1*velocidad_barra1;
                barra1.setAttribute("y", posY_barra1);
            }
        }

        if(e.key == "ArrowUp"){
            if(posY_barra2>5){
                posY_barra2  -= direccion_barra2*velocidad_barra2;
                barra2.setAttribute("y", posY_barra2);
            }
        }
        if(e.key == "ArrowDown"){
            if(posY_barra2<420){
                posY_barra2  += direccion_barra2*velocidad_barra2;
                barra2.setAttribute("y", posY_barra2);
            }
        }
    });
}

function dibujaEscenario(){
    goles_j1 = 0;
    goles_j2 = 0;

    if(posX-radio<posX_barra1+12 && posY>posY_barra1 && posY<posY_barra1+72){
        direccionX = 1;
    }
    posX += direccionX*velocidadX;
    bola.setAttribute("cx", posX);
    
    if(posX+radio>posX_barra2 && posY>posY_barra2 && posY<posY_barra2+72){
        direccionX = -1;
    }
    posX += direccionX*velocidadX;
    bola.setAttribute("cx", posX);
    
    bola.setAttribute("cx", posX);
    if(posY>(500-radio) || posY<(0+radio)){
        direccionY*=-1;
    }
    posY += direccionY*velocidadY;
    bola.setAttribute("cy", posY);

    if(posX>(1000-radio) || posX<(0+radio)){
        dibujaEscenario();
        if(posX<0){
            goles_j1++;
            marcador1.innerHTML = goles_j1;
        }
        if(posX>1000){
            goles_j2++;
            marcador2.innerHTML = goles_j2;
        }
    }
}
