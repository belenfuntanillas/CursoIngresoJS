/* Funtanillas Belén
En el ingreso a un viaje en avión nos solicitan nombre, nacionalidad , edad, sexo("f" o "m") y estado civil("soltero", "casado" o "viudo")y temperatura corporal.
a) la Nacionalidad de la persona con mas temperatura.
b) Cuantos mayores de edad( más de 17) estan solteros
c) La cantidad de Mujeres que hay solteras o viudas.
d) cuantas personas de la tercera edad( mas de 60 años) , tienen mas de 38 de temperatura
e) El promedio de edad entre las mujeres casadas
*/
function mostrar()
{
	/*let nombre;
	let edad;
	let sexo;
	let nacionalidad;
	let estadoCivil;
	let temperaturaCorporal;
	let mayorTemperatura;
	let nacionalidadMayorTemperatura;
	let banderaTemperatura;
	let contadorSolteros;
	let contadorMujeresSolterasViudas;
	let contadorAbuelosTemperaturaAlta; 
	let promedioEdad; 
	let acumuladorEdadMujerCasada;
	let contadorMujerCasada; 
	let contadorEdadHombreSoltero; 
	let respuesta; 


	banderaTemperatura == true;
	mayorTemperatura = 0; 
	contadorMujerCasada = 0; 
	acumuladorEdadMujerCasada = 0; 
	contadorAbuelosTemperaturaAlta = 0;
	contadorHombresSolteroViudo = 0; 
	contadorViudos = 0; 
	acumuladorEdadMujerCasada = 0; 
	contadorEdadHombreSoltero = 0; 
	contadorSolteros = 0; 
	respuesta = "si";

	while(respuesta == "si")
	{
		nombre = prompt("Ingrese su nombre");
		while(!isNaN(nombre))
		{
			nombre = prompt("ERROR Ingrese su nombre");
		}

		edad = parseInt(prompt("Ingrese su edad"))
		while(isNaN(edad) || edad < 1 || edad > 110)
		{
			edad = prompt("ERROR Ingrese su edad");
		}

		nacionalidad = (prompt("Ingrese su nacionalidad"))
		while(nacionalidad != "a" || nacionalidad != "e" || nacionalidad != "n")
		{
			nacionalidad = prompt("ERROR Ingrese su nacionalidad");
		}

		sexo = prompt("Ingrese f (femenino) o m (masculino)");
		while(!isNaN(sexo) && sexo != "f" && sexo != "F" && sexo != "m" && sexo != "M")
		{
			sexo = prompt("ERROR Ingrese f (femenino) o m (masculino)");
		}

		estadoCivil = prompt("Ingrese su estado civil (soltero, casado o viudo)"); 
		while(!isNaN(estadoCivil) && estadoCivil != "soltero" && estadoCivil != "casado" && estadoCivil != "viudo" && estadoCivil != "Soltero" && estadoCivil != "Casado" && estadoCivil != "Viudo")
		{
			estadoCivil = prompt("ERROR Ingrese su estado civil (soltero, casado o viudo)"); 

		}

		temperaturaCorporal = parseFloat(prompt("Ingrese su temperatura"));
		while(isNaN(temperaturaCorporal) || temperaturaCorporal < 30 || temperaturaCorporal > 45)
		{
			temperaturaCorporal = parseFloat(prompt("ERROR Ingrese su temperatura"));

		}
		respuesta = prompt("¿Desea continuar? si / no"); 

		if(sexo == "m" || sexo == "M")
		{
			sexo = "masculino"; 
			
		}else 
		{
			sexo = "femenino";
		}

		if(banderaTemperatura == true || mayorTemperatura < temperaturaCorporal)
		{
			mayorTemperatura = temperaturaCorporal; 
			nacionalidadMayorTemperatura = nacionalidad; 
			banderaTemperatura = false; 
		}

		switch(estadoCivil)
		{
			case "soltero":
				if(sexo == "f" || sexo == "F")
				{
					contadorMujeresSolterasViudas = contadorMujeresSolterasViudas + 1; 
					contadorSolteros = contadorSolteros + 1; 
				}
				if( edad > 17)
				{
					contadorSolteros = contadorSolteros + 1; 
				}
				break;
			case "casado":
				if(sexo == "f" || sexo == "F")
				{
					acumuladorEdadMujerCasada = acumuladorEdadMujerCasada + edad; 
					contadorMujerCasada = contadorMujerCasada + 1; 
				}
				break; 
			case "viudo": 
				if(sexo == "f" || sexo == "F")
				{
					contadorMujeresSolterasViudas = contadorMujeresSolterasViudas + 1; 
				}
		}

		if(edad > 60 && temperaturaCorporal > 38)
		{
			contadorAbuelosTemperaturaAlta = contadorAbuelosTemperaturaAlta + 1;
		}

		promedioEdad = acumuladorEdadMujerSoltera / contadorMujeresSolterasViudas; 

	}

	console.log("La nacionalidad de la persona con mas temperatura es: " + nacionalidadMayorTemperatura);
	console.log(contadorSolteros + " es la cantidad de mayores de edad solteros"); 
	console.log("La cantidad de mujeres solteras o viudas es: " + contadorMujeresSolterasViudas);
	console.log(contadorAbuelosTemperaturaAlta + " es la cantidad de gente de la tercera edad con temperatura mayor a 38°");
	console.log("Promedio de edad entre los hombres solteros es: " + promedioEdad); */

	/*
		Recu 2020 3 bis: /*Vacaciones en Familia" 
		Nos ingresan una cantidad indeterminada de estadías de vacaciones, 
		validando los datos ingresados:
		nombre del pasajero titular, 
		destino( “Brasil”, “Caribe” o “Europa”), 
		temporada(“alta”,”baja”,“media”),
		cantidad de pasajeros que viajan.
		Informar:
		a)El destino más elegido.
		b)El nombre del pasajero titular que lleva menos pasajeros.
		c)El promedio de personas, que viajan en temporada alta.
		d)El total de personas que viajaron a Europa.
	*/

	let nombrePasajero;
	let destino;
	let temporada;
	let cantidadPasajeros;
	let respuesta;
	let acumuladorBrasil;
	let acumuladorCaribe;
	let acumuladorEuropa;
	let banderaMenosPasajeros;
	let nombreMenosPasajeros;
	let acumuladorTemporadaAlta;
	let promedio;
	let mensaje; 
	
	

	respuesta = "si";
	banderaMenosPasajeros = true;
	acumuladorBrasil = 0;
	acumuladorCaribe = 0;
	acumuladorEuropa = 0;
	acumuladorTemporadaAlta = 0; 
	

	while(respuesta == "si")
	{
		nombrePasajero = prompt("Ingrese el nombre del pasajero titular");
		destino = prompt("Ingrese destino (“Brasil”, “Caribe” o “Europa”)");
		while(destino != "Brasil" && destino != "Caribe" && destino != "Europa")
		{
			destino = prompt("ERROR Ingrese destino (“Brasil”, “Caribe” o “Europa”)");
		}

		temporada = prompt("Ingrese la temporada (“alta”,”baja”,“media”)");
		while(temporada != "alta" && temporada != "baja" && temporada != "media")
		{
			temporada = prompt("Ingrese la temporada (“alta”,”baja”,“media”)");
		}

		cantidadPasajeros = parseInt(prompt("Ingrese la cantidad de pasajeros"));
		while(isNaN(cantidadPasajeros) || cantidadPasajeros < 0)
		{
			cantidadPasajeros = parseInt(prompt("ERROR Ingrese la cantidad de pasajeros"));
		}

		switch(destino)
		{
			case "Brasil":
				acumuladorBrasil = acumuladorBrasil + cantidadPasajeros;
				break; 
			case "Caribe":
				acumuladorCaribe = acumuladorCaribe + cantidadPasajeros;
				break; 
			case "Europa":
				acumuladorEuropa = acumuladorEuropa + cantidadPasajeros; 
				break; 
		}

		if(acumuladorBrasil > acumuladorCaribe && acumuladorBrasil > acumuladorEuropa)
		{
			mensaje = "El destino mas elegido es Brasil";
		}else if(acumuladorCaribe > acumuladorBrasil && acumuladorCaribe > acumuladorEuropa)
		{
			mensaje = "El destino mas elegido es Caribe";
		}else if(acumuladorEuropa > acumuladorBrasil && acumuladorEuropa > acumuladorCaribe)
		{
			mensaje = "El destino mas elegido es Europa";
		}

		if(banderaMenosPasajeros == true || banderaMenosPasajeros > cantidadPasajeros)
		{
			banderaMenosPasajeros = cantidadPasajeros;
			nombreMenosPasajeros = nombrePasajero;
			banderaMenosPasajeros = false; 
		}

		switch(temporada)
		{
			case "alta":
				acumuladorTemporadaAlta = acumuladorTemporadaAlta + cantidadPasajeros;
				break; 
			case "baja":
			case "media":
				break; 
		}

		promedio = cantidadPasajeros / acumuladorTemporadaAlta; 

		respuesta = prompt("Desea constinuar? si/no");
	}

	console.log("cantidad de personas que viajaron a europa: " + acumuladorEuropa);
	console.log(mensaje); 
	console.log("El promedio de personas, que viajan en temporada alta: " + promedio); 
	console.log("El nombre del pasajero titular que lleva menos pasajeros: " + nombreMenosPasajeros)

}


