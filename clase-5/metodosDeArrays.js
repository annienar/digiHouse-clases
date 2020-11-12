let esteArray = [2, 3, 4];

let nuevoArray = esteArray.map(function(elemento, indice, arraySinEditar){
    return elemento + " ;) ";
})

console.log("Map " + nuevoArray)

//elemento: retorna cada elemento que incluye el array, al cual vamos a otorgarle nuevas propiedades (o no) Este parámetro es obligatorio

//i.e. return elemento * 100; 
// console.log(elemento)
// 200, 300, 400

//indice: posición del elemento al que quiero afectar.
//arraySinEditar: el array antes de ser modificado por el map, no es necesario.
let otroArray = [10, 20, 30]
let resultadoOtroArray = otroArray.reduce(function(acumulador, elemento){
    return acumulador + elemento
}, 0) 

console.log("Reduce " + resultadoOtroArray)

//se usa para sumar o concatenar los elementos
//acumulador: variable que acumula
// el segundo parametro (el 0, es el valor inicial del acumulador)

let numeros = [1, 2, 3, 10, 11, 12];

let filterEjemplo = numeros.filter(function(elemento, indice, array){
    return elemento >=10 // filtra los elementos que no cumplan las condiciones que determino y solo regresa, las que si.
})

console.log ("Filter " + filterEjemplo)