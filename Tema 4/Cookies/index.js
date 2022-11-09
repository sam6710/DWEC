if (setCookie("colorfondo"))
    console.log(document.cookie)
else
    document.cookie = "colorfondo=red;"

window.onload = () =>{
    btnRojo = document.getElementById("Rojo");
    btnAzul = document.getElementById("Azul");

    btnRojo.addEventListener("click",fondoRojo);
    btnAzul.addEventListener("click",fondoAzul);

    let color = getCookie("colorfondo");

    if (color){
        document.body.style.backgroundColor = color;
    }
}

function setCookie(cname, cvalue, exdays) {
    const d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    let expires = "expires="+ d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function fondoRojo(){
    setCookie("colorfondo","red",15);
    document.body.style.backgroundColor = "red";
}

function fondoAzul(){
    setCookie("colorfondo","blue",15);
    document.body.style.backgroundColor = "blue";
}