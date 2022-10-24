ancho = parseInt(prompt("Introduzca el ancho deseado:"));

document.write("<table border='0' cellspacing='2' bgcolor='black'>");
for(let i = 0; i<8; i++){
    for(let j = 0;j<8;j++){
        document.write("<tr bgcolor='white' height='" + ancho + "'>");
        if(i%2!=0 && j%2==0)
            document.write("white"');
        else if(i%2!=0 || j%2==0)
            document.write("black"');
        else
            document.write("white"');
        document.write(">%nbsp;</td>");
    }
    document.write("</tr>");
}
document.write("</table>");