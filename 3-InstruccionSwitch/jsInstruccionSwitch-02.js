//Funtanillas Belén
/*al seleccionar un mes informar.
si estamos en Invierno: "Abrigate que hace frio."
si aún no llego el Invierno: "Falta para el invierno."
si ya paso el Invierno: "Ya pasamos el frio, ahora calor!!!."
ACLARAcIÓN: tomamos a Julio y Agosto como los meses de Invierno.*/

function mostrar()
{
	//tomo el mes
	var mesDelAño; 
	let mensaje; 

	mesDelAño = document.getElementById("txtIdMes").value; 

	switch (mesDelAño) 
	{	
		case "Agosto": 
		case "Julio":
			mensaje = "Abrigate que hace frío"; 
			break;
		case "Febrero":
			mensaje = "Falta para el invierno"; 
			break; 
		case "Diciembre":
			mensaje = "Ya paso el frio, ahora el calor!!!";
			break; 
		default :
			mensaje = "Que tenga buen mes";
	}

	alert(mensaje);




}//FIN DE LA FUNCIÓN