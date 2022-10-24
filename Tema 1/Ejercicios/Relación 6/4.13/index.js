columnas = parseInt(prompt("Introduzca el número de columnas:"));
altura = parseFloat(prompt("Introduzca la altura en píxeles de las celdas:"));
anchura = parseFloat(prompt("Introduzca la anchura en píxeles de las celdas:"));

let i=0;
let relleno ="relleno";

document.write("<table border='1'>");
document.write("<tr bgcolor='white' height="+altura+">");

while(i!=columnas){
    document.write("<td width="+anchura+">"+relleno+"</td>");
    i++;
}

document.write("</tr>");
document.write("</table>");