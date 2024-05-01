//4.	Solicitar al usuario un número y mostrar si es positivo o negativo.
//entrada:
//proceso:
//salida:
//Algoritmo
//Definir numero Como Real
	
//	Escribir "Por favor, ingresa un número: "
//	Leer numero
	
//	Si numero > 0 Entonces
//		Escribir "El número ingresado es positivo."
//	Sino
//		Si numero < 0 Entonces
//      Escribir "El número ingresado es negativo."
//	Sino
//		Escribir "El número ingresado es cero."
//	FinSi
//	fin si
//finalAlgoritmo
const read = require('prompt-sync')();
const write = console.log;
//se crea una funcion
function PositivooNegativo(){
let numero=0
numero = read('Por favor, ingrese un número: ');

if (numero > 0) {
  write(`El número es positivo.`);
} else if (numero < 0) {
  write(`El número es negativo.`);
} else {
  write(`El número es cero.`);
}
}
PositivooNegativo()