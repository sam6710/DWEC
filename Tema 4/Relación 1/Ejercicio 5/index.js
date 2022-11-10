document.write("<table>")
    for(i=0;i<=100;i++){
        document.write("<tr>");
        for(j=0;j<=100;j++){
            document.write("<td></td>");
        }
        document.write("</tr>");
    }
document.write("</table>")
    
window.onload = () => {
    let casillas = document.getElementsByTagName("td");
    
    for (i=0; i<casillas.length; i++) {
        casillas[i].onmouseover = colorear;
    }

    let boton = document.getElementById("borrado");

    boton.addEventListener("click", () => {
        for (i=0; i<casillas.length; i++) {
            casillas[i].style.backgroundColor = "white";
        }
    });

    function colorear(e) {
        if (e.ctrlKey === true){
            e.target.style.backgroundColor = "red";
        }
        else if (e.shiftKey === true){
            e.target.style.backgroundColor = "blue";
        }
        else if (e.altKey === true){
            e.target.style.backgroundColor = "white";
        }
    }

};
