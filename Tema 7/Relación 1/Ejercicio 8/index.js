$(document).ready(function() {
    $("button").click(function() {
        $("div").css({"font-size": "1.5em"});
    });

    $("h1").click(function() {
        $(this).siblings().toggle();
    });

    $("p").hover(function(){
        $(this).css("background-color", "purple");
    }
    , function(){
        $(this).css("background-color", "white");
    });
});