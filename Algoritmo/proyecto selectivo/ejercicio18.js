//18.	“Somos más” es una empresa dedicada a ofrecer banquetes; sus tarifas son las siguientes:
//El costo de platillo por persona es de $20.00, pero si el número de personas
//es mayor a 100 pero menor o igual a 200, el costo es de $15.00.  
//Para más de 200 personas el costo por platillo es de $10.00.
//Se requiere un algoritmo que ayude a determinar el presupuesto que se debe presentar a los
//clientes que deseen realizar un evento, considerando que al total hay que agregarle el 15% del iva
//entrada:numeroPersonas=0(leer),costoPorPersona=0(leer), costoTotal=0(leer), iva=0(leer), presupuestoTotal=0(calculado)
//proceso:
//Si numeroPersonas <= 100 Entonces
    //costoPorPersona <- 20.00
//Sino
    //Si numeroPersonas <= 200 Entonces
    //costoPorPersona <- 15.00
//Sino
    //costoPorPersona <- 10.00
//FinSi
//FinSi

//costoTotal <- costoPorPersona * numeroPersonas
//iva <- costoTotal * 0.15
//presupuestoTotal <- costoTotal + iva

//Escribir "El presupuesto para el evento es de $", presupuestoTotal
//salida:presupuestoTotal
//Algoritmo
//Definir numeroPersonas Como Entero
//Definir costoPorPersona, costoTotal, iva, presupuestoTotal Como Real
	
//Escribir "Ingrese el número de personas que asistirán al evento: "
//Leer numeroPersonas

//Si numeroPersonas <= 100 Entonces
    //costoPorPersona <- 20.00
//Sino
    //Si numeroPersonas <= 200 Entonces
    //costoPorPersona <- 15.00
//Sino
    //costoPorPersona <- 10.00
//FinSi
//FinSi

//costoTotal <- costoPorPersona * numeroPersonas
//iva <- costoTotal * 0.15
//presupuestoTotal <- costoTotal + iva

//Escribir "El presupuesto para el evento es de $", presupuestoTotal

//finalAlgoritmo

const read = require('prompt-sync')();
const write = console.log
//se crea una funcion
function costoPlatillo(){
    let numeroPersonas=0, costoTotal=0, iva=0, presupuestoTotal=0
    numeroPersonas = read("Por favor, ingrese el número total de personas:");

if (numeroPersonas > 200) {
    costoTotal =numeroPersonas * 10;
} else if (numeroPersonas > 100) {
    costoTotal = numeroPersonas * 15;
} else {
    costoTotal = numeroPersonas * 20;
}

 iva = costoTotal * 0.15;

 presupuestoTotal = costoTotal + iva;

write("El costo total del banquete incluyendo el IVA es: " + presupuestoTotal);
}
costoPlatillo()