//1.Pedir al usuario su nombre y saludarlo.
//entrada: nombre=0(leer), saludar=0(calcular)
//proceso:
//Escribir "Por favor, ingresa tu nombre: "
//Leer nombre
//Escribir "¡Hola, " + nombre + "! Bienvenido."
//salida:saludo
//algoritmo
//Definir nombre como Cadena
	
// Escribir "Por favor, ingresa tu nombre: "
//Leer nombre
	
//Escribir "¡Hola, " + nombre + "! Bienvenido."
//finalAlgoritmo
const read = require('prompt-sync')();
const write = console.log
//se crea la funcion
function saludo(){
let nombre=0
nombre = read("Ingrese el nombre:")
write(`¡Hola, ${nombre}! Bienvenido.`)
}
saludo()