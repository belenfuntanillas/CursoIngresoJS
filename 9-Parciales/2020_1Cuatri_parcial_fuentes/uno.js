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

	console.log("Cantidad de unidades del más barato de los alcohol: " + unidadesCantidadAlcoholMasBarato + " su fabricante es  " + fabricanteMasBaratoAlcohol);
	console.log("Unidades totales de jabon " + acumuladorJabon);
	console.log("El tipo con más unidades es " + mayorTipo + " y el promedio de su compra es " + promedio);
	
}*/

/*                                      Parcial 1 2020 bis
"Super chino" 
Se pide el ingreso de mercadería de un supermercado , 
hasta que el usuario quiera,se pide :
tipo(limpieza , comestible , otros)solo estos tres tipos
nombre del producto
importe del producto (no mayor a 1000 pesos)
procedencia(importado, nacional, elaborado)
Peso (no mayor a 30 kilos)

informar SOLO SI HAY
a) el NOMBRE del mas pesado de los comestibles
b) el NOMBRE del mas caro de todos los productos
c) el NOMBRE del mas barato de los elaborados
d)el tipo de mercadería que mas aparece
e)el porcentaje de productos elaborados por sobre el total
f) el promedio de pesos por cada tipo ingresado/
*/
function mostrar()
{
	let respuesta;
	let tipoProducto;
	let nombreProducto;
	let importeProducto;
	let procedencia; 
	let peso; 
	let nombreMasPesadoCosmetibles;
	let banderaMasPesadoCosmetibles;
	let nombreProductoMasCaro;
	let banderaProductoMasCaro;
	let nombreElaboradoMasBarato;
	let banderaElaboradoMasBarato;
	let contador
	let tipoProductoMayor; 
	let acumuladorPrecio

	respuesta = "si" 
	banderaMasPesadoCosmetibles = true; 
	banderaProductoMasCaro = true;
	banderaElaboradoMasBarato = true; 


	while(respuesta == "si")
	{
		tipoProducto = prompt("Ingrese el tipo de producto (limpieza , comestible u otros");
		while(tipoProducto != "limpieza" || tipoProducto != "cosmetible" || tipoProducto != "otros")
		{
			tipoProducto = prompt("ERROR Ingrese el tipo de producto (limpieza , comestible u otros");
		}

		nombreProducto = prompt("Ingrese el nombre del producto");
		while(!isNaN(nombreProducto))
		{
			nombreProducto = prompt("ERROR Ingrese el nombre del producto");
		}

		importeProducto = parseFloat(prompt("Ingrese el importe"));
		while(isNaN(importeProducto) || importeProducto < 0 || importeProducto > 1000)
		{
			importeProducto = prompt("ERROR Ingrese el importe");
		}

		procedencia = prompt("Ingrese la procedencia del producto (importado, nacional, elaborado)");
		while(procedencia != "nacional" && procedencia != "importado" && procedencia != "elaborado")
		{
			procedencia = prompt("ERROR Ingrese la procedencia del producto (importado, nacional, elaborado)");
		}

		peso = parseFloat(prompt("Ingrese el peso (no mayor a 30 kilos"));
		while(isNaN(peso) && peso > 30)
		{
			peso = parseFloat(prompt("ERROR Ingrese el peso (no mayor a 30 kilos"));

		}

		switch(tipoProducto)
		{
			case "limpieza":
				break;
			case "cosmetible":
				if(banderaMasPesadoCosmetibles == true || banderaMasPesadoCosmetibles > peso)
				{
					banderaMasPesadoCosmetibles = peso;
					nombreMasPesadoCosmetibles = nombreProducto;
					banderaMasPesadoCosmetibles = false; 
				}
				break;
			case "otros":
				break;
		}

		
		if(banderaProductoMasCaro == true || banderaProductoMasCaro > importeProducto)
		{
			banderaProductoMasCaro = importeProducto;
			nombreProductoMasCaro = nombreProducto;
			banderaProductoMasCaro = false; 
		}
		
		switch(procedencia)
		{
			case "elaborado":
				if(banderaElaboradoMasBarato == true || banderaElaboradoMasBarato < importeProducto)
				{
					banderaElaboradoMasBarato = importeProducto;
					nombreElaboradoMasBarato = nombreProducto;
					banderaElaboradoMasBarato = false; 
				}
			break; 
		}
	}
		console.log("el cosmetible mas pesado" + nombreMasPesadoCosmetibles); 
		console.log("El nombre del producto mas caro es " + nombreProductoMasCaro); 
		console.log("El nombre del elaborado mas barato es " + nombreElaboradoMasBarato); 

}







