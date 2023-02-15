/* Funtanillas Belén
Al presionar el botón pedir 5 números e informar la suma acumulada y el promedio.
*/
function mostrar()
{
	let contador;
	let acumulador;
	let numeroIngresado;
	let promedio; 

	contador = 0;
	acumulador = 0;
	numeroIngresado = 0;

	
	for(i = 0;   i < 5; i++) 
	{
	
		numeroIngresado = parseInt(prompt("ingresa un numero"));

		while (isNaN(numeroIngresado)) 
		{
			numeroIngresado = parseInt(prompt("ERROR: ingresa un numero"));
		}

		contador = contador + 1;
		acumulador = acumulador + numeroIngresado; 
	}
	
	promedio =  acumulador / contador; 

	document.getElementById("txtIdSuma").value = acumulador; 
	document.getElementById("txtIdPromedio").value = promedio;

}//FIN DE LA FUNCIÓN