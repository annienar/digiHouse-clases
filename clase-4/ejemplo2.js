let sumar = (n1, n2) => ///arrow function///
    n1 + n2 

console.log(sumar(10,20))

let saludar = () => (saludar() )

// condicionales ternarios

function esPar(numero) {
    return (numero % 2 == 0) ? "Si, este numero es par" : "No, este numero no es par"
}

console.log(esPar(5))
console.log(esPar(10))

// condicional switch

let dia = "lunes".toLowerCase();

switch(dia){
    case "martes":
        console.log("noup")
        break;
    case "miercoles":
        console.log("Not quite yet")
        break;
    case "jueves":
        console.log("Almost There!")
        break;
    case "Viernes": 
        console.log("😍")
        break;
    case "lunes":
    case "sabado":
    case "domingo":
        console.log("Lejitos") 
        break;
    default: "no te entiendo"
        break;
    }
