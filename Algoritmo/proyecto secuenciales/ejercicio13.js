//13.Dado un arreglo de 5 nombres presentarlos todos
//entrada:nombres=0 ,arreglo=0(calculado)
//proceso:
//Escribir "Ingresa los 5 nombres: "
//Para i <- 1 Hasta 5 Hacer
    //Escribir "Nombre ", i, ": "
    //Leer nombres
//FinPara

//Escribir "Los nombres ingresados son: "
//Para i <- 1 Hasta 5 Hacer
    //Escribir nombres
//FinPara
//salida:resulatdo de arreglo

//algoritmo
//Definir nombres Como Cadena
//Definir i Como Entero
	
//Escribir "Ingresa los 5 nombres: "
//Para i <- 1 Hasta 5 Hacer
    //Escribir "Nombre ", i, ": "
    //Leer nombres
//FinPara

//Escribir "Los nombres ingresados son: "
//Para i <- 1 Hasta 5 Hacer
    //Escribir nombres
//FinPara
//finalAlgoritmo

const read = require('prompt-sync')();
const write = console.log
//se crea una funcion
function nombres(){
let elementos = new Array(5)
let nombres
write("ingrese 5 nombres:")
for (i = 1 ; i <=5 ; i++ ){
    elementos[i] = read("")
}
nombres = elementos[1]

write("nombres presentados:")
for (i =1 ; i<=5 ; i ++){
    write(elementos[i])
}
}
nombres()
