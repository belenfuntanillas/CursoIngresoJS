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
	
	/*let tipoProducto;
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
			case "alcohol":
				contadorAlcohol = contadorAlcohol + 1;
				acumuladorAlcohol = acumuladorAlcohol + unidadesProducto;
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
	console.log("El tipo con más unidades es " + mayorTipo + " y el promedio de su compra es " + promedio);*/

	/*
		Recu 2020 1 bis: 
		"Jugando al Doctor" 
		De 7 personas que ingresan al hospital se deben tomar y validar los siguientes datos:
		nombre, altura, peso y sexo.
		a)Informar la cantidad de personas de sexo femenino. 
		b)La altura promedio en total de pacientes.
		c)El nombre del hombre con menos peso(si lo hay).
		d)De la persona no binaria, el más flaco. 
		Pedir datos por prompt y mostrar por document.write o console.log
	*/
	
	let nombre;
	let altura;
	let peso;
	let sexo; 
	let contadorFemenino;
	let contadorAltura;
	let acumuladorAltura;
	let promedio; 
	let banderaHombre;
	let nombreHombre;
	let banderaNoBinario;
	let nombreNoBinario; 


	contadorFemenino = 0; 
	contadorAltura = 0,
	acumuladorAltura = 0; 
	nombreHombre = ""; 
	nombreNoBinario = ""; 
	banderaHombre = true; 
	banderaNoBinario = true; 

	for(i = 0; i < 7; i++)
	{
		nombre = prompt("ingrese su nombre"); 

        altura = parseFloat(prompt("ingrese su altura en cm."));
        while(isNaN(altura)  || altura < 50  || altura > 250)
		{
            altura = parseFloat(prompt("ERROR: no podes medir menos de medio metro ni mas de 2,5 mt."))
        }

        peso = parseFloat(prompt("ingrese su peso"));
        while(isNaN(peso)  || peso < 30  || peso > 300)
		{
            peso = parseFloat(prompt("ERROR: no podes pesar menos de 30 kg. ni mas de 300 kg."))
        }

        sexo = prompt("ingrese su sexo");
        while(sexo != "m" && sexo != "f" && sexo != "nb")
		{
            sexo = prompt("ERROR: su sexo puede ser m, f o nb")
        }

			contadorAltura = contadorAltura + 1;
			acumuladorAltura = acumuladorAltura + altura; 
		
		switch(sexo)
		{
			case "f":
				sexo = "Su sexo es femenino";
				contadorFemenino = contadorFemenino + 1;
				break;
			case "m": 
				sexo = "Su sexo es masculino";
				if(banderaHombre == true || banderaHombre > peso)
				{
					banderaHombre = peso;
					nombreHombre = nombre;
					banderaHombre = false; 
				}
				break;
			case "nb":
				sexo = "Su sexo es no binario";
				if(banderaNoBinario == true || banderaNoBinario > peso)
				{
					banderaNoBinario = peso; 
					nombreNoBinario = nombre; 
					banderaNoBinario = false; 
				}
				break;
		}
	}

	promedio = acumuladorAltura / contadorAltura; 

	console.log("Cantidad de femeninos " + contadorFemenino);
	console.log("altura promedio en total de pacientes es: " + promedio); 
	console.log("Hombre con menos peso: " + nombreHombre);
	console.log("No binario mas flaco: " + nombreNoBinario); 


	
}


