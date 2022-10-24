let fechaHoy = new Date();
document.write(fechaHoy + "<br>");

let fecha85 = new Date();
fecha85.setDate(fechaHoy.getDate() + 85);
document.write(fecha85 + "<br>");

let fecha187 = new Date();
fecha187.setDate(fechaHoy.getDate() - 187);
document.write(fecha187 + "<br>");

let fecha2 = new Date();
fecha2.setFullYear(fecha85.getFullYear() + 2);
document.write(fecha2 + "<br>");

let fechaResto = new Date();
fechaResto = fecha85.getDate() - fecha187.getDate();
document.write(fechaResto);