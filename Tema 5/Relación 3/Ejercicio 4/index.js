listaC = [];
listaC.push();
localStorage.listaCompra = JSON.stringify();

window.onload = () => {
    input = document.querySelector("input");
    addBtn = document.getElementById("añadir");
    ul = document.querySelector("ul");
    empty = document.querySelector(".empty");

    addBtn.addEventListener("click", (e) => {
    e.preventDefault();
    text = input.value;

    if(text !== ""){
        li = document.createElement("li");
        li.textContent = text;

        // li.appendChild(addModifyBtn());
        li.appendChild(addDeleteBtn());
        ul.appendChild(li);

        input.value = "";
        empty.style.display = "none";
    }
    });

    if(localStorage.listaCompra){
        listaC = JSON.parse(localStorage.listaCompra);
    }
};

function addDeleteBtn() {
  deleteBtn = document.createElement("button");
//   img = document.createElement("img");

//   deleteBtn.appendChild(img);
//   img.src="./imagenes/papelera.png";
  deleteBtn.textContent = "X";
  deleteBtn.id = "deleteBtn";

  deleteBtn.addEventListener("click", (e) => {
    li = e.target.parentElement;
    ul.removeChild(li);

    items = document.querySelectorAll("li");

    if (items.length === 0) {
      empty.style.display = "block";
    }
  });

  return deleteBtn;
}



// function addModifyBtn() {
//   modifyBtn = document.createElement("button");

//   modifyBtn.textContent = "Modify";
//   modifyBtn.className = "btn-modify";

//   modifyBtn.addEventListener("click", (e) => {
//     item = e.target.parentElement;
//     item.contentEditable = true;
//   });

//   return modifyBtn;
// }