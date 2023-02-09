//Funtanillas Belén
/*al seleccionar un mes informar.
si tiene 28 días.
si tiene 30 días.
si tiene 31 días.*/

function mostrar()
{
	//tomo el mes
	let mesDelAño;
	let mensaje; 

	mesDelAño = document.getElementById("txtIdMes").value; 

	switch (mesDelAño) 
	{
		case "Marzo":
		case "Mayo":
		case "Julio":
		case "Septiembre":
		case "Noviembre":
		case "Enero":
			mensaje = "Este mes tiene 31 días"; 
			break;

		case "Febrero":
			mensaje = "Este mes tiene 28 días";
			break;

		default:
			mensaje = "Este mes tiene 30 días";
			break;
	}

	alert(mensaje);
	

}//FIN DE LA FUNCIÓN