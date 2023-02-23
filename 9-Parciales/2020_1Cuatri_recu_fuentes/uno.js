/*
Debemos realizar la carga de una compra de 5(cinco) productos de prevención de contagio,
de cada una debo obtener los siguientes datos:
el tipo de producto (validar "barbijo" , "jabón" o "alcohol") ,
el precio (validar entre 100 y 300),
la cantidad de unidades (no puede ser 0 o negativo y no debe superar las 1000 unidades),
la Marca y el fabricante.
Se debe Informar al usuario lo siguiente:
a) Del más caro de los jabones, la cantidad de unidades y el fabricante
b) Del tipo de producto con más unidades en total de la compra, el promedio por compra
c) Cuántas unidades de Barbijos se compraron en total
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
	let banderaJabonCaro; 
	let unidadesCantidadJabonCaro;
	let fabricanteJabonCaro;
	let mayorTipo; 
	let promedio;

	contadorBarbijo = 0; 
	contadorJabon = 0;
	contadorAlcohol = 0; 
	banderaJabonCaro = true; 
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
			case "barbijo":
				if(banderaJabonCaro == true || precioProducto < precioJabonCaro)
				{	
					fabricanteJabonCaro = fabricante;
					unidadesCantidadJabonCaro = unidadesProducto;
					precioJabonCaro = precioProducto; 
					banderaJabonCaro = false;
				}
				contadorBarbijo = contadorBarbijo + 1;
				acumuladorBarbijo = acumuladorBarbijo+ unidadesProducto; 
				break; 
			case "jabon":
				contadorJabon = contadorJabon + 1;
				acumuladorJabon = acumuladorJabon + unidadesProducto; 
				break; 
		}
	}
	
	if (acumuladorAlcohol > acumuladorJabon && acumuladorAlcohol > acumuladorBarbijo) 
		{
			mayorTipo = "el alcohol";
			promedio = acumuladorAlcohol / contadorAlcohol;
		}else if(acumuladorJabon > acumuladorBarbijo && acumuladorJabon > acumuladorAlcohol) 
		{
			mayorTipo = "el jabon";
			promedio = acumuladorJabon / contadorJabon; 
		}else if(acumuladorBarbijo > acumuladorJabon && acumuladorBarbijo > acumuladorAlcohol)
		{
			mayorTipo = "el barbijo";
			promedio = acumuladorBarbijo / contadorBarbijo; 
		}

	console.log("Cantidad de unidades del más barato de los alcohol: " + unidadesCantidadJabonCaro + " su fabricante es  " + fabricanteJabonCaro);
	console.log("Unidades totales de barbijo " + acumuladorBarbijo);
	console.log("El tipo con más unidades es " + mayorTipo + " y el promedio de su compra es " + promedio);
	
}


