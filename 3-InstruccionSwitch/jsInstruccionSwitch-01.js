//Funtanillas Belén
/*al seleccionar un mes informar.
si es Enero: "que comiences bien el año!!!."
si es Marzo: "a clases!!!."
si es Julio: "se vienen las vacaciones!!!."
si es Diciembre: "Felices fiesta!!!."*/
function mostrar()
{
	//tomo el mes
	let mesDelAño; 
	let mensaje;

	mesDelAño = document.getElementById("txtIdMes").value; 
	
	/*if(mesDelAño == "Enero")
	{
		mensaje = "Que comiences bien el año!"; 

	} */

	switch (mesDelAño) 
	{
		case "Enero":
			mensaje = "Que comiences bien el año!"
			break;
		case "Marzo":
			mensaje = "A clases!!!"
			break;
		case "Julio": 
			mensaje = "Se vienen las vacaciones!!!"
			break;
		case "Diciembre": 
			mensaje = "Felices fiestas"
			break
		default  : 
			mensaje = "Sos aburrido"
	}

	alert(mensaje); 

}//FIN DE LA FUNCIÓN