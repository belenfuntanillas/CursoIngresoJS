/* Funtanillas Belén 
Realizar el algoritmo que permita ingresar los datos de una compra productos de la construccion, hasta que el cliente quiera:
Tipo validad("arena";"cal";"cemento")
Cantidad de bolsas,
Precio por bolsa (más de cero ),

Si compro más de 10 bolsas en total tenes 15% de descuento sobre el total a pagar.
Si compro más de 30 bolsas en total tenes 25% de descuento sobre el total a pagar.
a) El importe total a pagar , bruto sin descuento y...
b) el importe total a pagar con descuento(solo si corresponde)
d) Informar el tipo con mas cantidad de bolsas.
f) El tipo mas caro
*/
function mostrar()
{
  /*let tipoProducto;
  let cantidad;
  let precio;
  let respuesta; 
  let descuento;
  let precioTotalBruto; 
  let acumuladorCantidadArena;
  let acumuladorCantidadCal;
  let acumuladorCantidadCemento;
  let acumuladorPrecioArena;
  let acumuladorPrecioCal;
  let acumuladorPrecioCemento;
  let precioConDescuento;
  let mensaje; 
  let mensaje1; 

  respuesta = "si"; 
  acumuladorCantidadArena = 0;
  acumuladorCantidadCal = 0; 
  acumuladorCantidadCemento = 0;
  acumuladorPrecioArena = 0;
  acumuladorPrecioCal = 0;
  acumuladorPrecioCemento = 0;
  precioConDescuento = 0; 
  precioTotalBruto = 0;
  acumuladorPrecioArena = 0;
  acumuladorPrecioCal = 0; 
  acumuladorPrecioCemento = 0; 
  banderaMasCantidad = true; 

  while(respuesta == "si" || respuesta == "Si")
  {
    tipoProducto = prompt("Ingrese tipo de producto: arena; cal ; cemento"); 
    while(tipoProducto != "arena" && tipoProducto != "cal" && tipoProducto != "cemento")
    {
        tipoProducto = prompt("ERROR Ingrese tipo de producto: arena; cal ; cemento"); 
    }

    cantidad = prompt("Ingrese la cantidad"); 
    while(isNaN(cantidad) || cantidad < 0 || cantidad > 1000)
    {
        cantidad = parseInt(prompt("ERROR Ingrese la cantidad")); 
    }

    precio = parseFloat(prompt("Ingrese el precio"));
    while(isNaN(precio) || precio < 0)
    {
        precio = parseFloat(prompt("ERROR Ingrese el precio")); 
    } 

    if(cantidad > 30)
    {
        descuento = 25;
        precioConDescuento = precioTotalBruto - (precioTotalBruto * descuento);

    }else if (cantidad > 10)
    {
        descuento = 15;
        precioConDescuento = precioTotalBruto - (precioTotalBruto * descuento / 100);
    }else 
    {
        descuento = 0;
        precioConDescuento = precioTotalBruto - (precioTotalBruto * descuento / 100);
    }

    precioTotalBruto = precioTotalBruto + (cantidad * precio); 
    respuesta = prompt("¿Desea continuar? si / no");

    if(tipoProducto == "arena")
    {
        acumuladorCantidadArena = acumuladorCantidadArena + cantidad; 
        acumuladorPrecioArena = acumuladorPrecioArena + precio;
    }
    if(tipoProducto == "cal")
    {
        acumuladorCantidadCal = acumuladorCantidadCal + cantidad; 
        acumuladorPrecioCal = acumuladorPrecioCal + precio;
    }
    if(tipoProducto == "cemento")
    {
        acumuladorCantidadCemento = acumuladorCantidadCemento + cantidad; 
        acumuladorPrecioCemento = acumuladorPrecioCemento + precio;
    }
   
    if (acumuladorCantidadArena > acumuladorCantidadCal && acumuladorCantidadArena > acumuladorCantidadCemento) 
    {
       mensaje = "arena es el producto con mas cantidad de bolsas";
       
    }else if(acumuladorCantidadCal > acumuladorCantidadCemento && acumuladorCantidadCal > acumuladorCantidadArena) 
    {
       mensaje = "cal es el producto con mas cantidad de bolsas";
       
    }else if(acumuladorCantidadCemento > acumuladorCantidadCal && acumuladorCantidadCemento > acumuladorCantidadArena)
    {
       mensaje = "cemento es el producto con mas cantidad de bolsas";
        
    }

    if (acumuladorPrecioArena > acumuladorPrecioCal && acumuladorPrecioArena > acumuladorPrecioCemento) 
    {
       mensaje1 = "arena es el tipo de producto mas caro";
       
    }else if(acumuladorPrecioCal > acumuladorPrecioCemento && acumuladorPrecioCal > acumuladorPrecioArena) 
    {
       mensaje1 = "cal es el tipo de producto mas caro";
       
    }else if(acumuladorPrecioCemento > acumuladorPrecioCal && acumuladorPrecioCemento > acumuladorPrecioArena)
    {
       mensaje1 = "cemento es el tipo de producto mas caro";
        
    }
  }
    alert(precioTotalBruto); 
    alert(precioConDescuento);
    alert(mensaje); 
    alert(mensaje1)*/

    ////////////////////////////////////////////////////////////////////////////////////////

    /*Parcial 2020 2 bis: 
    /"La veterinaria" pedir el ingreso de 10 mascotas
    validar
    tipo ( gato , perro , pájaro y otros)solo esos cuatro tipo
    raza: si es perro (pastor, toy, callejero) y 
    si gato (siamés, turco, Peterbald , generico) 
    y si es de tipo "otros" o pájaro , pedir solo un texto
    Edad entre 1 y 20 para gatos y perros , para "otros" entre 1 y 100 , para pájaro 1 de 50
    nombre (no se permite solo numero)
    mostrar por cada tipo el nombre del mas viejo , solo si hay de ese tipo
    mostrar que raza de gatos tiene mas animales y el promedio de edad de esta raza*/

    let tipoMascota;
    let razaPerro; 
    let razaGato;
    let razaPajaro;
    let razaOtros;
    let edadPerro;
    let edadGato;
    let edadPajaro;
    let edadOtros; 
    let nombre;
    let banderaGatoMasViejo;
    let banderaPerroMasViejo;
    let banderaPajaroMasViejo;
    let banderaOtroMasViejo;
    let nombreGatoViejo;
    let nombrePerroViejo;
    let nombrePajaroViejo;
    let nombreOtroViejo; 
    let mayorEdadPerro;
    let mayorEdadGato;
    let mayorEdadPajaro;
    let mayorEdadOtros
    let contadorSiames;
    let contadorTurco;

     banderaGatoMasViejo = true;
     banderaPerroMasViejo = true; 
     banderaPajaroMasViejo = true; 
     banderaOtroMasViejo = true; 
     contadorSiames = 0; 


    for(i = 0; i < 2; i++)
    {
        tipoMascota = prompt("Ingrese el tipo de mascota (gato , perro , pájaro y otros)");
        while(tipoMascota != "gato" && tipoMascota != "perro" && tipoMascota != "pajaro" && tipoMascota != "otros")
        {
            tipoMascota = prompt("ERROR Ingrese el tipo de mascota (gato , perro , pájaro y otros)");

        }

        nombre = prompt("Ingrese el nombre");
                while(!isNaN(nombre))
                {
                    nombre = prompt("ERROR Ingrese el nombre");
                }

        switch(tipoMascota)
        {
            case "gato":
                razaGato = prompt("Ingrese la raza del gato (siamés, turco, Peterbald , generico)");
                while(razaGato != "siames" && razaGato != "turco" && razaGato != "peterbald" && razaGato != "generico")
                {
                    razaGato = prompt("ERROR Ingrese la raza del gato (siamés, turco, Peterbald , generico)");
                }

                edadGato = prompt("Ingrese su edad entre 1 y 20 años");
                while(isNaN(edadGato) || edadGato < 1 || edadGato > 20)
                {
                    edadGato = parseInt(prompt("ERROR Ingrese su edad entre 1 y 20 años"));

                }

               

                if(banderaGatoMasViejo == true || banderaGatoMasViejo < edadGato)
                {
                    banderaGatoMasViejo = edadGato;
                    nombreGatoViejo = nombre;
                    banderaGatoMasViejo = false; 
                }
                break; 
            case "perro":
                razaPerro = prompt("Ingrese la raza de perro (pastor, toy, callejero)"); 
                while(razaPerro != "pastor" && razaPerro != "toy" && razaPerro != "callejero")
                {
                    razaPerro = prompt("ERROR Ingrese la raza de perro (pastor, toy, callejero)");
                }

                edadPerro = parseInt(prompt("Ingrese la edad del perro entre 1 y 20 años")); 
                while(isNaN(edadPerro) || edadPerro < 1 || edadPerro > 20)
                {
                    edadPerro = prompt("ERROR Ingrese su edad entre 1 y 20 años");

                }

                if(banderaPerroMasViejo == true || banderaPerroMasViejo < edadPerro)
                {
                    banderaPerroMasViejo = edadPerro;
                    nombrePerroViejo = nombre;
                    banderaPerroMasViejo = false; 
                }
                break; 
            case "pajaro": 
                razaPajaro = prompt("Ingrese la raza de su pajaro");
                while(!isNaN(razaPajaro))
                {
                    razaPajaro = prompt("ERROR Ingrese la raza de su pajaro");
                }

                edadPajaro = parseInt(prompt("Ingrese la edad del perro entre 1 y 50 años")); 
                while(isNaN(edadPajaro) || edadPajaro < 1 || edadPajaro > 50)
                {
                    edadPajaro = prompt("ERROR Ingrese su edad entre 1 y 50 años");
                }

                if(banderaPajaroMasViejo == true || banderaPajaroMasViejo < edadPajaro)
                {
                    banderaPajaroMasViejo = edadPajaro;
                    nombrePajaroViejo = nombre;
                    banderaPajaroMasViejo = false; 
                }
                break; 
            case "otros":
                razaOtros = prompt("Ingrese la raza");
                while(!isNaN(razaOtros))
                {
                    razaOtros = prompt("ERROR Ingrese la raza");
                }

                edadOtros = parseInt(prompt("Ingrese la edad entre 1 y 100 años")); 
                while(isNaN(edadOtros) || edadOtros < 1 || edadOtros > 100)
                {
                    edadOtros = prompt("ERROR Ingrese su edad entre 1 y 100 años");
                }

                if(banderaOtroMasViejo == true || banderaOtroMasViejo < edadOtros)
                {
                    banderaOtroMasViejo = edadOtros;
                    nombreOtroViejo = nombre;
                    banderaOtroMasViejo = false; 
                }
                break;  
        }

       

    }

    console.log("El gato mas viejo es " + nombreGatoViejo); 
    console.log("El perro mas viejo es " + nombrePerroViejo);
    console.log("El pajaro mas viejo es " + nombrePajaroViejo);
    console.log("Otros mas viejo es " + nombreOtroViejo); 
}
