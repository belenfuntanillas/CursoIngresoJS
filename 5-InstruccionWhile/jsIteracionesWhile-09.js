/* Funtanillas Belén
Al presionar el botón pedir  números  hasta que el usuario quiera,
mostrar el número máximo y el número mínimo ingresado.*/
function mostrar()
{	// declarar variables
	let banderaDelPrimero;
	let numeroIngresado;
	let numeroMaximo;
	let numeroMinimo;
	let MenorPar;
	let banderaPar;
	let mayorNegativos;
	let banderaMayorNegativos; 
	let respuesta;

	//iniciar variables

	banderaDelPrimero= true;
	banderaPar = true;
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
		// 9 BIS
		if(numeroIngresado % 2 == 0)
		{
			if(banderaPar == true || MenorPar > numeroIngresado)
			{
				MenorPar = numeroIngresado;
			}
			
		}
		if(numeroIngresado < 0)
		{
			if (banderaMayorNegativos == true || mayorNegativos < numeroIngresado) 
			{
				mayorNegativos = numeroIngresado; 
			}
		}
		respuesta=prompt("desea continuar? si/no");
	}
	
	alert("Su mayor negativo es " + mayorNegativos); 
	alert("Su menor par es " + MenorPar);
	document.getElementById("txtIdMaximo").value = numeroMaximo
	document.getElementById("txtIdMinimo").value = numeroMinimo
	
}//FIN DE LA FUNCIÓN