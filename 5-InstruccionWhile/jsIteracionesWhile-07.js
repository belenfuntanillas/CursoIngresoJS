/* Funtanillas Belén
Al presionar el botón pedir  números  hasta que el USUARIO QUIERA 
e informar la suma acumulada y el promedio.
*/
function mostrar()
{
	var contador;
	var acumulador;
	var respuesta;
	contador=0;
	acumulador=0;
	respuesta='si';

	while(respuesta=="si")  //while principal 
	{
		numeroIngresado = parseInt(prompt("ingresa un numero"));

		while (isNaN(numeroIngresado)) 
		{
			numeroIngresado = parseInt(prompt("ERROR: ingresa un numero"));
		}

		contador = contador + 1;
		acumulador = acumulador + numeroIngresado; 

		respuesta=prompt("desea continuar? si/no");
	}
	
	promedio =  acumulador / contador; 

	document.getElementById("txtIdSuma").value = acumulador; 
	document.getElementById("txtIdPromedio").value = promedio;

}

//FIN DE LA FUNCIÓN 