/* Funtanillas Belén
En el ingreso a un viaje en avion nos solicitan nombre , edad, sexo("f" o "m") y estado civil("soltero", "casado" o "viudo")
y temperatura corporal.
a) El nombre de la persona con mas temperatura.
b) Cuantos mayores de edad estan viudos
c) La cantidad de hombres que hay solteros o viudos.
d) cuantas personas de la tercera edad( mas de 60 años) , tienen mas de 38 de temperatura
e) El promedio de edad entre los hombres solteros.
*/
function mostrar()
{
	let nombre;
	let edad;
	let sexo;
	let estadoCivil;
	let temperaturaCorporal;
	let mayorTemperatura;
	let nombreMayorTemperatura;
	let banderaTemperatura;
	let contadorViudos;
	let contadorHombresSolteroViudo;
	let contadorAbuelosTemperaturaAlta; 
	let promedioEdad; 
	let acumuladorEdadHombreSoltero;
	let contadorEdadHombreSoltero; 

	banderaTemperatura == true;
	mayorTemperatura = 0; 
	contadorAbuelosTemperaturaAlta = 0;
	contadorHombresSolteroViudo = 0; 
	contadorViudos = 0; 
	acumuladorEdadHombreSoltero = 0; 
	contadorEdadHombreSoltero = 0; 


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
	while(isNaN(temperaturaCorporal) || temperaturaCorporal < 30 || temperaturaCorporal > 50)
	{
		temperaturaCorporal = parseFloat(prompt("ERROR Ingrese su temperatura"));

	}

	//punto A
	if(banderaTemperatura == true || temperaturaCorporal > mayorTemperatura)
	{
		temperaturaCorporal = mayorTemperatura; 
		nombreMayorTemperatura = nombre; 
		banderaTemperatura = false; 
	}

	//punto B
	if( edad > 18 && estadoCivil == "viudo" || estadoCivil == "Viudo")
	{
		contadorViudos = contadorViudos + 1; 
	}

	//punto C
	if(sexo == "m" || sexo == "M")
	{
		sexo = "masculino"; 
		if(estadoCivil == "soltero" || estadoCivil == "Soltero" || estadoCivil == "viudo" || estadoCivil == "Viudo")
		{
			contadorHombresSolteroViudo = contadorHombresSolteroViudo + 1; 
		}
		if(estadoCivil == "soltero" || estadoCivil == "Soltero")
		{
			acumuladorEdadHombreSoltero = acumuladorEdadHombreSoltero + edad; 
			contadorEdadHombreSoltero = contadorEdadHombreSoltero + 1; 
		}

	}else 
	{
		sexo = "femenino";
	}

	if(edad > 60 && temperaturaCorporal > 38)
	{
		contadorAbuelosTemperaturaAlta = contadorAbuelosTemperaturaAlta + 1;
	}

	promedioEdad = acumuladorEdadHombreSoltero / contadorEdadHombreSoltero; 

	console.log("El nombre de la persona con mas temperatura es: " + nombreMayorTemperatura);
	console.log(contadorViudos + " es la cantidad de mayores de edad viudos"); 
	console.log("La cantidad de hombres solteros o viudos es: " + contadorHombresSolteroViudo);
	console.log(contadorAbuelosTemperaturaAlta + " es la cantidad de gente de la tercera edad con temperatura mayor a 38°");
	console.log("Promedio de edad entre los hombres solteros es: " + promedioEdad); 
}

