document.write("<table border='4' bordercolor='salmon'>");
document.write("<td width='80' align='center'>NÚMERO</td>");
document.write("<td align='center'>SENO</td>");

for(i=0; i<=100; i++){
    document.write("<tr>");
    document.write("<td>" + i + "</td>");
    document.write("<td>" + Math.sin(i) + "</td>");
    document.write("</tr>");
}

// do{
//     for(i=0; i<=100; i++){
//         document.write("<tr>");
//         document.write("<td>" + i + "</td>");
//         document.write("<td>" + Math.sin(i) + "</td>");
//         document.write("</tr>");
//     }
// } while(i!=(-1))

document.write("</table>");