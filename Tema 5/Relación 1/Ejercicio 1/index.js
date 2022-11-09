window.onload = function() {
    var enlaces = document.getElementsByTagName("a");
    console.log(enlaces.length);

    console.log(enlaces[enlaces.length - 2].href);
    
    var contador = 0;
    for (var i = 0; i < enlaces.length; i++){
        if (enlaces[i].href.indexOf("https://www.google.es") != -1) {
            contador++;
        }
    }
    console.log(contador);

    var parrafos = document.getElementsByTagName("p");
    var enlacesParrafo = parrafos[2].getElementsByTagName("a");
    console.log(enlacesParrafo.length);
}