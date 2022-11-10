// import { Book as Libro, BookList as ListaLibros} from "./libro.js";
import { Book, Booklist } from "./libros.js";

window.onload = function(){
    const titulo = document.getElementById("title");
    const autor = document.getElementById("author");
    const genero = document.getElementById("genre");
    const boton = document.getElementsçByClassName("btn btn-primary btn-lg btn-block");
    boton[0].addEventListener("click", function(){
        let libro = new Libro(titulo, autor, genero);
        ListaLibros.add(libro);
        const ul = document.getElementById("readingList");
        li = document.createElement("li");
        ul.appendChild(li);
    });
};
