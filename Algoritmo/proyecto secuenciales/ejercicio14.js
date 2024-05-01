//14.Dado un arreglo de 5 elementos, presentar el primero, el del medio y el ultimo
//entrada:arreglo=0(leer ) elementos ==(calculado)
//Proceso:
//arreglo = [valor1, valor2, valor3, valor4, valor5]

// Presentar el primer elemento
//mostrar("El primer elemento es: " + arreglo[0])

// Presentar el elemento del medio
//indice_medio = longitud(arreglo) / 2
//mostrar("El elemento del medio es: " + arreglo[indice_medio])

// Presentar el último elemento
//mostrar("El último elemento es: " + arreglo[longitud(arreglo) - 1])
//Salida:los 5 elementos

//Algoritmo:
// Definir el arreglo de 5 elementos
//arreglo = [valor1, valor2, valor3, valor4, valor5]

// Presentar el primer elemento
//mostrar("El primer elemento es: " + arreglo[0])

// Presentar el elemento del medio
//indice_medio = longitud(arreglo) / 2
//mostrar("El elemento del medio es: " + arreglo[indice_medio])

// Presentar el último elemento
//mostrar("El último elemento es: " + arreglo[longitud(arreglo) - 1])
//FinalAlgoritmo:
const read = require('prompt-sync')();
const write = console.log
//se crea una funcion
function elementosPrimerMedioyULtimo(){
    let numbers = [];

    for (let i = 0; i < 5; i++) {
      numbers[i] = read("Por favor, ingrese el número " + (i + 1) + ":");
    }
    
    write("El primer número es: " + numbers[0]);
    write("El número del medio es: " + numbers[Math.floor(numbers.length / 2)]);
    write("El último número es: " + numbers[numbers.length - 1]);
}
elementosPrimerMedioyULtimo()