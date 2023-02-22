/* Funtanillas Belén
Debemos realizar la carga de 5(cinco) productos de prevención de contagio,
de cada una debo obtener los siguientes datos:
el tipo (validar "barbijo" , "jabón" o "alcohol") ,
el precio (validar entre 100 y 300),
la cantidad de unidades (no puede ser 0 o negativo y no debe superar las 1000 unidades),
la Marca y el fabricante.
Se debe Informar al usuario lo siguiente:
a) Del más barato de los alcohol, la cantidad de unidades y el fabricante
b) Del tipo con mas unidades, el promedio por compra
c) Cuántas unidades de jabones hay en total

*/
function mostrar()
{
	let tipoProducto;
	let precioProducto;
	let unidadesProducto;
	let contadorBarbijo;
	let contadorJabon;
	let contadorAlcohol;
	let marca;
	let fabricante; 
	let acumuladorBarbijo;
	let acumuladorJabon;
	let acumuladorAlcohol; 
	let banderaAlcoholMasBarato; 
	let unidadesCantidadAlcoholMasBarato;
	let precioMasBaratoAlcohol; 
	let fabricanteMasBaratoAlcohol;
	let mayorTipo; 
	let promedio;

	contadorBarbijo = 0; 
	contadorJabon = 0;
	contadorAlcohol = 0; 
	banderaAlcoholMasBarato = true; 
	banderaTipoConMasUnidades = true; 
	acumuladorBarbijo = 0;
	acumuladorJabon = 0;
	acumuladorAlcohol = 0; 




	for(i = 0; i < 5; i++)
	{
		tipoProducto = prompt("Ingrese tipo de producto (barbijo. jabon o alcohol)");
		
		while(tipoProducto != "barbijo" && tipoProducto != "alcohol" && tipoProducto != "jabon")
		{
			tipoProducto = prompt("ERROR Ingrese tipo de producto");
		}

		precioProducto = parseFloat(prompt("Ingrese precio (entre 100 y 300)")); 
		while(isNaN(precioProducto) || precioProducto < 100 || precioProducto > 300)
		{
			precioProducto = parseFloat(prompt("ERROR Ingrese precio (entre 100 y 300)")); 
		}

		unidadesProducto = parseFloat(prompt("Ingrese unidades (no debe superar las 1000 unidades)"));
		while(isNaN(unidadesProducto) || unidadesProducto < 1 || unidadesProducto > 1000)
		{
			unidadesProducto = parseFloat(prompt("ERROR Ingrese unidades (no debe superar las 1000 unidades)")); 
		}

		marca = prompt("Ingrese la marca");
		while(!isNaN(marca))
		{
			marca = prompt("ERROR Ingrese la marca");
		}

		fabricante = prompt("Ingrese el fabricante");
		while(!isNaN(fabricante))
		{
			fabricante = prompt("ERROR Ingrese la marca");
		}

		switch(tipoProducto)
		{
			case "alcohol":
				if(banderaAlcoholMasBarato == true || precioProducto < precioMasBaratoAlcohol)
				{	
					fabricanteMasBaratoAlcohol = fabricante;
					unidadesCantidadAlcoholMasBarato = unidadesProducto;
					precioMasBaratoAlcohol = precioProducto; 
					banderaAlcoholMasBarato = false;
				}
				contadorAlcohol = contadorAlcohol + 1;
				acumuladorAlcohol = acumuladorAlcohol + unidadesProducto; 
				break; 
			case "barbijo":
				contadorBarbijo = contadorBarbijo + 1;
				acumuladorBarbijo = acumuladorAlcohol + unidadesProducto; 
			case "jabon":
				contadorJabon = contadorJabon + 1;
				acumuladorJabon = acumuladorJabon + unidadesProducto; 

		}
	}
	
	if (acumuladorAlcohol > acumuladorJabon)
		{
			mayorTipo = "el alcohol";
			promedio = acumuladorAlcohol / contadorAlcohol;
		}else if(acumuladorJabon > acumuladorBarbijo)
		{
			mayorTipo = "el jabon";
			promedio = acumuladorJabon / contadorJabon; 
		}else{
			mayorTipo = "el barbijo";
			promedio = acumuladorBarbijo / contadorBarbijo; 
		}

	console.log("Cantidad de unidades del más barato de los alcohol: " + unidadesCantidadAlcoholMasBarato + " su fabricante es  " + fabricanteMasBaratoAlcohol);
	console.log("Unidades totales de jabon " + acumuladorJabon);
	console.log("El tipo con más unidades es " + mayorTipo + " y el promedio de su compra es " + promedio);
	
}
