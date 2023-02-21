/* Funtanillas Belén 
al presionar el botón pedir un número. mostrar los numeros divisores
desde el 1 al número ingresado, y mostrar la cantidad de numeros divisores encontrados.
*/
function mostrar()
{
	let repeticiones; 
	let contadorDivisores; 
 
	contadorDivisores = 0; 
	
	repeticiones = parseInt(prompt("Ponga numero de repeticiones"));
	if(isNaN(repeticiones))
	{
		repeticiones = parseInt(prompt("ERROR Ponga numero de repeticiones"));
	}
	else
	{
		for( i = 1; i < repeticiones; i++)
			{
				if(repeticiones % i === 0)
				{
					console.log(i); 
					contadorDivisores = contadorDivisores + 1; 
				}
			}
	}
	
	console.log("La cantidad de numeros divisores es: " + contadorDivisores); 


}//FIN DE LA FUNCIÓN