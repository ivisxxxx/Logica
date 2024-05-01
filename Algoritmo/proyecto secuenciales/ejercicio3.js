//3.-Solicitar al usuario dos números y mostrar su suma.
//entrada:numero1=o(leer),numero2=0(leer), suma=0(calculado)
//proceso:
//escribir"Por favor, ingrese el primer numero "
//leer numero1
//Escribir "Ahora, ingresa el segundo número: "
    //Leer numero2
	
    //suma <- numero1 + numero2
	
    //Escribir "La suma de los números es: ", suma
//salida:suma
//algoritmo
//Definir numero1, numero2, suma como Real
	
    //Escribir "Por favor, ingresa el primer número: "
    //Leer numero1
	
    //Escribir "Ahora, ingresa el segundo número: "
    //Leer numero2
	
    //suma <- numero1 + numero2
	
    //Escribir "La suma de los números es: ", suma

//finalAlgoritmo
const read = require('prompt-sync')();
const write = console.log
// se crea la funcion
function suma(){
 let numero1=0, numero2=0, suma
 numero1 = read("Por favor, ingrese el primer número:");
 numero2 = read("Por favor, ingrese el segundo número:");
 
  suma = numero1 + numero2;
  
   write("La suma de los números es: " + suma);
}
suma()
