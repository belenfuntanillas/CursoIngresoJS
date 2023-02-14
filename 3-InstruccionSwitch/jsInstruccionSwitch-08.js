function mostrar()
{
	let destinoIngresado;
	let mensaje;

	destinoIngresado = document.getElementById("txtIdDestino").value;

	switch (destinoIngresado) 
	{
		case "Bariloche":
		case "Ushuaia":
			mensaje = "En este destino hace frio";
			break;

		case "Mar del plata":
		case "Cataratas":
			mensaje = "En este destino hace calor";
			break; 
	} 

	alert(mensaje); 





}//FIN DE LA FUNCIÓN