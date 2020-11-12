const process = require('process');
const fs = require('fs');

let TareasJSON = fs.readFileSync("./tareas.json", "utf8");
let arrayDeTareas = JSON.parse(tareasJSON);

switch(laInstruccionQueElUsuarioTipeo) {
	case 'listarTareas':
       

		break;
	default:
		console.log("No entiendo cual es la instrucción que querés ejecutar :(")
}
