//Me rallé

function getRandomIntNumInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    num = Math.floor(Math.random() * (max - min + 1) + min);
    return num;
}

function imagenes(num){
    if(num=1){
        document.write("<img src='./imágenes/1.png' alt='1'>");
    }
    else if(num=2){
        document.write("<img src='./imágenes/2.png' alt='2'>");
    }
    else{
        document.write("<img src='./imágenes/3.png' alt='3'>");
    }
}

document.write(getRandomIntNumInclusive(1,3));