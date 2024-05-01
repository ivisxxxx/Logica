//6.Pedir al usuario dos números y mostrar el resultado de multiplicarlos.
//entrada: numero1=0(leer), numero2=0(leer), multiplicado=0(calculado)
//proceso:
//Escribir "Por favor, ingresa el primer número: "
//Leer numero1
//Escribir "Por favor, ingresa el segundo número: "
//Leer numero2
//resultado <- numero1 * numero2
//Escribir "El resultado de multiplicar ", numero1, " y ", numero2, " es: ", resultado
//salida:multiplicado

//algoritmo
//Definir numero1, numero2, resultado Como Entero
	
//Escribir "Por favor, ingresa el primer número: "
//Leer numero1

//Escribir "Por favor, ingresa el segundo número: "
//Leer numero2

//resultado <- numero1 * numero2

//Escribir "El resultado de multiplicar ", numero1, " y ", numero2, " es: ", resultado
//finalAlgoritmo
const read = require('prompt-sync')();
const write = console.log
// se crea la funcion
function multiplicado(){
    let numero1=0, numero2=0, resultado=0
    numero1 = read("Ingrese el numero1:")
    numero1 =parseFloat(numero1)
    numero2 = read("Ingrese el numero2:")
    numero2 = parseFloat(numero2)
     
    resultado= numero1 * numero2
    write(`El resultado de multiplicar ${numero1} y ${numero2} es ${resultado}.`)
}
multiplicado()
