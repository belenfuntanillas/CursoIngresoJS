/* Funtaniillas Belén
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resto entre el dividendo y el divisor.
ej.: "El resto es 0 ."*/

//EJERCICIO 8 Y 8 BIS

function SacarResto()
{
	let numDividendo;
	let numDivisor;
	let mensaje;
	let suma;
	let mensajeSuma;
	let promedio;
	let mensajePromedio;
	let modulo;
	let mensajeModulo;

	numDividendo = document.getElementById("txtIdNumeroDividendo").value;
	numDivisor = document.getElementById("txtIdNumeroDivisor").value; 

	numDividendo= parseInt(numDividendo);
	numDivisor= parseInt(numDivisor);

	suma= (numDividendo + numDivisor);
	mensajeSuma= " La suma es " + suma;

	promedio= (suma / 2);
	mensajePromedio= " el promedio es " + promedio;

	modulo= numDividendo;
	mensajeModulo= " y el modulo es " + modulo;

	mensaje= "El resto es " + (numDividendo % numDivisor);



	alert(mensaje + mensajeSuma + mensajePromedio + mensajeModulo);
}

