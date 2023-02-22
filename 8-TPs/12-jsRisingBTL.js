/*RISING BTL. Empresa dedicada a la toma de datos para realizar estadísticas y censos nos pide realizar una carga de datos validada e ingresada por ventanas emergentes solamente (para evitar hacking y cargas maliciosas) y luego asignarla a cuadros de textos. 
12.   Los datos requeridos son los siguientes:
A.	Edad, entre 18 y 90 años inclusive.
B.	Sexo, “M” para masculino y “F” para femenino
C.	Estado civil, 1-para soltero, 2-para casados, 3-para divorciados y 4-para viudos
D.	Sueldo bruto, no menor a 8000.
E.	Número de legajo, numérico de 4 cifras, sin ceros a la izquierda.
F.	Nacionalidad, “A” para argentinos, “E” para extranjeros, “N” para nacionalizados.
 */
function ComenzarIngreso () 
{
 	//definicion de variables
 	let edadIngresada;
 	let sexoIngresado;
 	let estadoCivilIngresado;
	let sueldoBruto;
	let numeroLegajo; 
	let nacionalidad; 

	numeroLegajo = ""; 
	
	//PUNTO A 
	edadIngresada = parseInt(prompt("Ingrese una edad entre 18 y 90 años")); 
	while (isNaN(edadIngresada) || edadIngresada < "18" || edadIngresada > "90" ) 
	{
		edadIngresada = parseInt(prompt("ERROR Ingrese una edad entre 18 y 90 años")); 
		
	}
	document.getElementById("txtIdEdad").value = edadIngresada; 

	//PUNTO B 
	sexoIngresado = prompt("Ingrese M para masculino o F para femenino"); 
	while (!isNaN(sexoIngresado) && sexoIngresado != "M" && sexoIngresado != "m" && sexoIngresado != "F" && sexoIngresado != "f") 
	{
		sexoIngresado = prompt("ERROR Ingrese M para masculino o F para femenino"); 

	}if(sexoIngresado == "m" || sexoIngresado == "M")
	{
		sexoIngresado = "Su sexo es masculino"; 
	}else if( sexoIngresado == "f" || sexoIngresado == "F")
	{
		sexoIngresado = "Su sexo ingresado es femenino"; 
	}
	document.getElementById("txtIdSexo").value = sexoIngresado; 

	//PUNTO C
	estadoCivilIngresado = parseInt(prompt("Ingrese 1 (para soltero), 2 (para casados), 3 (para divorciados) o 4 (para viudos)")); 

	while (isNaN(estadoCivilIngresado) || estadoCivilIngresado < "1" || estadoCivilIngresado > "4") 
	{
		estadoCivilIngresado = parseInt(prompt("ERROR Ingrese 1 (para soltero), 2 (para casados), 3 (para divorciados) o 4 (para viudos)")); 

		if(estadoCivilIngresado == "1")
		{
			estadoCivilIngresado = "Su estado civil es soltero";
		}
	
		if(estadoCivilIngresado == "2")
		{
			estadoCivilIngresado = "Su estado civil es casado";
		}
	
		if(estadoCivilIngresado == "3")
		{
			estadoCivilIngresado = "Su estado civil es divorciado";
		}
	
		if(estadoCivilIngresado == "4")
		{
			estadoCivilIngresado = "Su estado civil es viudo";
		}
	}
	document.getElementById("txtIdEstadoCivil").value = estadoCivilIngresado; 

	//PUNTO D
	sueldoBruto = parseFloat(prompt("Ingrese su sueldo bruto (no menor a 8000")); 
	while(sueldoBruto < 8000)
	{
		sueldoBruto = parseFloat(prompt("ERROR Ingrese su sueldo bruto (no menor a 8000")); 

	}
	document.getElementById("txtIdSueldo").value = sueldoBruto; 

	//PUNTO E
	numeroLegajo = parseInt(prompt("Ingrese numero de legajo (numérico de 4 cifras, sin ceros a la izquierda)")); 
	while(isNaN(numeroLegajo) || numeroLegajo < 1000 || numeroLegajo > 9999)
	{
		numeroLegajo = parseInt(prompt("ERROR: su numero de legajo no puede ser menor a 1000"))
	}
	document.getElementById("txtIdLegajo").value = "El numero de legajo es: " + numeroLegajo; 

	//PUNTO F
	nacionalidad = prompt("Ingrese “A” para argentinos, “E” para extranjeros, “N” para nacionalizados"); 
	while(nacionalidad != "A" && nacionalidad != "a" && nacionalidad != "e" && nacionalidad != "E" && nacionalidad != "n" && nacionalidad != "N")
	{
		nacionalidad = prompt("ERROR Ingrese “A” para argentinos, “E” para extranjeros, “N” para nacionalizados"); 
	}	
	if(nacionalidad == "A" || nacionalidad == "a")
	{ 
			nacionalidad = "Argentino/a";

	}else if(nacionalidad == "E" || nacionalidad == "e")
	{
			nacionalidad = "Extranjero/a";

	}else if(nacionalidad == "N" || nacionalidad == "n")
	{
			nacionalidad = "Nacionalizado/a"; 
	}

	document.getElementById("txtIdNacionalidad").value = nacionalidad; 






}	