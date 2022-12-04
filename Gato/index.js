window.onload = () => {
    contador = 0;
    contador2 = 0;
    imgs = document.getElementsByTagName("img");
    ps = document.getElementsByTagName("p");

    imgs[0].addEventListener("click", () => {
        contador++;
        ps[0].innerHTML = imgs[0].alt + " ha sido clicado " + contador;
    });

    imgs[1].addEventListener("click", () => {
        contador2++;
        ps[1].innerHTML = imgs[1].alt + " ha sido clicado " + contador2;
    });
};