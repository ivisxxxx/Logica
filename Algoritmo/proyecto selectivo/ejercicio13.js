//13.	Solicitar al usuario el precio de un producto y el porcentaje de descuento aplicado.
// Calcular y mostrar el precio final luego de aplicar el descuento.
//entrada:
//proceso:
//  Escribir "Por favor, ingresa el precio del producto: "
   // Leer precioProducto
	
  //  Escribir "Por favor, ingresa el porcentaje de descuento aplicado: "
  //  Leer porcentajeDescuento
	
   // montoDescuento <- precioProducto * (porcentajeDescuento / 100)
   // precioFinal <- precioProducto - montoDescuento
	
   // Escribir "El precio final después de aplicar el descuento es: ", precioFinal
//salida:preciofinal
//Algoritmo
//Definir precioProducto, porcentajeDescuento, montoDescuento, precioFinal Como Real
	
  //  Escribir "Por favor, ingresa el precio del producto: "
   // Leer precioProducto
	
  //  Escribir "Por favor, ingresa el porcentaje de descuento aplicado: "
  //  Leer porcentajeDescuento
	
   // montoDescuento <- precioProducto * (porcentajeDescuento / 100)
   // precioFinal <- precioProducto - montoDescuento
	
   // Escribir "El precio final después de aplicar el descuento es: ", precioFinal
//finalAlgoritmo
const read = require('prompt-sync')(); 
const write = console.log
//se crea una funcion
function precioProducto(){
let precio=0, porcentajeDescuentoAplicado=0
 precio = read("Por favor, ingrese el precio del producto:");

porcentajeDescuentoAplicado = read("Por favor, ingrese el porcentaje de descuento aplicado:");

montodescuento = precio * (porcentajeDescuentoAplicado / 100);

finalPrecio = precio - montodescuento;

write(`El precio final del producto es: ${finalPrecio}`);
}
precioProducto()