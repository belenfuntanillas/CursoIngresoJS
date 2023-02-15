/*
Al presionar el botón pedir un sexo
'f' para femenino, 'm' para masculino.*/
function mostrar()
{
	let sexoIngresado;

	sexoIngresado = prompt("ingrese f para (femenino) o m para (masculino)");

	while (sexoIngresado != "f" && sexoIngresado != "m" && sexoIngresado != "F" && sexoIngresado != "M") 
	{
	
		sexoIngresado = prompt("ingrese f para (femenino) o m para (masculino)");


	} if (sexoIngresado == "m" || sexoIngresado == "M") 
	{
		sexoIngresado = "Masculino"; 
		
	} else if (sexoIngresado == "f" || sexoIngresado == "F") 
	{
		sexoIngresado = "Femenino"; 
	}


	document.getElementById("txtIdSexo").value = sexoIngresado; 

} //FIN DE LA FUNCIÓN