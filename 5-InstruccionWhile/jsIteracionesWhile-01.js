/* FUNTANILLAS BELÉN 
al presionar el botón mostrar 10 repeticiones 
con números ASCENDENTE, desde el 1 al 10.
*/
function mostrar()
{
	let i;
	let contadorPares;
	let contadorImpares;
	let acumuladorImpares;
	let acumuladorPares;
	let mayorNumeroImpar; 
	let mayorNumeroPar;
	let mayorNumero; 

	i = 0;
	contadorPares = 0;
	contadorImpares = 0;
	acumuladorImpares = 0; 
	acumuladorPares = 0;
	mayorNumeroImpar = 1; 
	mayorNumeroPar = 0; 
	mayorNumero = 0;

	while (i < 10)  
	{
		if (i%2 == 0) 
		{
			contadorPares = contadorPares + 1;
			acumuladorPares = acumuladorPares + i; 

			if (i > mayorNumeroPar) 
			{
				mayorNumeroPar = i; 
			}

		}else
		{
			contadorImpares = contadorImpares + 1;
			acumuladorImpares = acumuladorImpares + i; 

			if (i > mayorNumeroImpar) 
			{
				mayorNumeroImpar = i; 
			}
		}
       
		if(i > mayorNumero)
		{
			mayorNumero = i; 
		}

		i = i + 1; 

		alert(i); 
	} //fin de while 

	console.log("La cantidad de numeros pares es " + contadorPares);
	console.log("La cantidad de numeros impares es " + contadorImpares);
	console.log("La suma de los numeros impares es " + acumuladorImpares); 
	console.log("La suma de los numeros pares es " + acumuladorPares); 
	console.log("El mayor de los numeros impares es " + mayorNumeroImpar); 
	console.log("El mayor de los numeros pares es " + mayorNumeroPar); 
	console.log("El mayor numero es " + mayorNumero); 


}//FIN DE LA FUNCIÓN