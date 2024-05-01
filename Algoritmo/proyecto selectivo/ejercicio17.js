//17.	La asociación de vinicultores tiene como política fijar un precio inicial al kilo de banano, 
//la cual se clasifica en tipos A y B, y además en tamaños 1 y 2. 
//Cuando se realiza la venta del producto, ésta es de un solo tipo y tamaño, se requiere determinar 
//cuánto recibirá un productor por el banano que entrega en un embarque, considerando lo siguiente:
//Si es de tipo A, se le cargan $2 al precio inicial cuando es de tamaño 1; y $3 si es de tamaño 2.
//Si es de tipo B, se rebajan $3 cuando es de tamaño 1, y $5 cuando es de tamaño 2.
//Realice un algoritmo para determinar la ganancia obtenida
//entrada:tipo, tamaño,precioInicial
//proceso:
// Si tipo = "A" Entonces
       // Si tamaño = "1" Entonces
           // precioInicial <- 10  // Precio inicial para tipo A y tamaño 1
           // ganancia <- precioInicial + 2  // Ganancia obtenida
        //Sino
            //precioInicial <- 10  // Precio inicial para tipo A y tamaño 2
           // ganancia <- precioInicial + 3  // Ganancia obtenida
        //FinSi
	//FinSi
		//Si tipo = "B" Entonces
       // Si tamaño = "1" Entonces
          //  precioInicial <- 10  // Precio inicial para tipo B y tamaño 1
          //  ganancia <- precioInicial - 3  // Ganancia obtenida
        //Sino
           // precioInicial <- 10  // Precio inicial para tipo B y tamaño 2
           // ganancia <- precioInicial - 5  // Ganancia obtenida
       // FinSi
   // FinSi
	
   // Escribir "La ganancia obtenida por el banano entregado es: ", ganancia
//salida:ganancia
//Algoritmo
//Definir tipo, tamaño Como Caracter
    //Definir precioInicial, ganancia Como Real
	
    //Escribir "Ingrese el tipo de banano (A o B): "
   // Leer tipo
	
   // Escribir "Ingrese el tamaño del banano (1 o 2): "
    //Leer tamaño
	
   // Si tipo = "A" Entonces
       // Si tamaño = "1" Entonces
           // precioInicial <- 10  // Precio inicial para tipo A y tamaño 1
           // ganancia <- precioInicial + 2  // Ganancia obtenida
        //Sino
            //precioInicial <- 10  // Precio inicial para tipo A y tamaño 2
           // ganancia <- precioInicial + 3  // Ganancia obtenida
        //FinSi
	//FinSi
		//Si tipo = "B" Entonces
       // Si tamaño = "1" Entonces
          //  precioInicial <- 10  // Precio inicial para tipo B y tamaño 1
          //  ganancia <- precioInicial - 3  // Ganancia obtenida
        //Sino
           // precioInicial <- 10  // Precio inicial para tipo B y tamaño 2
           // ganancia <- precioInicial - 5  // Ganancia obtenida
       // FinSi
   // FinSi
	
   // Escribir "La ganancia obtenida por el banano entregado es: ", ganancia
//finalAlgoritmo
const read = require('prompt-sync')();
const write = console.log
//se crea una funcion
function ventas(){
    let inicialBanano=0, tipo=0,tamaño=0,precioInicial=0, ganancia=0
     
    inicialBanano=read("Por favor, ingrese el precio inicial del banano:");
     tipo = read("Por favor, ingrese el tipo del banano (A o B):");
     tamaño= read("Por favor, ingrese el tamaño del banano (1 o 2):");
     ganancia = 0;
     if (tipo === 'A') {
        if (tamaño === '1') {
            ganancia = precioInicial + 2;
        } else {
            ganancia = precioInicial+ 3;
        }
      } else {
        if (tamaño === '1') {
            ganancia = precioInicial - 3;
        } else {
            ganancia = precioInicial - 5;
        }
      }
      
      // Display the profit earned by the producer
      write("La ganancia obtenida es: " + ganancia);
}
ventas()
