/*
Funtanillas Belén Ejercicio 2 E/S
Debemos lograr tomar un nombre con 'prompt' 
y luego mostrarlo por 'alert' al presionar el botón  'mostrar'*/
function mostrar()
{
	let nombrePersona; //declaración de variable
	let apellidoPersona
	nombrePersona = prompt("¿Cuál es tu nombre?");
	apellidoPersona = prompt("¿Cuál es tu apellido?")
	alert("su nombre es " +nombrePersona + " su apellido es " +apellidoPersona);
}

