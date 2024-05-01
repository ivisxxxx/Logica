//12.	Pedir al usuario el monto total de una factura y el porcentaje de IVA aplicado. 
//Luego, calcular y mostrar el monto total a pagar incluyendo el IVA.
//entrada:montoFactura=0(leer), porcentajeIVA=0(leer), montoIVA=0(leer), montoTotal=0(calculado)
//proceso:
// Escribir "Por favor, ingresa el monto total de la factura: "
    //Leer montoFactura
	
    //Escribir "Por favor, ingresa el porcentaje de IVA aplicado: "
    //Leer porcentajeIVA
	
   // montoIVA <- montoFactura * (porcentajeIVA / 100)
    //montoTotal <- montoFactura + montoIVA
	
    //Escribir "El monto total a pagar incluyendo el IVA es: ", montoTotal
//salida:montoTotal=0
//Algoritmo
//Definir montoFactura, porcentajeIVA, montoIVA, montoTotal Como Real
	
  //  Escribir "Por favor, ingresa el monto total de la factura: "
    //Leer montoFactura
	
    //Escribir "Por favor, ingresa el porcentaje de IVA aplicado: "
    //Leer porcentajeIVA
	
   // montoIVA <- montoFactura * (porcentajeIVA / 100)
    //montoTotal <- montoFactura + montoIVA
	
    //Escribir "El monto total a pagar incluyendo el IVA es: ", montoTotal
//finalAlgoritmo
const read = require('prompt-sync')(); 
const write = console.log
//se crea una funcion
function factura(){
    let  montoFactura , porcentajeIVA ,montoIVA
    montoFactura = read("Por favor, ingrese el monto total de la factura:"); 
    porcentajeIVA = read("Por favor, ingrese el porcentaje de IVA aplicado:");
    
    montoIVA = montoFactura * ( porcentajeIVA / 100);
    
    montoTotal =  montoFactura + montoIVA;
    
    
    write(`El monto total a pagar incluyendo el IVA es: ${montoTotal}`);
}
factura()