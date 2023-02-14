function mostrar()
{
	let estacionIngresada;
	let destinoIngresado;
	let precio;
	let porcentaje;
	let precioFinal;
	let mensaje;

	precio = 15000;
	descuento = 0;

	estacionIngresada = document.getElementById("txtIdEstacion").value; 
	destinoIngresado = document.getElementById("txtIdDestino").value; 

	switch (estacionIngresada) 
	{
		case "Invierno":
			switch (destinoIngresado) 
			{
				case "Bariloche":
					porcentaje = 20/100;
					break;

				case "Cataratas":
				case "Cordoba":
					porcentaje = -10/100; 
					break;

				case "Mar del plata":
					porcentaje = -20/100; 
					break;
			}
			break;

		case "Verano":
			switch (destinoIngresado) 
			{
				case "Bariloche":
					porcentaje = -20/100;
					break;
				
				case "Cataratas":
				case "Cordoba":
					porcentaje = 10/100; 
					break;
				
				case "Mar del plata":
					porcentaje = 20/100; 
					break; 
			}
			break; 
		
		case "Otoño": 
		case "Primavera":
			switch (destinoIngresado) 
			{
				case "Bariloche":
				case "Mar del plata":
				case "Cataratas": 
					porcentaje = 10/100;
					break;
				case "Cordoba":
					porcentaje = 0/100;
			}
	}
	
	precioFinal = precio + (precio * porcentaje);
	mensaje = "El precio final del viaje es de $" + precioFinal; 

	alert(mensaje); 



}//FIN DE LA FUNCIÓN