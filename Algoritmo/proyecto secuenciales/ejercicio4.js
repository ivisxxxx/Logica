//4.Pedir al usuario un número y mostrar su doble.
//entrada:Numero=0(leer),doble=0(calculado)
//proceso:
//Escribir "Por favor, ingresa un número: "
//Leer numero

//doble <- numero * 2

//Escribir "El doble del número ingresado es: ", doble
//salida:el doble
//algoritmo
//Definir numero, doble como Real
	
//Escribir "Por favor, ingresa un número: "
//Leer numero

//doble <- numero * 2

//Escribir "El doble del número ingresado es: ", doble
const read = require('prompt-sync')();
const write = console.log
// se crea la funcion
function dobleNumero(){
 let numero=0, doble=0
 numero = read("Ingrese el numero1:")
 numero = parseFloat(numero)
 if(isNaN(numero)){
    write('eso no es un numero valido');
 }else{
    doble = numero * 2;
write(`El doble de ${numero} es ${doble}`)
}
}
dobleNumero()