import {Book, Booklist} from "./libro.js";

window.onload = function(){
    var myBookList = new Booklist();
    document.querySelectorAll("button")[0].addEventListener("click", () =>{   
        titulo = document.getElementById("title").value;
        autor = document.getElementById("author").value;
        genero = document.getElementById("genre").value;
        myBookList.add(new Book(titulo, autor, genero));
        pintarListaLibros(myBookList);
    });
    document.getElementById("readingList").addEventListener("click", () =>{     
        myBookList.finishCurrentBook();
        pintarListaLibros(myBookList);
    });
}

function pintarListaLibros(lista){
    document.getElementById("readingList").innerHTML = "";
    lista.books.forEach((libro) =>{
            let leido;
            if(!libro.read)
                leido="Not Read";
            else{
                const options = {weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'};
                leido="Read on " + libro.readDate.toLocaleDateString('en-EN', options);
            }
           //Añadir Libro en interfaz
           let bookEntry = `<li class="list-group-item d-flex justify-content-between"><div>
           <h6 class="my-0"><b>${libro.title}</b></h6> <small class="text-muted" contenteditable="true">${libro.author}&nbsp;</small>
           </div> <span class="text-muted">${leido}</span>
           </li>`;
           document.getElementById("readingList").innerHTML += bookEntry;  
    })
    document.getElementById("booksRead").innerHTML = lista.numberBooksRead + " of "+ lista.totalBooks;
}


// Vista1 = document.getElementById("Vista1");
// Vista2 = document.getElementById("Vista2");
// Vista1.addEventListener("click", cambiarAVista1);
// Vista2.addEventListener("click", cambiarAVista2);
// div_lista = document.getElementsByClassName("col-md-8 order-md-1")[0];

// function cambiarAVista1(){
//     ul = document.createElement("ul");
//     li = document.createElement("li");
// }

// function cambiarAVista2(){
//     div = document.createElement("div");
//     h5 = document.createElement("h5");
//     p = document.createElement("p");
//     forEach()
//     div.appendChild(h5);
//     div.appendChild(p);
// }