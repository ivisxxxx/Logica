//22.	Dado un arreglo de 5 elementos presentar la suma de dichos elementos
//entrada:arreglo=5(leer),suma=0(calculado)
//proceso:
 //Para i <- 1 Hasta 5
        //Escribir "Elemento ", i, ": "
        //Leer arreglo[i]
      //  suma <- suma + arreglo[i]
    //FinPara
    
    //Escribir "La suma de los elementos del arreglo es: ", suma
//salida:suma de arreglo
//Algoritmo suma_elementos
    //Definir arreglo[5], suma, i como Entero
    
    //suma <- 0
    
    //Escribir "Ingrese los 5 elementos del arreglo:"
    //Para i <- 1 Hasta 5
        //Escribir "Elemento ", i, ": "
        //Leer arreglo[i]
      //  suma <- suma + arreglo[i]
    //FinPara
    
    //Escribir "La suma de los elementos del arreglo es: ", suma
//finalAlgoritmo
const read = require('prompt-sync')();
const write = console.log
//se crea la funcion
function sumadeArreglo(){
let sum = 0;

for (let i = 0; i < 5; i++) {
  let num = read("Por favor, ingrese el número " + (i + 1) + ":");
  sum += num;
}

write("La suma de los números es: " + sum);
}
sumadeArreglo()