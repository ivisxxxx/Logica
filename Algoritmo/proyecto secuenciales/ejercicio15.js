//15.	Dado un arreglo de 5 elementos, cambiar los valores el primer y último elemento entre sí
//algoritmo
    // Definir el arreglo de 5 elementos
    //arreglo = [valor1, valor2, valor3, valor4, valor5]

    // Guardar el primer valor en una variable temporal
    //temp = arreglo[0]

    // Asignar el valor del último elemento al primer elemento
    //arreglo[0] = arreglo[4]

    // Asignar el valor guardado en la variable temporal al último elemento
    //arreglo[4] = temp

    // Mostrar el arreglo después del intercambio
    //mostrar(arreglo)
//finalAlgoritmo
//
const read = require('prompt-sync')();
const write = console.log
//se crea una funcion
function cambiarvar(){
let elementos = new Array(5)
let vari, i
write("ingrese 5 elementos(palabras):")

for (i = 1 ; i <=5 ; i++ ){
    elementos[i] = read("")
}

vari = elementos[1]
elementos[1]= elementos[5]
elementos[5] = vari

for (i =1 ; i<=5 ; i ++){
    write(elementos[i])
}
}
cambiarvar()