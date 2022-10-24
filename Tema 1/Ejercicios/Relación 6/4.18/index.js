columnas = parseInt(prompt("Introduzca el número de columnas deseado:"));
filas = parseInt(prompt("Introduzca el número de filas deseado:"));
altura = parseFloat(prompt("Introduzca la altura deseada:"));
anchura = parseFloat(prompt("Introduzca la anchura deseada:"));


document.write("<table border='1'>");

for(j=0; j<filas; j++){
    document.write("<tr height="+altura+">");
    for (i=0; i<columnas; i++){
        document.write("<td width="+anchura+"></td>");
    }
document.write("</tr>");
}

document.write("</table>");