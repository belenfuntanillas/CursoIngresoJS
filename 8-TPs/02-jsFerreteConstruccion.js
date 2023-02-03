/*2.	Funtanillas Belén
Para el departamento de Construcción:
A.	 mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

function Rectangulo () 
{
    //perimetro: 2*ancho + 2*largo 
    //3 hilos de alambre: 3*perimetro 

    let largo;
    let ancho; 
    let perimetro; 
    let cantHilo;

    largo = parseFloat(document.getElementById("txtIdLargo").value); 
    ancho = parseFloat(document.getElementById("txtIdAncho").value); 

    perimetro = (2 * ancho) + (2 * largo);
    cantHilo = perimetro * 3; 
    alert("Cantidad de alambre a comprar: " + cantHilo + " metros");

}
function Circulo () 
{
	//Perimetro circulo: 2 * pi * radio   pi=3,14 
    let largo;
    let ancho
    let radio;
    let perimetroCirculo;
    let alambre; 
    let pi;

    largo = parseFloat(document.getElementById("txtIdLargo").value); 
    ancho = parseFloat(document.getElementById("txtIdAncho").value); 
    radio = parseFloat(document.getElementById("txtIdRadio").value);

    pi = 3,14;

    perimetroCirculo = 2 * pi * radio;

    alambre = perimetroCirculo * 3;

    alert("Cantidad de alambre a comprar para un terreno circular: " + alambre);
}
function Materiales () 
{
    //area de un rectangulo: ancho * largo 
    //para bolsa de cemento multiplico metro cuadrado * cemento y luego cal 
    // 1m x 1m = 2 bolsas de cemento y 3 bolsas de cal

    let largo;
    let ancho;
    let area;
    let cementoCantidad;
    let calCantidad;

    largo = parseFloat(document.getElementById("txtIdLargo").value); 
    ancho = parseFloat(document.getElementById("txtIdAncho").value); 

    area = ancho * largo; 

    cementoCantidad = area * 2;

    calCantidad = area * 3; 

    alert("Para " + largo + " metros de largo y " + ancho + " metros de ancho, se necesitan: " + cementoCantidad + " bolsas de cemento y " + calCantidad + " bolsas de cal ");
    
}