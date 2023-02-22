/*El departamento de NUMEROS ESPECIALES  del instituto matemático  FonteCristo  nos está pidiendo una aplicación que verifique las distintas cualidades de los números.

13.	Para cada una de estas acciones  debemos realizar la lógica para verificar las cualidades pedidas:
a.	Se pedirán un número positivo y se mostrará la cantidad de números pares desde el número ingresado hasta el cero.
b.	Se pedirán un número positivo y se mostrará la cantidad de números pares desde el número ingresado hasta el cero.
c.	Se pedirán un número positivo y se mostrará la cantidad de números divisibles de este número que se encuentran desde el 1 al 100.
d.	Se pedirán un número positivo y se mostrará si el número es un número primo o no.
e.	Se pedirán un número positivo y se mostrará la cantidad de números Primos desde el número ingresado hasta el cero.
*/
function NumerosPares() 
{
 	let numeroIngresado;
    let contadorPares;
    let contadorImpares;
    let numerosdivisibles;
    let numeroPrimo; 
    let contadorPrimos; 

    contadorPrimos = 0; 
    contadorPares = 0; 
    contadorImpares = 0; 
    numerosdivisibles = 0; 

    numeroIngresado = parseInt(document.getElementById("txtIdNumero").value); 

    while(isNaN(numeroIngresado) || numeroIngresado < 0)
    {
        numeroIngresado = parseInt(prompt("Error!!! Ingrese un numero positivo")); 
    }
        for (let i = numeroIngresado; i >= 0; i--) 
        {
            if (i % 2 === 0) 
            {
              contadorPares = contadorPares + 1; 
            }
        }

     alert("Hay " + contadorPares + " numeros pares"); 
}

function NumerosImpares()
{
    let numeroIngresado;
    let contadorPares;
    let contadorImpares;
    let numerosdivisibles;
    let numeroPrimo; 
    let contadorPrimos; 

    contadorPrimos = 0; 
    contadorPares = 0; 
    contadorImpares = 0; 
    numerosdivisibles = 0; 

    numeroIngresado = parseInt(document.getElementById("txtIdNumero").value); 

    while(isNaN(numeroIngresado) || numeroIngresado < 0)
    {
        numeroIngresado = parseInt(prompt("Error!!! Ingrese un numero positivo")); 
    }
        for (let i = numeroIngresado; i >= 0; i--) 
        {
            if (i % 2 !== 0) 
            {
              contadorImpares = contadorImpares + 1; 
            }
        }

     alert("Hay " + contadorImpares + " numeros impares"); 
}

function NumerosDivisibles()
{
    let numeroIngresado;
    let contadorPares;
    let contadorImpares;
    let numerosdivisibles;
    let numeroPrimo; 
    let contadorPrimos; 

    contadorPrimos = 0; 
    contadorPares = 0; 
    contadorImpares = 0; 
    numerosdivisibles = 0; 

    numeroIngresado = parseInt(document.getElementById("txtIdNumero").value); 

    while(isNaN(numeroIngresado) || numeroIngresado < 0)
    {
        numeroIngresado = parseInt(prompt("Error!!! Ingrese un numero positivo")); 
    }
    for(i = 1; i <= 100; i++)
    {
        if(i % numeroIngresado === 0)
        {
            numerosdivisibles = numerosdivisibles + 1; 
            alert("La cantidad de numeros divisibles entre el 1 y el 10 es: " + numerosdivisibles);
        }
    }
}

function VerificarPrimo()
{
    let numeroIngresado;
    let contadorPares;
    let contadorImpares;
    let numerosdivisibles;
    let numeroPrimo; 
    let contadorPrimos; 

    contadorPrimos = 0; 
    contadorPares = 0; 
    contadorImpares = 0; 
    numerosdivisibles = 0; 
    numeroPrimo = 0; 

    numeroIngresado = parseInt(document.getElementById("txtIdNumero").value); 

    while(isNaN(numeroIngresado) || numeroIngresado < 0)
    {
        numeroIngresado = parseInt(prompt("Error!!! Ingrese un numero positivo")); 
    }
    for( i = 2; i < numeroIngresado; i++)
	{
		if(numeroIngresado % i == 0)
		{
				numeroPrimo++; 
		}
	}

	if(numeroPrimo != 0 || numeroIngresado <= 1)
	{
		alert(numeroIngresado + " no es primo"); 
	}else 
	{	
		alert(numeroIngresado + " es primo"); 
	}
}

function NumerosPrimos()
{
    let numeroIngresado;
    let contadorPares;
    let contadorImpares;
    let numerosdivisibles;
    let numeroPrimo; 
    let contadorPrimos; 

    contadorPrimos = 0; 
    contadorPares = 0; 
    contadorImpares = 0; 
    numerosdivisibles = 0; 
    numeroPrimo = 0; 

    numeroIngresado = parseInt(document.getElementById("txtIdNumero").value); 

    while(isNaN(numeroIngresado) || numeroIngresado < 0)
    {
        numeroIngresado = parseInt(prompt("Error!!! Ingrese un numero positivo")); 
    }
    for(i = numeroIngresado;  i >= 0; i--)
    {
        for( i = 2; i < numeroIngresado; i++)
        {
            if(numeroIngresado % i == 0)
            {
                    numeroPrimo = numeroPrimo + 1; 
            }
        } 
    }
    alert("La cantidad de numeros primos es: " + numeroPrimo); 
}