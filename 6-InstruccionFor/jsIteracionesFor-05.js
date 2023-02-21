//al presionar el botón repetir el pedido de número hasta que ingresemos el 9.
function mostrar()
{
	/*let numeroIngresado;

	for(;;)
	{ numeroIngresado = parseInt(prompt("Ingrese un numero (con el 9 se corta)"))
		while(isNaN(numeroIngresado))
		{
			numeroIngresado = parseInt(prompt("ERROR ingrese un numero (con el 9 se corta)")); 
		}

		if(numeroIngresado == "9")
		{
			break; 
		}
		console.log(numeroIngresado); 
	}*/

	//5 BIS 

	let notaIngresada; 
	let i; 
	let sumaNotas; 
	let sexoIngresado; 
	let banderaNotas; 
	let varones; 
	let desaprobados; 
	let promedioNotas; 
	let notaBaja; 
	let sexoBajo; 

	banderaNotas = true; 
	desaprobados = 0; 
	varones = 0; 
	sumaNotas = 0; 

	for (i = 0; i < 7; i++ ) 
	{
			notaIngresada = parseFloat(prompt("Ingrese las notas"));
			while(isNaN(notaIngresada) || notaIngresada < 0 || notaIngresada > 10)
			{
				notaIngresada = parseFloat(prompt("ERROR Ingrese las notas"));

			}
			sexoIngresado = prompt("Ingrese f (femenino), m (masculino) o b (binario)"); 
			while(!isNaN(sexoIngresado) && sexoIngresado != "f" && sexoIngresado != "F" && sexoIngresado != "M" && sexoIngresado != "m" && sexoIngresado != "B" && sexoIngresado != "b")
			{
				sexoIngresado = prompt("ERROR Ingrese f (femenino), m (masculino) o b (binario)"); 

			}

			sumaNotas = sumaNotas + notaIngresada; 

			if(sexoIngresado == "F" || sexoIngresado == "f")
			{
				sexoIngresado = "Femenino"; 
			}
			if(sexoIngresado == "M" || sexoIngresado == "m")
			{
				sexoIngresado = "Masculino"; 
			}
			if(sexoIngresado == "B" || sexoIngresado == "b")
			{
				sexoIngresado = "Binario"; 
			}
			if(notaIngresada >= 6 && sexoIngresado == "Masculino")
			{
				varones = varones + 1; 
			}
			if(notaIngresada < 4)
			{
				desaprobados = desaprobados + 1; 
			}
			if(banderaNotas == true)
			{
				notaBaja = notaIngresada; 
				sexoBajo = sexoIngresado;
				banderaNotas = false; 
			}else if (notaIngresada < notaBaja)
			{
				notaBaja = notaIngresada; 
				sexoBajo = sexoIngresado; 
			}
	}

	promedioNotas = sumaNotas / i; 
	console.log("Promedio de las notas : " + promedioNotas); 
	console.log("La nota mas baja es " + notaBaja + " y su sexo es " + sexoBajo); 
	console.log("Cantidad de varones con nota >= 6 : " + varones); 
	console.log("Cantidad de alumnos desaprobados : " + desaprobados); 
	
}
		










	
//FIN DE LA FUNCIÓN