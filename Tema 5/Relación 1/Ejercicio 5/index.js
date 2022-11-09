window.onload = function() {
    boton_añadir = document.getElementById("añadir");
    form = document.getElementById("form");

    boton_añadir.addEventListener("click", function(){
        input_fichero = document.createElement("input");
        input_fichero.setAttribute("type", "file");
        form.appendChild(input_fichero);
        form.appendChild(document.createElement("br"))
        form.appendChild(document.createElement("br"))
    });
}