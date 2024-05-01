//1.Pedir al usuario un número y mostrar si es mayor o menor que 10.
//entrada:numero=0(leer), mayor=0(calculado),menor=0(calculado)
//proceso:
///Escribir "Por favor, ingresa un número: "
//Leer numero

//Si numero > 10 Entonces
    //Escribir "El número ingresado es mayor que 10."
//Sino
    //Si numero < 10 Entonces
    //Escribir "El número ingresado es menor que 10."
//Sino
    //Escribir "El número ingresado es igual a 10."
//FinSi
//fin si
//salida:escribir el resultado si es mayor o menor o igual

//Algoritmo
//Definir numero Como Entero
	
//Escribir "Por favor, ingresa un número: "
//Leer numero

//Si numero > 10 Entonces
    //Escribir "El número ingresado es mayor que 10."
//Sino
    //Si numero < 10 Entonces
    //Escribir "El número ingresado es menor que 10."
//Sino
    //Escribir "El número ingresado es igual a 10."
//FinSi
//fin si
//finalAlgoritmo

const read = require('prompt-sync')();
const write = console.log
//se crea una funcion
function MayoroMenor(){
let numero=0
numero= read ("Ingrese el numero:");

if (numero > 10) {
  write(`El número es mayor que 10.`);
} else if (numero < 10) {
  write(`El número es menor que 10.`);
} else {
  write(`El número es igual a 10.`);
}
}
MayoroMenor()