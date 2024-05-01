//12.	Pedir 5 números y asignarlos en un arreglo
//entrada:numero=0
//proceso:
//Para i <- 1 Hasta 5 Hacer
    //Escribir "Por favor, ingresa el número ", i, ": "
    //Leer num
//FinPara

//Escribir "Los números ingresados son: "
//Para i <- 1 Hasta 5 Hacer
    //Escribir num
//FinPara
//salida:arreglo
//algoritmo
//Definir num Como Entero
//Definir i Como Entero
	
//Para i <- 1 Hasta 5 Hacer
    //Escribir "Por favor, ingresa el número ", i, ": "
    //Leer num
//FinPara

//Escribir "Los números ingresados son: "
//Para i <- 1 Hasta 5 Hacer
    //Escribir num
//FinPara
//finalAlgoritmo
const read = require('prompt-sync')();
const write = console.log
// Definir un arreglo para almacenar los números
let numeros = [];

// Pedir al usuario que ingrese 5 números
for (let i = 0; i < 5; i++) {
    let numero = read ("Introduce el número " + (i+1) + ":");
    // Convertir el número ingresado a tipo numérico y agregarlo al arreglo
    numeros.push(parseFloat(numero));
}

// Mostrar los números ingresados
console.log("Los números ingresados son:");
for (let i = 0; i < numeros.length; i++) {
    console.log(numeros[i]);
}