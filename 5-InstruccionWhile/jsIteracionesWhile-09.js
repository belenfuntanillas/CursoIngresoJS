/* Funtanillas Belén
Al presionar el botón pedir  números  hasta que el usuario quiera,
mostrar el número máximo y el número mínimo ingresado.*/
function mostrar()
{	// declarar variables
	let banderaDelPrimero;
	let numeroIngresado;
	let numeroMaximo;
	let numeroMinimo;
	let respuesta;

	//iniciar variables

	banderaDelPrimero= true;
	respuesta='si';

	while(respuesta=="si")  //while principal 
	{
		numeroIngresado = parseInt(prompt("ingresa un numero"));

		while (isNaN(numeroIngresado)) 
		{
			numeroIngresado = parseInt(prompt("ERROR: ingresa un numero"));
		}
		if (banderaDelPrimero == true) 
		{
			numeroMaximo = numeroIngresado;
			numeroMinimo = numeroIngresado;
			banderaDelPrimero = false; 
		}
		else if(numeroMaximo < numeroIngresado) //numeroIngresado > numeroMaximo
		{
			numeroMaximo = numeroIngresado;
		}
		else if(numeroIngresado < numeroMinimo)
		{
			numeroIngresado = numeroMinimo;
		}

		respuesta=prompt("desea continuar? si/no");
	}
	
	document.getElementById("txtIdMaximo").value = numeroMaximo
	document.getElementById("txtIdMinimo").value = numeroMinimo
	
}//FIN DE LA FUNCIÓN