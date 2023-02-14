/*
al presionar el botón 
pedir un número entre 0 y 9 inclusive.*/
function mostrar()
{
	let numeroIngresado;

	numeroIngresado = parseInt(prompt("ingrese un número entre 0 y 9."));

	while (isNaN(numeroIngresado) || numeroIngresado < -1 || numeroIngresado > 9)
	{
		numeroIngresado = parseInt(prompt("ERROR: Ingrese un número entre 0 y 9"));
		
	}

	 document.getElementById("txtIdNumero").value = numeroIngresado; 

}//FIN DE LA FUNCIÓN