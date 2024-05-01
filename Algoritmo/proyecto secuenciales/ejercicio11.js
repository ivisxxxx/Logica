//11.Solicitar al usuario una distancia en metros y mostrarla en centímetros.
//entrada: metros=0(leer), centimetros=0(calculado)
//proceso:
// Escribir "Por favor, ingresa la distancia en metros: "
//Leer metros
	
//centimetros <- metros * 100

//Escribir "La distancia en centímetros es: ", centimetros
//salida:resultado del centimetros
//algoritmo
//Definir metros, centimetros Como Real
	
//Escribir "Por favor, ingresa la distancia en metros: "
//Leer metros

//centimetros <- metros * 100

//Escribir "La distancia en centímetros es: ", centimetros
//finalAlgoritmo
const read = require('prompt-sync')();
const write = console.log
//se crea la funcion
function metros(){
let metros=0, centimetros=0
    metros = read("Ingrese una metro:");
    centimetros = metros * 100;
    write(`La distancia en centímetros es ${centimetros}.`);

}
metros()