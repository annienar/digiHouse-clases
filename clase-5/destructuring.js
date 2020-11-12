//Guarda arrays en nuevas variables, desestructurando el array y creando variables que quedan en memoria

let listaDePeliculas = ["Kill Bill", "Pulp Fiction", "Jackie Brown"];

let [pelicula1, pelicula2, pelicula3] = listaDePeliculas;

console.log(pelicula1);
console.log(pelicula2);
console.log(pelicula3);

/* puedo ignorar una posición poniendo , , entre los nombres de las variables
 i.e.
 let [pelicula1, , pelicula3] = listaDePeliculas; 
 pelicula1 = "Kill Bill" pelicula2 = "Jackie Brown"
*/ 

let unObjeto = {
    nombre: "Serena",
    apellido: "Tsukino"
}

let { apellido } = unObjeto
console.log(apellido);

let { nombre: nombreDelPersonaje } = unObjeto
console.log(nombreDelPersonaje);

 

