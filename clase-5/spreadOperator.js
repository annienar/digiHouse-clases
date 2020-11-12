//... 

let listaDePeliculas = ["Kill Bill", "Pulp Fiction", "Jackie Brown"];
let otrasPeliculas = ["Django Unchained", "Once upon a time in Hollywood"];

let unArrayUnico = [...listaDePeliculas, ...otrasPeliculas];

console.log(unArrayUnico)

let unObjeto = {
    genero: "Femenino",
    esSailorMoon: true
}

let ella = {
    nombre: "Serena",
    apellido: "Tsukino",
    ...unObjeto
}

console.log(ella)