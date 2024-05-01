//2.Solicitar al usuario su edad y mostrar si es mayor o menor de edad.
//entrada:edad=0(leer),
//proceso:
    //Escribir "Por favor, ingresa tu edad: "
    //Leer edad
	
    //Si edad >= 18 Entonces
        //Escribir "Eres mayor de edad."
    //Sino
        //Escribir "Eres menor de edad."
    //FinSi
//salida:resultado si es mayor o menor de edad
//algoritmo
//Definir edad Como Entero
	
    //Escribir "Por favor, ingresa tu edad: "
    //Leer edad
	
    //Si edad >= 18 Entonces
        //Escribir "Eres mayor de edad."
    //Sino
        //Escribir "Eres menor de edad."
    //FinSi
//finalAlgoritmo
const read = require('prompt-sync')();
const write = console.log
//se crea una funcion
function edad(){
let edad=0
edad = read('Por favor, ingrese su edad: ');

if (edad >= 18) {
  write(`Eres mayor de edad.`);
} else {
  write(`Eres menor de edad.`);
}
}
edad()