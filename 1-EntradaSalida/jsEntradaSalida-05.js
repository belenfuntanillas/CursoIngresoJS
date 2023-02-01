/* Funtanillas Belén
Debemos lograr tomar nombre y edad por ID y mostrarlos concatenados 
ej.: "Usted se llama José y tiene 66 años" 	*/
//EJERCICIO 5 Y 5 BIS
function mostrar()
{	
	//declaro variable
	let nombreIngresado;
	let edadIngresada;
	let mensaje;
	let apellido;

	nombreIngresado = document.getElementById("txtIdNombre").value;
    edadIngresada = document.getElementById("txtIdEdad").value;
	apellido = prompt("Ingresar Apellido");


	mensaje = apellido  + ", " +  " su nombre es " + nombreIngresado + " y tiene " + edadIngresada + " años"


	alert(mensaje);
}

