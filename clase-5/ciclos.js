let unObjeto = {
    nombre: "Serena",
    apellido: "Tsukino"
}

for(let laPropiedad in unObjeto) { //estoy usando las propiedades que tiene un Objeto en particular.
    console.log(`Ejemplo for in: Mi ${laPropiedad} es ${unObjeto[laPropiedad]}`)
}

let listaDePeliculas = ["Kill Bill", "Pulp Fiction", "Jackie Brown"];

for (let laPelicula of listaDePeliculas) {
    console.log(`Ejemplo for of ${laPelicula}`)
}
