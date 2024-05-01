//5.	Pedir al usuario dos números y mostrar si son iguales o diferentes.
//entrada: numero1=0(leer), numero2=0(leer), mostrar=0(calculado)
//proceso:
//Escribir "Por favor, ingresa el primer número: "
  //  Leer numero1
	
 //   Escribir "Por favor, ingresa el segundo número: "
   // Leer numero2
	
 //   Si numero1 = numero2 Entonces
//        Escribir "Los números ingresados son iguales."
//    Sino
//        Escribir "Los números ingresados son diferentes."
 //   FinSi
//salida:el resultado si son iguales o diferentes
const read = require('prompt-sync')();
const write = console.log;
//se crea una funcion
function iguales_o_Diferente(){
let numero1=0, numero2=0

numero1 = read ("Ingrese el primer numero:");
numero2 = read("Ingrese el segundo numero:");

if (numero1==numero2){
    write("los numeros ingresados son iguales")
}else{
    write("los numeros ingresados son diferentes ")
}
}
iguales_o_Diferente()