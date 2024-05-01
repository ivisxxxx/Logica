//11.	Solicitar al usuario un número y mostrar si es un número de un solo dígito
//entrada:numero=0(leer), mostrar=0(calculado)
//proceso:
//Si Abs(numero) < 10 Entonces
      //  Escribir "El número ingresado es de un solo dígito."
    //Sino
        //Escribir "El número ingresado no es de un solo dígito."
    //FinSi
//salida:digito
//Algoritmo
//Definir numero Como Entero
	
    //Escribir "Por favor, ingresa un número: "
   // Leer numero
	
    //Si Abs(numero) < 10 Entonces
      //  Escribir "El número ingresado es de un solo dígito."
    //Sino
        //Escribir "El número ingresado no es de un solo dígito."
    //FinSi
//finalAlgoritmo
const read = require('prompt-sync')(); 
const write = console.log
//se crea una funcion
function digito(){
    let numero 
    numero= read("Por favor, ingrese un número:");

if (numero >= 0 && numero <= 9) {
  write(`El número ${numero} es un número de un solo dígito.`);
} else {
  write(`El número ${numero} no es un número de un solo dígito.`);
}
}
digito()