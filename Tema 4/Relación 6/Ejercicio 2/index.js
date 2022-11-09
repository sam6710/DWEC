// function setCookie(cname, cvalue, exdays) {
//     const d = new Date();
//     d.setTime(d.getTime() + (exdays*24*60*60*1000));
//     let expires = "expires="+ d.toUTCString();
//     document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
// }

// if (setCookie("nombre")){
//     nombre = getCookie("nombre");
//     document.write("Hola " + nombre);
// }
// else{
//     // cookieCaduca = prompt("Nombre de usuario:");
// setCookie("nombre", nombre, 0,0034722222222222);
//     document.write("Hola " + cookieCaduca);
// }

// window.onload = () =>{
//     btnRojo = document.getElementById("Rojo");
//     btnAzul = document.getElementById("Azul");
//     btnAmarillo = document.getElementById("Amarillo");

//     btnRojo.addEventListener("click",fondoRojo);
//     btnAzul.addEventListener("click",fondoAzul);
//     btnAmarillo.addEventListener("click",fondoAmarillo);

//     let color = getCookie("colorfondo");

//     checkCookie();
//     checkFondo();
// }

// function fondoRojo(){
//     setCookie("colorfondo","red",15);
//     document.body.style.backgroundColor = "red";
// }

// function fondoAzul(){
//     setCookie("colorfondo","blue",15);
//     document.body.style.backgroundColor = "blue";
// }

// function fondoAmarillo(){
//     setCookie("colorfondo","yellow",15);
//     document.body.style.backgroundColor = "yellow";
// }

//funcion checkfondo
// function checkFondo() {
//     var color = getCookie("colorfondo");
//     if (color != "") {
//       alert("Welcome again " + color);
//     }
//     else {
//        color = prompt("Please enter your name:","");
//        if (color != "" && color != null) {
//          setCookie("colorfondo", color, 30);
//          alert("Welcome " + color);
//        }
//     }
// }