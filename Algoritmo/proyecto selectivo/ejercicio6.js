//6.	Solicitar al usuario un carácter y mostrar si es una vocal o consonante.
//entrada:caracter=0(leer) vocal=0(calculado)
//proceso:
//  Escribir "Por favor, ingresa un carácter: "
  //  Leer caracter
	
  //  Si caracter = "a" o caracter = "e" o caracter = "i" o caracter = "o" o caracter = "u" Entonces
  //      Escribir "El carácter ingresado es una vocal."
   // Sino
     //   Escribir "El carácter ingresado es una consonante."
   // FinSi
//salida:vocal o consonante
//algoritmo
//Definir caracter Como Caracter
	
  //  Escribir "Por favor, ingresa un carácter: "
  //  Leer caracter
	
  //  Si caracter = "a" o caracter = "e" o caracter = "i" o caracter = "o" o caracter = "u" Entonces
  //      Escribir "El carácter ingresado es una vocal."
   // Sino
     //   Escribir "El carácter ingresado es una consonante."
   // FinSi
//finalAlgoritmo
const read = require('prompt-sync')();
const write = console.log;
//se crea una funcion
function vocal(){
    let caracter
    caracter = read("Por favor, ingrese un carácter: ");

    if (caracter === 'a' || caracter === 'e' || caracter === 'i' || caracter === 'o' || caracter === 'u') {
      write("El carácter ingresado es una vocal.");
    } else {
      write("El carácter ingresado es una consonante.");
    }
}
vocal()