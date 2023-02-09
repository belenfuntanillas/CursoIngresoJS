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

	/*let distancia;
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
			
		}*/


		//IF 1 BIS BIS FUNTANILLAS BELÉN

		/* con if ingresar el nombre y los datos requeridos para calcular el IMC, e informar a la persona si es:
			Bajo peso <18.5
			Peso normal 18,5-24.9
			Preobesidad 25-26.9
			Obesidad I 27-29.9
			Obesidad II 30-34.9
			Obesidad III >40
		*/

		let nombre;
		let altura;
		let peso;
		let mensaje;
		let imc;

		// IMC: peso/altura * altura 

		nombre = document.getElementById("txtIdEdad").value;

		altura = prompt("Ingresar su altura en metros");

		peso = prompt("Ingresar su peso en kilogramos");

		imc = peso / (altura * altura);

		if (imc < 18.5) 
		{
			mensaje = nombre + ", tiene bajo peso";

		}else{
			if (imc >= 18.5 && imc <= 24.9) 
			{
				mensaje = nombre + ",tiene un peso normal";

			}else{
				if (imc >= 25 && imc <= 26.9) 
				{
					mensaje = nombre + ", tiene preobesidad";

				}else{
					if (imc >= 27 && imc <= 29.9) 
					{
						mensaje = nombre + ", tiene obesidad I";
					}else{
						if (imc >=30 && imc <= 34.9) 
						{
							mensaje = nombre + ", tiene obesidad II";
						}else{
							if (imc >= 35) 
							{
								mensaje = nombre + ", tiene obesidad IIi";
							}

						}
					}
				}
			}

			alert(mensaje);
		}

}
	
 //FIN DE LA FUNCIÓN