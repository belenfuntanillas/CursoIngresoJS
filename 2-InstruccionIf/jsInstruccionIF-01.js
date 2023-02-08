//Funtanillas Belén 
/*Al ingresar una edad que sea igual a 15, mostrar el mensaje "niña bonita"*/

function mostrar()
{
	/*//tomo la edad  
	let edad;

	edad = parseInt(document.getElementById("txtIdEdad").value);

	if(edad == 15)
	{
		alert("niña bonita");
	}*/

	//IF 1 BIS FUNTANILLAS BELÉN

	let distancia;
	let tiempo;
	let velocidad;

	distancia = parseInt(document.getElementById("txtIdEdad").value);

	tiempo = prompt("Ingresar el tiempo que tardo");

	if (distancia <= 60) 
	{
		velocidad = "Velocidad muy lenta";
		alert(velocidad);
	}else{
		if (distancia <= 80) 
		{
			velocidad = "Velocidad lenta";
			alert(velocidad); 
		}else{
			if (distancia <= 100) 
			{
				velocidad = "Velocidad: buen ritmo";
				alert(velocidad);

			}if (distancia <= 120) 
			{
				velocidad = "Velocidad: ahi de la ley";
				alert(velocidad);

			}else{
				velocidad = "Velocidad: eso no se hace";
				alert(velocidad);
			}
		}
			
		}

}
	



 //FIN DE LA FUNCIÓN