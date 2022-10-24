columnas = parseInt(prompt("Introduzca el número de columnas:"));
altura = parseFloat(prompt("Introduzca la altura en píxeles de las celdas:"));
anchura = parseFloat(prompt("Introduzca la anchura en píxeles de las celdas:"));

let i=0;
let relleno ="relleno";

document.write("<table border=” 0 ”cellspacing=” 2 ”bgcolor=” black ”width=” 200 ”>");
document.write("<tr bgcolor='white' height="+altura+">");

for (i=0; i!=columnas; i++){
    if (i%2==0){
        document.write("<td bgcolor='black' color='white' width="+anchura+"></td>");
    }
    else{
        document.write("<td width="+anchura+"></td>");
    }
    
}

document.write("</tr>");
document.write("</table>");

//document.write("<td width="+anchura+">"+relleno+"</td>");