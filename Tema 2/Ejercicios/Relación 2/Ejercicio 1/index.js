function getRandomNum(min, max) {
    return Math.random() * (max - min) + min;
}

document.write(getRandomNum(0,1) + "<br>");
document.write(getRandomNum(100,200) + "<br>")

let minimo = parseFloat(prompt("Introduzca en número mínimo:"))
let maximo = parseFloat(prompt("Introduzca en número máximo:"))

document.write(getRandomNum(minimo,maximo));