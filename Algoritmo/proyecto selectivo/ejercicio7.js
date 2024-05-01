//7.Pedir dos nombres e indicar si son iguales, si el primer nombre es mayor que el segundo o menor que el segundo
//entrada: nombre1=0(leer), nombre2=0(leer)
//proceso:
//Si nombre1 = nombre2 Entonces
//Escribir "Los nombres ingresados son iguales."
//Sino
//Si nombre1 > nombre2 Entonces
//Escribir "El primer nombre es mayor que el segundo."
//Sino
//Escribir "El primer nombre es menor que el segundo."
//FinSi
//FinSi
//salida:resultado si es mayor o menor
//algoritmo
//Definir nombre1, nombre2 Como Cadena
	
    //Escribir "Por favor, ingresa el primer nombre: "
    //Leer nombre1
	
    //Escribir "Por favor, ingresa el segundo nombre: "
    //Leer nombre2
	
    //Si nombre1 = nombre2 Entonces
       // Escribir "Los nombres ingresados son iguales."
	//Sino
		//Si nombre1 > nombre2 Entonces
        //Escribir "El primer nombre es mayor que el segundo."
    //Sino
        //Escribir "El primer nombre es menor que el segundo."
    //FinSi
//FinSi
//finalAlgoritmo
const read = require('prompt-sync')();
const write = console.log;
//se crea una funcion
function Dosnombres(){
    let nombre1 =0, nombre2=0
    nombre1 = read("Ingrese el primer nombre:");
    nombre2 = read("ingrese el segundo nombre:");
    if (nombre1 == nombre2) {
        write("Los nombres son iguales.");
      } else if (nombre1 > nombre2) {
        write("El primer nombre es mayor que el segundo nombre.");
      } else {
        write("El primer nombre es menor que el segundo nombre.");
      }
}
Dosnombres()