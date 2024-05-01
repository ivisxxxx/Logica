//10.	Pedir al usuario dos números y mostrar el mayor.
//entrada:numero1=0(leer), numero2=0(leer), numeroMayor=0(calculado)
//proceso:
// Escribir "Por favor, ingresa el primer número: "
//Leer numero1
	
//Escribir "Por favor, ingresa el segundo número: "
//Leer numero2

//Si numero1 > numero2 Entonces
    //Escribir "El mayor número es: ", numero1
//Sino
    //Si numero2 > numero1 Entonces
        //Escribir "El mayor número es: ", numero2
    //Sino
        //Escribir "Los dos números son iguales."
    //FinSi
//FinSi
//salida:resultado de numero mayor
//algoritmo
//Definir numero1, numero2, mayor Como Entero
	
//Escribir "Por favor, ingresa el primer número: "
//Leer numero1

//Escribir "Por favor, ingresa el segundo número: "
//Leer numero2

//Si numero1 > numero2 Entonces
   // Escribir "El mayor número es: ", numero1
//Sino
    //Si numero2 > numero1 Entonces
        //Escribir "El mayor número es: ", numero2
    //Sino
        //Escribir "Los dos números son iguales."
    //FinSi
//FinSi
//FinalAlgoritmo
const read = require('prompt-sync')();
const write = console.log
//se crea la funcion
function numeroMayor(){
let numero1=0, numero2=0
numero1= read("Ingrse el primer numero:")
numero2= read("Ingrse el segundo numero:")
if (numero1 > numero2) {
    write(`El número mayor es ${numero1}`);
  } else {
    write(`El número mayor es ${numero2}`);
  }
}
numeroMayor()