// Molde para crear un template 

function personaje (unNombre, unApellido) {

    this.nombre = unNombre;
    this.apellido = unApellido;
    this.saludar = function() {
        return "Hola! Soy " + this.nombre
    }
}


let unPersonaje = new personaje( "Serena", "Tsukino");
let unoMas = new personaje ("Jeff", "Winger");

console.log(unPersonaje.saludar())
console.log (unoMas.saludar())

