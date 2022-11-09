arrayImgs = ["./imagenes/alhambra1.jfif","./imagenes/alhambra2.jfif","./imagenes/alhambra3.jfif","./imagenes/alhambra4.jfif"];

window.onload = function() {
    i=0;
    ant = document.getElementById("ant");
    sig = document.getElementById("sig");
    img = document.getElementById("img");

    sig.addEventListener("click", siguienteImg);
    ant.addEventListener("click", anteriorImg);
}


function siguienteImg(){
    i++;
    img.src = arrayImgs[i];
    if(i != arrayImgs.length - 1) {
        sig.disabled = false;
        ant.disabled = false;
    }
    else{
        sig.disabled = true;
    }
};

function anteriorImg(){
    i--;
    img.src = arrayImgs[i];
    if(i!=0){
        ant.disabled = false;
        sig.disabled = false;
    }
    else{
        ant.disabled = true;
    }
};