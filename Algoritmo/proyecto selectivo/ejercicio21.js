//21.	Dado un arreglo de 3 elementos indicar cuál de los elementos es el mayor
//entrada:arreglo=3(leer) mayor=0(calculado)
//proceso:
//  mayor <- arreglo[1]
    
  //  Escribir "Ingrese los 3 elementos del arreglo:"
  //  Para i <- 1 Hasta 3
  //  Escribir "Elemento ", i, ": "
  //  Leer arreglo[i]
  //  Si arreglo[i] > mayor Entonces
//       mayor <- arreglo[i]
  //   FinSi
  //  FinPara
    
    //Escribir "El mayor elemento del arreglo es: ", mayor
//salida:elemento mayor
//Algoritmo
//Definir arreglo[3], mayor, i como Entero
    
  //  mayor <- arreglo[1]
    
  //  Escribir "Ingrese los 3 elementos del arreglo:"
  //  Para i <- 1 Hasta 3
  //  Escribir "Elemento ", i, ": "
  //  Leer arreglo[i]
  //  Si arreglo[i] > mayor Entonces
//       mayor <- arreglo[i]
  //   FinSi
  //  FinPara
    
    //Escribir "El mayor elemento del arreglo es: ", mayor
//finalAlgoritmo
const read = require('prompt-sync')();
const write = console.log
//se crea una funcio
function elementosMayor(){
    let max = -Infinity;

for (let i = 0; i < 3; i++) {
  let num = read("Por favor, ingrese el número " + (i + 1) + ":");
  if (num > max) {
    max = num;
  }
}

write("El número mayor es: " + max);
}
elementosMayor()