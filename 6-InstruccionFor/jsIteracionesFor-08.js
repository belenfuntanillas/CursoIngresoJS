/* Funtanillas Belén
al presionar el botón pedir un número. Informar si el numero es PRIMO o no.
*/
function mostrar()
{	
	let numeroIngresado; 
	let contadorDivisores; 

	contadorDivisores = 0; 

	numeroIngresado = parseInt(prompt("Escriba un numero"));
	while(isNaN(numeroIngresado))
	{
		numeroIngresado = parseInt(prompt("ERROR Escriba un numero"));
	}
	
	for( i = 2; i < numeroIngresado; i++)
	{
		if(numeroIngresado % i == 0)
		{
				contadorDivisores++; 
		}
	}

	if(contadorDivisores != 0 || numeroIngresado <= 1)
	{
		alert(numeroIngresado + " no es primo"); 
	}else 
	{	
		alert(numeroIngresado + " es primo"); 
	}
	
}//FIN DE LA FUNCIÓN