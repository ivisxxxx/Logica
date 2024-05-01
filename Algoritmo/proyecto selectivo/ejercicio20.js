//20.	Dado un arreglo de 5 elementos indicar si el primero elemento es par y el último elemento es impar
//entrada:arreglo=5(leer), resultado=0(calculado)
//proceso:
//   Escribir "Ingrese los 5 elementos del arreglo:"
//    Para i <- 1 Hasta 5
//        Escribir "Elemento ", i, ": "
//        Leer arreglo[i]
//    FinPara
    
//    Si arreglo[1] MOD 2 = 0 Entonces
//        es_par <- Verdadero
//    FinSi
    
//    Si arreglo[5] MOD 2 <> 0 Entonces
//        es_impar <- Verdadero
//    FinSi
    
//    Si es_par Entonces
//        Escribir "El primer elemento es par."
//    Sino
//        Escribir "El primer elemento no es par."
//    FinSi
    
//    Si es_impar Entonces
  //      Escribir "El último elemento es impar."
   // Sino
 //       Escribir "El último elemento no es impar."
//    FinSi
//salida:resultado par e impar
//Algoritmo verificar_par_impar
//    Definir arreglo[5], i como Entero
//    Definir es_par, es_impar como Logico
    
//    es_par <- Falso
//    es_impar <- Falso
    
//    Escribir "Ingrese los 5 elementos del arreglo:"
//    Para i <- 1 Hasta 5
//        Escribir "Elemento ", i, ": "
//        Leer arreglo[i]
//    FinPara
    
//    Si arreglo[1] MOD 2 = 0 Entonces
//        es_par <- Verdadero
//    FinSi
    
//    Si arreglo[5] MOD 2 <> 0 Entonces
//        es_impar <- Verdadero
//    FinSi
    
//    Si es_par Entonces
//        Escribir "El primer elemento es par."
//    Sino
//        Escribir "El primer elemento no es par."
//    FinSi
    
//    Si es_impar Entonces
  //      Escribir "El último elemento es impar."
   // Sino
 //       Escribir "El último elemento no es impar."
//    FinSi
//finalAlgoritmo
const read = require('prompt-sync')();
const write = console.log
//se crea una funcion
function primeryUltimo(){
    let primer=0, ultimo=0
    primer= read("Por favor, ingrese el primer número:");
    ultimo= read("Por favor, ingrese el último número:");

    if (primer % 2 === 0 && ultimo % 2!== 0) {
        write("El primer número es par y el último número es impar.");
      } else {
        write("El primer número no es par o el último número no es impar.");
      }
}
primeryUltimo()