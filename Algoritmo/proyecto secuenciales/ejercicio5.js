//5.	Solicitar al usuario su edad y mostrar un mensaje indicando cuántos años tendrá en el próximo año.
//entrada: edad=0(leer), edadProximoAnio=0(calcular)
//proceso:
//Escribir "Por favor, ingresa tu edad actual: "
//Leer edad

//edadProximoAnio <- edad + 1

//Escribir "El próximo año tendrás ", edadProximoAnio, " años."
//salida:edadProximoanio
//algoritmo
//Definir edad, edadProximoAnio como Entero
	
//Escribir "Por favor, ingresa tu edad actual: "
//Leer edad

//edadProximoAnio <- edad + 1

//Escribir "El próximo año tendrás ", edadProximoAnio, " años."
//finalAlgoritmo
const read = require('prompt-sync')();
const write = console.log
// se crea la funcion
function edadProximoAnio(){
  let edad=0, edadProximoAnio=0;
  edad = read ("ingrese tu edad")
  edad = parseInt(edad)

  edadProximoAnio = edad +1
  write(`El proximo año tendrás${edadProximoAnio} años.`);
}
edadProximoAnio()