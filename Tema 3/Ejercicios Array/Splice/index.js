lista_compra = ["Peras", "Manzanas", "Kiwis", "Plátanos", "Mandarinas"];
console.log("Lista", lista_compra);

let borrado = lista_compra.splice(1,1);
console.log("Borrado", lista_compra);

let anadido = lista_compra.splice(3, 0, "Naranjas", "Sandía");
console.log("Añadido", lista_compra);

let reemplazo = lista_compra.splice(1, 1, "Cerezas", "Nísperos");
console.log("Reemplazo", lista_compra);