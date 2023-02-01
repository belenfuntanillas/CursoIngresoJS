/* Funtanillas Belén 
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 
function sumar()
{	let numUnoTexto;
    let numDosTexto; 
	let numUno;
	let numDos;
	let mensaje;

	numUnoTexto = document.getElementById("txtIdNumeroUno").value;
	numDosTexto = document.getElementById("txtIdNumeroDos").value;

	numUno = parseInt(numUnoTexto);
	numDos = parseInt(numDosTexto);
	mensaje= "La suma es " + (numUno + numDos); 

	alert(mensaje);	
}

function restar()
{  let numUnoTexto;
   let numDosTexto;
   let numUno;
   let numDos; 

   numUnoTexto = document.getElementById("txtIdNumeroUno").value;
   numDosTexto = document.getElementById("txtIdNumeroDos").value;

   numUno = parseInt(numUnoTexto);
   numDos = parseInt(numDosTexto);
   mensaje1 = "La resta es " + (numUno - numDos)

   alert(mensaje1)
	
}

function multiplicar()
{   let numUnoTexto;
	let numDosTexto;
	let numUno;
	let numDos; 
 
	numUnoTexto = document.getElementById("txtIdNumeroUno").value;
	numDosTexto = document.getElementById("txtIdNumeroDos").value;
 
	numUno = parseInt(numUnoTexto);
	numDos = parseInt(numDosTexto);
	mensaje2 = "La multiplicación es " + (numUno * numDos)

	alert(mensaje2)
	
}

function dividir()
{
	let numUnoTexto;
	let numDosTexto;
	let numUno;
	let numDos; 
 
	numUnoTexto = document.getElementById("txtIdNumeroUno").value;
	numDosTexto = document.getElementById("txtIdNumeroDos").value;
 
	numUno = parseInt(numUnoTexto);
	numDos = parseInt(numDosTexto);
	mensaje3= "La división es " + (numUno / numDos)

	alert(mensaje3)

}

