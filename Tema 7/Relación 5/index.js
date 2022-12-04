$(document).ready(function(){
    //Enter
    $("input").keypress(function(e) {
        var keycode = (e.keyCode ? e.keyCode : e.which);
        if (keycode == "13") {
            Anadirrecordatorio();
            e.preventDefault();
            return false;
        }
    });
});

function Anadirrecordatorio(){
    var n_recordatorio = $("input").val();
    var li = $("<li id='recordatorio'><button id='hecho'></button><p id='contenido'>" + n_recordatorio + "</p></li>");
    var div_prioridades = $("<div id='prioridades'>Prioridad:<button class='prioridad' id='low'>↓Low</button><button class='prioridad' id='normal'>Normal</button><button class='prioridad' id='high'>High↑</button></div>");
    var div_tiempo = $("<div id='tiempo'><p>⌛Añadido hace" + "a" + "minutos</p></div>");
    // var eliminar = $("<button id='eliminar'><div>-</div</button>");
    $("ul").append(li);
    $("ul").append(div_prioridades);
    $("ul").append(div_tiempo);
    // $("ul").append(eliminar);
};