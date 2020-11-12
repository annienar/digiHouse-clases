const express = require("express");
const app = express();
const fs = require("fs");
let arrayHeroes = JSON.parse(heroes)

app.get("/", function(req, res){
    res.send("Ni Superman, Iron Man o La Mujer Maravilla son tan importantes cómo las y los Heroes de carne y hueso que encontrarás en este sitio. Esperamos que ellas y ellos te sirvan como inspiración para poder cumplir tus objetivos. Recuerda: ¡nunca pares de creer en ti!.");

});

app.get("/heroes", function(req, res){
    res.send(heroes)
});

app.get("/heroes/detalle/:id", function(req, res){
    for (let i = 0; i = arrayHeroes.length; i++){
        if (req.params.id == arrayHeroes[i].id) {
            return arrayHeroes[i];
        }
    }
    res.send("No encuentro un heroe con ese ID")
})

app.get("/creditos", function(req, res){
    res.send("Hecho por Ana Vásquez B,")
})

app.listen(3000, function(){
    console.log("Servidor corriendo en el puerto 3000");
    console.log("http://localhost:3000");
})