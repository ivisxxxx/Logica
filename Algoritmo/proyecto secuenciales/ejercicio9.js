//9.Solicitar al usuario un número y mostrar su tabla de multiplicar del 1 al 10.
//entrada:numero=0(leer), resulatado=0(calculado)
//proceso:
//Escribir "Por favor, ingresa un número: "
    //Leer numero
	
    //Para multiplicador <- 1 Hasta 10 Hacer
        //resultado <- numero * multiplicador
        //Escribir numero, " x ", multiplicador, " = ", resultado
    //FinPara
//salida:resultado de la multiplicado
//Algoritmo
//Definir numero, resultado Como Entero
    //Definir multiplicador Como Entero
	
    //Escribir "Por favor, ingresa un número: "
    //Leer numero
	
    //Para multiplicador <- 1 Hasta 10 Hacer
        //resultado <- numero * multiplicador
        //Escribir numero, " x ", multiplicador, " = ", resultado
    //FinPara
//finalAlgoritmo
const read = require('prompt-sync')();
const write = console.log
//se crea la funcion
function tablaMultiplicar(){
    let numero=0
    numero = read("ingrese el numero:");
   
    for (let i = 1; i <= 10; i++) {
         resultado = numero * i;
        write(`${numero} x ${i} = ${resultado}`);
      }
    
}
tablaMultiplicar()