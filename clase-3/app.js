let process = require ('process')

if (process.argv[2] == "listarTarea") { 
    console.log ("Voy a listar tus tareas")
}
else if (process.argv[2] == "crearTarea") {
    console.log("Creamos una tarea nueva")

}

else {
    console.log (Solo entiendo los siguientes comandos \n •)
}