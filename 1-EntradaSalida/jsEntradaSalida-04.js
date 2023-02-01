/* Funtanillas Belén 
Debemos lograr tomar un dato por 'PROMPT' 
y lo muestro por 'ID' al presionar el botón 'mostrar'
*/
function mostrar()
{
	//declaro variable
	let datoIngresado;
	
	//pido el dato
	datoIngresado = prompt("Ingresar dato") 
    //busco acceder a la cajita y su contenido 
	document.getElementById("txtIdNombre").value = datoIngresado

	//alert(mensaje); SALIDA
	// document.getElementById("txtIdNombre").value = mensaje

	//variable = promp(algo) enntrada
	//nombreIngresado = document.getElementById("txtIdNombre").value
	
	
	//alert("ok");
}

