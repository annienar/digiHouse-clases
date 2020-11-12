function sumar (...grupoDeNumeros) {
    return grupoDeNumeros.reduce(function(acumulador, elemento){
        return acumulador + elemento
    }, 0)
}

console.log(sumar(1,2,3,4))