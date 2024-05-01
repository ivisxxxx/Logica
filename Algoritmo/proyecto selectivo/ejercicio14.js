//14.	Pedir al usuario su nota en un examen y determinar si ha aprobado o reprobado,
 //considerando que la nota mínima de aprobación es 60 puntos.
 //entrada:notaExamen=0(leer),aprobacion=0(calculado)
//proceso:
//Si notaExamen >= 60 Entonces
//   Escribir "¡Felicidades! Has aprobado el examen."
//Sino
 //  Escribir "Lo siento, has reprobado el examen."
//FinSi
//salida:nota
//Algoritmo
//Definir notaExamen Como Entero
	
  //  Escribir "Por favor, ingresa tu nota en el examen: "
   // Leer notaExamen
	
   // Si notaExamen >= 60 Entonces
     //   Escribir "¡Felicidades! Has aprobado el examen."
    //Sino
      //  Escribir "Lo siento, has reprobado el examen."
    //FinSi
//finalAlgoritmo
 const read = require('prompt-sync')(); 
const write = console.log
//se crea una funcion
function nota(){
let nota=0
nota= read("Por favor, ingrese su nota en el examen:");
if (nota >= 60) {
    write("Felicidades, ha aprobado el examen :).");
  } else {
    write("Lo siento, ha reprobado el examen :(.");
  }
}
nota()