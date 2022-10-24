mes = prompt("Introduzca el nombre de un mes:");

switch(mes){
    case "Enero":
    case "Marzo":
    case "Mayo":
    case "Julio":
    case "Agosto":
    case "Octubre":
    case "Diciembre":
        document.write("Este mes tiene 31 días.");
    break;
    case "Abril":
    case "Junio":
    case "Septiembre":
    case "Noviembre":
        document.write("Este mes tiene 30 días.");
    break;
    case "Febrero":
        document.write("Este mes tiene 28 días, salvo en años bisiestos que tiene 29.");
    break;
    default:
        document.write("Ese mes no existe.");
}