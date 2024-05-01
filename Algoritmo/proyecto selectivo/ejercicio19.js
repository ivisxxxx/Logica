//19.	Dado un arreglo de 5 elementos indicar si el primero elemento es mayor que el último elemento.
//entrada: arreglo[5](leer), primero=0(calculado), ultimo=0(calculado)
//proceso:
//Para i <- 1 Hasta 5
    //Escribir "Elemento ", i, ": "
    //Leer arreglo[i]
//FinPara

//primero <- arreglo[1]
//ultimo <- arreglo[5]

//Si primero > ultimo Entonces
   // Escribir "El primer elemento es mayor que el último."
//Sino
   // Escribir "El primer elemento no es mayor que el último."
//FinSi
//salida:arreglo del primero y ultimo
//Algoritmo
//Definir arreglo[5], primero, ultimo como Entero
    
//Escribir "Ingrese los 5 elementos del arreglo:"
//Para i <- 1 Hasta 5
    //Escribir "Elemento ", i, ": "
    //Leer arreglo[i]
//FinPara

//primero <- arreglo[1]
//ultimo <- arreglo[5]

//Si primero > ultimo Entonces
   // Escribir "El primer elemento es mayor que el último."
//Sino
   // Escribir "El primer elemento no es mayor que el último."
//FinSi
//finalAlgoritmo
const read = require('prompt-sync')();
const write = console.log
//se crea una funcion
function mayorArreglo(){
let primer =0, ultimo=0
primer= read("Por favor, ingrese el primer número:");
ultimo = read("Por favor, ingrese el último número:");

if (primer> ultimo) {
    write("El primer número es mayor que el último número.");
  } else {
    write("El primer número no es mayor que el último número.");
  }
}
mayorArreglo()