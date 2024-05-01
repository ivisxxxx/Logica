//10.	Pedir al usuario un número y mostrar si es mayor, menor o igual a 100.
//entrada:numero=0(leer), mostrar=0(calculado)
//proceso:
//Si numero > 100 Entonces
    //    Escribir "El número ingresado es mayor que 100."
	//Sino
		//Si numero < 100 Entonces
      //  Escribir "El número ingresado es menor que 100."
    //Sino
      //  Escribir "El número ingresado es igual a 100."
    //FinSi
	//FinSi
//salida:mostra si es mayor o menor o igual que 100
//Algoritmo
  //Definir numero Como Entero
	
    //Escribir "Por favor, ingresa un número: "
    //Leer numero
	
    //Si numero > 100 Entonces
    //    Escribir "El número ingresado es mayor que 100."
	//Sino
		//Si numero < 100 Entonces
      //  Escribir "El número ingresado es menor que 100."
    //Sino
      //  Escribir "El número ingresado es igual a 100."
    //FinSi
	//FinSi
//finalAlgoritmo
const read = require('prompt-sync')(); 
const write = console.log
//se crea una funcion
function MostrarMayorMenorIgual(){
    let num
    num = read("Por favor, ingrese un número:");

if (num > 100) {
  write(`El número ${num} es mayor que 100.`);
} else if (num < 100) {
  write(`El número ${num} es menor que 100.`);
} else {
  write(`El número ${num} es igual a 100.`);
}
}
MostrarMayorMenorIgual()