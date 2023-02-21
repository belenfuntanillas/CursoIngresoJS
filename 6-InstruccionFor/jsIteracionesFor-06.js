function mostrar()
{
	let i
	let repeticiones;
	let acumuladorPar;

	acumuladorPar = 0; 
	
	repeticiones = parseInt(prompt("Ponga numero de repeticiones"));
	if(isNaN(repeticiones))
	{
		repeticiones = parseInt(prompt("ERROR Ponga numero de repeticiones"));
	}
	else
	{
		for( i = 1; i < repeticiones; i++)
			{
				if(i % 2 == 0)
				{
					console.log(i); 
					acumuladorPar = acumuladorPar + 1; 
				}
			}
	}
	
	console.log("Cantidad de numeros pares: " + acumuladorPar); 

}//FIN DE LA FUNCIÓN