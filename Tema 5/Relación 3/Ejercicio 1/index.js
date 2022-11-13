window.onload  = () => {
    horas_container = document.getElementById("horas");
    minutos_container = document.getElementById("minutos");
    segundos_container = document.getElementById("segundos");
    start = document.getElementById("start");
    stopp = document.getElementById("stop");
    reset = document.getElementById("reset");

    start.addEventListener("click", () => {
        interval = setInterval(() => {
            horas = parseInt(horas_container.innerHTML);
            minutos = parseInt(minutos_container.innerHTML);
            segundos = parseInt(segundos_container.innerHTML);
            if(segundos < 59){
                if(segundos < 9){
                    segundos_container.innerHTML = "0" + (++segundos);
                }
                else segundos_container.innerHTML++;
            }
            else{
                segundos_container.innerHTML = "00";
                if(minutos < 59){
                    if(minutos < 9){
                        minutos_container.innerHTML = "0" + (++minutos);
                    }
                    else minutos_container.innerHTML++;
                }
                else{
                    minutos_container.innerHTML = "00";
                    if(horas < 9){
                        horas_container.innerHTML = "0" + (++horas);
                    }
                    else horas_container.innerHTML++;
                }
            }
        }, 1000);
    });

    stopp.addEventListener("click", () => {
        window.clearInterval(interval);
        interval = null;
    });

    reset.addEventListener("click", () => {
        horas_container = minutos_container.innerHTML = segundos_container.innerHTML = "00";
        if(interval){
            window.clearInterval(interval);
        }
        interval = null;
    });
};