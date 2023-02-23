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
	let nombre;
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
	let acumuladorEdadHombreSoltero;
	let contadorEdadHombreSoltero; 
	let respuesta; 


	banderaTemperatura == true;
	mayorTemperatura = 0; 
	contadorAbuelosTemperaturaAlta = 0;
	contadorHombresSolteroViudo = 0; 
	contadorViudos = 0; 
	acumuladorEdadHombreSoltero = 0; 
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
			nacionalidadMayorTemperatura = nombre; 
			banderaTemperatura = false; 
		}

		switch(estadoCivil)
		{
			case "soltero":
				if(sexo == "f" || sexo == "F")
				{
					acumuladorEdadHombreSoltero = acumuladorEdadHombreSoltero + edad; 
					contadorMujeresSolterasViudas = contadorMujeresSolterasViudas + 1; 
					contadorSolteros = contadorSolteros + 1; 
				}
				break;
			case "casado":
				break;

			case "viudo": 
				if(sexo == "f" || sexo == "F")
				{
					contadorMujeresSolterasViudas = contadorMujeresSolterasViudas + 1; 
				}
				
				if( edad > 17)
				{
					contadorSolteros = contadorSolteros + 1; 
				}
				break; 
		}

		if(edad > 60 && temperaturaCorporal > 38)
		{
			contadorAbuelosTemperaturaAlta = contadorAbuelosTemperaturaAlta + 1;
		}

		promedioEdad = acumuladorEdadHombreSoltero / contadorSolteros; 

	}

	console.log("La nacionalidad de la persona con mas temperatura es: " + nacionalidadMayorTemperatura);
	console.log(contadorSolteros + " es la cantidad de mayores de edad solteros"); 
	console.log("La cantidad de hombres solteros o viudos es: " + contadorMujeresSolterasViudas);
	console.log(contadorAbuelosTemperaturaAlta + " es la cantidad de gente de la tercera edad con temperatura mayor a 38°");
	console.log("Promedio de edad entre los hombres solteros es: " + promedioEdad); 
}


