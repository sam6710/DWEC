function setCookie(cname, cvalue, exdays) {
    const d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    let expires = "expires="+ d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

if (setCookie("nombre")){
    nombre = getCookie("nombre");
    document.write("Hola " + nombre);
}
else{
    // cookieCaduca = prompt("Nombre de usuario:");
    // setCookie("nombre", nombre, 0,0034722222222222);
    // document.cookie = "nombre="+cookieCaduca;
    // document.write("Hola " + cookieCaduca);
}

//funcion getcookie
function getCookie(cname) {
    let name = cname + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    for(let i = 0; i <ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

function checkCookie() {
    var user = getCookie("username");
    if (user != "") {
      alert("Welcome again " + user);
    }
    else {
       user = prompt("Please enter your name:","");
       if (user != "" && user != null) {
         setCookie("username", user, 30);
         alert("Welcome " + user);
       }
    }
}

function cerrarsesion(){

}

window.onload = () =>{
    let logOut = document.getElementById("logOut");
    logOut.addEventListener("click",cerrarsesion);
    checkCookie();
}