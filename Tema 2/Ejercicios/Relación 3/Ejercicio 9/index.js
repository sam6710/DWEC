function tableWord(){
    document.write();

    for(let i=0; i<cadena.length; i++){
        document.write();
        if(i==0){
            for(let j=0; j<cadena.length; j++){
                document.write("");
            }
        }
        else if(i==cadena.length-1){
            for(let j=0; j<cadena.length; j++){
                document.write("");
            }
        }
        else{
            for(let j=0; j<cadena.length; j++){
                if(j==0){
                    document.write("");
                }
                else if(j==cadena.length){
                    document.write("");
                }
                else{
                    document.write("");
                }
            }
        }
    }
}

palabra = prompt("Introduzca la palabra que desee formatear:");