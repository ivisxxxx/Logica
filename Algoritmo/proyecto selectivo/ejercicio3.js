//3.Pedir al usuario un número y mostrar si es par o impar.
//entrada:numero=0(leer)
//proceso:
//	Escribir "Por favor, ingresa el numero: "
//	Leer numero

//	Si numero MOD 2 = 0 Entonces
//		Escribir "El número ingresado es par."
//	SiNo
//		Escribir "El número ingresado es impar."
//	Fin Si
//salida:el resultado si es par o impar
//algoritmo
//Definir numeros Como Entero
	
//	Escribir "Por favor, ingresa el numero: "
//	Leer numero

//	Si numero MOD 2 = 0 Entonces
//		Escribir "El número ingresado es par."
//	SiNo
//		Escribir "El número ingresado es impar."
//	Fin Si
//finalAlgoritmo
const read = require('prompt-sync')();
const write = console.log
//se crea una funcion
function ParoImpar(){
let numero =0
numero = read("Ingrese el numero:");

if(numero % 2 == 0 ){
    write("el numero ingresado es par:");
}
else {
    write("el numero ingresado es impar")
}
}
ParoImpar()