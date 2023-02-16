/* FUNTANILLAS BELÉN 
al presionar el botón mostrar 10 repeticiones 
con números ASCENDENTE, desde el 1 al 10.
*/
function mostrar()
{
	/*let i;
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
	console.log("El mayor numero es " + mayorNumero); */

	//WHILE 1 BIS Funtanillas Belén
	let edad;
	let nombre; 
	let banderaDelPrimero;
	let edadMaxima;
	let edadMinima; 
	let respuesta;
	let nombreMayor;
	let nombreMenor; 

	banderaDelPrimero = true; 
	respuesta = "si"; 

	while(respuesta == "si")
	{	nombre = prompt("Ingrese su nombre");
		edad = parseInt(prompt("Ingrese su edad"));
			while (isNaN(edad) || edad < 0 || edad > 120) 
			{
				edad = parseInt(prompt("ERROR: ingresa su edad correctamente"));
			}
			if (banderaDelPrimero == true) 
			{	edadMaxima = edad;
				edadMinima = edad; 
				nombreMayor = nombre;
				nombreMenor = nombre; 
				banderaDelPrimero = false; 
			}
			else if(edadMaxima < edad) // edad > edadMaxima
			{	nombreMayor = nombre; 
				edadMaxima = edad; 
			}
			else if(edadMinima > edad)
			{	nombreMenor = nombre; 
				edadMinima = edad; 
			}
			respuesta = prompt("Desea continuar? si/no"); 
	}

	console.log("La persona mas joven es " + nombreMenor); 
	console.log("La persona mas vieja es " + nombreMayor);


}//FIN DE LA FUNCIÓN