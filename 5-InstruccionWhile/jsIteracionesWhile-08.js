/* Funtanillas Belén 
Al presionar el botón pedir  números  hasta que el usuario quiera,
sumar los que son positivos y multiplicar los negativos.*/
function mostrar()
{
	let contador;
	let numeroIngresado
	let respuesta;
	let sumaPositivos;
	let multiplicacionNegativos;
	contador=0;
	sumaPositivos=0;
	multiplicacionNegativos=1;
	respuesta='si';

	while(respuesta=="si")  //while principal 
	{	contador = contador + 1; 
		numeroIngresado = parseInt(prompt("ingresa un numero"));

		while (isNaN(numeroIngresado)) 
		{
			numeroIngresado = parseInt(prompt("ERROR: ingresa un numero"));
		}
		if (numeroIngresado > 0) 
		{
			sumaPositivos = sumaPositivos + numeroIngresado;
		}
		else 
		{
			multiplicacionNegativos = numeroIngresado * multiplicacionNegativos;
		}

		respuesta = prompt("Desea ingresar otro numero? si/no"); 
	}

	document.getElementById("txtIdSuma").value = sumaPositivos;
	document.getElementById("txtIdProducto").value = multiplicacionNegativos;

}//FIN DE LA FUNCIÓN