//8.-Pedir al usuario su nombre y mostrarlo tres veces en la pantalla.
//entrada:nombre=0(leer),tresvecesNombre=3(calculado)
//proceso:
//Escribir "Por favor, ingresa tu nombre: "
//Leer nombre
	
//Para contador <- 1 Hasta 3 Hacer
//Escribir nombre
//FinPara
//salida:resultado de tresvecesNombre
//Algoritmo
//Definir nombre Como Caracter
// Definir contador Como Entero
	
//Escribir "Por favor, ingresa tu nombre: "
//Leer nombre
	
//Para contador <- 1 Hasta 3 Hacer
//Escribir nombre
//FinPara
//finalAgoritmo
const read = require('prompt-sync')();
const write = console.log
// se crea la funcion
function tresvecesNombre(){
let nombre=0
nombre = read("Ingrese el nombre:")

for (let i = 0; i < 3; i++) {
    write(`Su nombre es ${nombre}`);
  }
}
tresvecesNombre()