//9.	Solicitar al usuario un número y mostrar si es divisible por 2.
//entrada:numero=0(leer), divisble=0(calculado)
//proceso:
//Si numero MOD 2 = 0 Entonces
	//Escribir "El número ingresado es divisible por 2 (es par)."
	
    //Sino
	//Escribir "El número ingresado no es divisible por 2 (no es par)."
//FinSi
//salida:divisible
//Algoritmo
//Definir numero Como Entero

	//Escribir "Por favor, ingresa un número: "
	
	//Leer numero

	//Si numero MOD 2 = 0 Entonces
	//Escribir "El número ingresado es divisible por 2 (es par)."
	
    //Sino
	//Escribir "El número ingresado no es divisible por 2 (no es par)."
//FinSi
//finalAlgoritmo
const read = require('prompt-sync')();
const write = console.log
//se crea una funcion
function divisible(){
let num 
num = read("Por favor, ingrese un número:");

if (num % 2 === 0) {
  write(`El número ${num} es divisible por 2.`);
} else {
  write(`El número ${num} no es divisible por 2.`);
}
}
divisible()