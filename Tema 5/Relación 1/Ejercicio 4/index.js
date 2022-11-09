window.onload() = function() {
    boton = document.getElementByTagName("button");
    // ul = document.createElement("ul");
    // document.body.appendChild(ul);

    boton.addEventListener("click", function(){
        // ul = document.createElement("ul");
        input = document.getElementByTagName("input");
        ul = document.getElementByTagName("ul");
        li = document.createElement("li");
        li.innerHTML = input.value;
        ul.appendChild(li);
    });
}