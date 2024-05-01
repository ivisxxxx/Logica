//16.	Pedir al usuario su sueldo mensual y determinar su sueldo anual. 
//Si el sueldo anual supera los $30,000, aplicar un impuesto del 15% 
//sobre el excedente y mostrar el sueldo neto anual.
//entrada:sueldoMensual=0(leer), sueldoAnual=0(calculado), impuesto=0(leer), sueldoNetoAnual=0(calculado)
//proceso:
// Si sueldoAnual > 30000 Entonces
        //impuesto <- (sueldoAnual - 30000) * 0.15
        //sueldoNetoAnual <- sueldoAnual - impuesto
   // Sino
       // sueldoNetoAnual <- sueldoAnual
   // FinSi
	
   // Escribir "Tu sueldo anual es: ", sueldoAnual
    //Escribir "Tu sueldo neto anual después de impuestos es: ", sueldoNetoAnual
//salida:sueldo
//Algoritmo
//Definir sueldoMensual, sueldoAnual, impuesto, sueldoNetoAnual Como Real
	
    //Escribir "Por favor, ingresa tu sueldo mensual: "
   // Leer sueldoMensual
	
    //sueldoAnual <- sueldoMensual * 12
	
   // Si sueldoAnual > 30000 Entonces
        //impuesto <- (sueldoAnual - 30000) * 0.15
        //sueldoNetoAnual <- sueldoAnual - impuesto
   // Sino
       // sueldoNetoAnual <- sueldoAnual
   // FinSi
	
   // Escribir "Tu sueldo anual es: ", sueldoAnual
    //Escribir "Tu sueldo neto anual después de impuestos es: ", sueldoNetoAnual
//finalAlgoritmo
const read = require('prompt-sync')();
const write = console.log
//se crea una funcion
function sueldoMensual(){
    let sueldoMensual=0,sueldoAnual=0, impuesto=0, sueldoNetoAnual=0
    sueldoMensual = read("Por favor, ingrese su sueldo mensual:");
    sueldoAnual= sueldoMensual * 12;

    if (sueldoAnual > 30000) {
       impuesto = (sueldoAnual- 30000) * 0.15;
       sueldoNetoAnual = sueldoAnual - impuesto;
      
        write("Su sueldo neto anual es: " + sueldoNetoAnual);
      } else {
        write("Su sueldo anual es: " + sueldoAnual);
      }
}
sueldoMensual()