function validarMayusculas(cadena){
    return /A-Z/.test(cadena);
};

// !@#$%^&
// [*.!@#$%^&]
function validarCaractresEspeciales(cadena){
    // .test(cadena);
};


// /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/
function validarCorreo(cadena){
    // .test(cadena);
};

function validarTarjetaCredito(cadena){
    let regExp = "/^(?:4[0-9]{12}(?:[0-9]{3})?/";
    return regExp.test(cadena);
};

function validarLongitud(cadena){
    // .test(cadena);
};

// *[0-9].*
function validarNumero(cadena){
    // .test(cadena);
};  

// console.log(validarMayusculas("hola"));
// console.log(validarCaractresEspeciales("hola"));
// console.log(validarCorreo("hola"));
// console.log(validarTarjetaCredito("4018742957333858"));
// console.log(validarLongitud("hola"));
// console.log(validarNumero("hola"));