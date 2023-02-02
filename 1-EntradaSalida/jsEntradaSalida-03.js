/* Funtanillas Belén
Debemos lograr tomar un dato por 'ID'
y luego mostrarlo por 'Alert' al presionar el botón  'mostrar'*/

/*{
	let nombreIngresado;
	let mensaje;
	//nombreIngresado=txtIdNombre.value; ESTO FUNCIONA SOLO EN GOOGLE
	//                 HTML  traeme el elemento del ID el valor
	nombreIngresado = document.getElementById("txtIdNombre").value;
	mensaje = "Su nombre es " + nombreIngresado
	alert(mensaje);
//3 y 3 Bis Funtanillas Belén 
}*/
function mostrar()
{
	let precioProducto;
	let descripción;
	let porcentajeAumento;
	let precioAumentado;
	let mensaje;

	porcentajeAumento = 30;

	descripción = prompt("Ingresar descripción del producto");
    precioProducto = document.getElementById("txtIdNombre").value;

	precioProducto = parseInt(precioProducto);

	precioAumentado = precioProducto + porcentajeAumento /100;

	mensaje = "El producto es " + descripción + " y su precio con un 30% es: " + precioAumentado; 

	alert(mensaje); 
}


