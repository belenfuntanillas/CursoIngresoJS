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

	//punto A
	edadIngresada = parseInt(prompt("Ingrese su edad entre 18 y 90 años:")); 
	while (edadIngresada < 18 || edadIngresada > 90) 
	{
		edadIngresada = parseInt(prompt("ERROR! Ingrese su edad entre 18 y 90 años:")); 
	}

	//punto B
	sexoIngresado = prompt("Ingrese su sexo: M para masculino y F para femenino "); 
	while (sexoIngresado != "M" && sexoIngresado != "m" && sexoIngresado != "F" && sexoIngresado != "f") 
	{
		sexoIngresado = prompt("ERROR!!! Ingrese M para masculino y F para femenino "); 
	}if (sexoIngresado == "M" || sexoIngresado == "m") 
	{
		sexoIngresado = "Su sexo es masculino";
		
	} else if (sexoIngresado == "F" || sexoIngresado == "f") 
	{
		sexoIngresado = "Su sexo ingresado es femenino"; 
	}

	//punto C
	/*estadoCivilIngresado = prompt("Ingrese su estado civil: n/n 1-para soltero n/n 2-para casados n/n 3-para divorciados n/n 4-para viudos")
	while (IsNan(estadoCivilIngresado) || estadoCivilIngresado > 4 || estadoCivilIngresado < 1) 
	{
		estadoCivilIngresado = prompt("ERROR!!!"+ "n/n" + "Ingrese su estado civil:"+ "n/n" + "1-para soltero" +"n/n"+ "2-para casados"+ "n/n"+ "3-para divorciados"+ "n/n"+ "4-para viudos");
	
		switch (estadoCivilIngresado) {
			case "1": 
				estadoCivilIngresado = "Su estado civil es soltero/a";
				break;
			case "2":
				estadoCivilIngresado = "Su estado civil es casado/a";
				break;
			case "3": 
				estadoCivilIngresado = "Su estado civil es divorciado/a"; 
				break; 
			case "4": 
				estadoCivilIngresado = "Su estado civil es viudo/a";
				break;
		}
		document.getElementById("txtIdEstadoCivil").value = estadoCivilIngresado;
	}*/

	// punto D

	sueldoBruto = parseFloat(prompt("Ingrese su sueldo bruto, no menor a $8000"));
	while (IsNan(sueldoBruto) || sueldoBruto < 8000) 
	{
		sueldoBruto = parseFloat(prompt("ERROR!!! Ingrese su sueldo bruto, no menor a $8000"));
	}

	//punto F
	nacionalidadIngresada = prompt("Ingrese su nacionalidad (A para argentinos, E para extranjeros, N para nacionalizados):")
	while (nacionalidadIngresada != "A" && nacionalidadIngresada != "E" && nacionalidadIngresada != "N") 
	{
		
	nacionalidadIngresada = prompt("ERROR!!! Ingrese su nacionalidad (A para argentinos, E para extranjeros, N para nacionalizados):");
	}

	

	document.getElementById("txtIdEdad").value = edadIngresada; 
	document.getElementById("txtIdSexo").value = sexoIngresado;
	document.getElementById("txtIdEstadoCivil").value = estadoCivilIngresado;
	document.getElementById("txtIdSueldo").value = sueldoBruto;
	document.getElementById("txtIdLegajo").value = numeroLegajo;
	document.getElementById("txtIdNacionalidad").value = nacionalidad; 

}
