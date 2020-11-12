function sumar(n1, n2) {
    return n1 + n2;
}

let restar = (n1, n2) => n1 - n2;

function calcular(n1, n2, procedimiento){
    return procedimiento ( n1, n2) //voy a ejecutar un procedimiento, es un parametro, respetando la cantidad de parametros que reciben otras funciones)
}

console.log(calcular(8,9, sumar))

// le estoy diciendo con procedimiento, a cual funcion llamar... a cual funcion hacer "un callback"