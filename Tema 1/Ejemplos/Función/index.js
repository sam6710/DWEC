function suma(a=0,b=0,c=0){
    let resultado = a+b+c;
    document.write(resultado);
}

let numeros=[1,3,5];
//suma(numeros[0],numeros[1],numeros[2]);
suma(...numeros);