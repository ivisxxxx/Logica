//7.Solicitar al usuario una temperatura en grados Celsius y mostrarla en grados Fahrenheit.
//entrada:temperatura=0(leer), fahrenheit=0(calculado) 
//proceso:
// Escribir "Por favor, ingresa la temperatura en grados Celsius: "
// Leer celsius
//fahrenheit <- (celsius * 9/5) + 32
	
//Escribir "La temperatura en grados Fahrenheit es: ", fahrenheit
//salida:fahrenheit

//algoritmo
//Definir celsius, fahrenheit Como Real
	
//Escribir "Por favor, ingresa la temperatura en grados Celsius: "
//Leer celsius

//fahrenheit <- (celsius * 9/5) + 32

//Escribir "La temperatura en grados Fahrenheit es: ", fahrenheit
    
//finalAlgoritmo
const read = require('prompt-sync')();
const write = console.log
// se crea la funcion
function temperatura(){
    let tempeGradoCelsius=0, fahrenheit=0;
    tempeGradoCelsius = read("Ingrese el temperatura en grado Celius:")
    tempeGradoCelsius =parseFloat(tempeGradoCelsius)
     fahrenheit = (tempeGradoCelsius * 9/5) + 32
    
    write(`la temperatura en grados Fahrenheit es ${fahrenheit}.`);
}
temperatura()
