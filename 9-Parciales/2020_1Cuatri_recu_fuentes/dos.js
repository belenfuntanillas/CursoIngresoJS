/* Realizar el algoritmo que permita ingresar los datos de una compra de productos de la construccion, hasta que el cliente quiera:
Tipo validad("arena";"cal";"cemento")
Cantidad de bolsas,
Precio por bolsa (más de cero ),
al terminar la compra el cliente accede a un descuento segun las bolsas en total
Si compro más de 10 bolsas en total tenes 10% de descuento sobre el total a pagar.
Si compro más de 45 bolsas en total tenes 30% de descuento sobre el total a pagar.
a) El importe total a pagar , bruto sin descuento y...
b) el importe total a pagar con descuento(solo si corresponde)
d) Informar el tipo ("arena";"cal";"cemento") con mas cantidad de bolsas en el total de la compra.
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
  let banderaMasCaraCal; 
  let banderaMasBarataCemento; 
  let mensaje; 
  let promedio; 
  let contadorArena; 
  

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
  banderaMasCaraCal = true; 
  banderaMasBarataCemento = true; 

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

    if(cantidad > 45)
    {
        descuento = 30;
        precioConDescuento = precioTotalBruto - (precioTotalBruto * descuento);

    }else if (cantidad > 10)
    {
        descuento = 10;
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
        contadorArena = contadorArena + 1; 
        acumuladorPrecioArena = acumuladorPrecioArena + precio; 
    }
    if(tipoProducto == "cal")
    {
      if(banderaMasCaraCal == true || banderaMasCaraCal > precio)
      {
        banderaMasCaraCal = precio;
        banderaMasCaraCal = false; 
      }
        acumuladorCantidadCal = acumuladorCantidadCal + cantidad; 
        acumuladorPrecioCal = acumuladorPrecioCal + precio;
    }
    if(tipoProducto == "cemento")
    {
      if(banderaMasBarataCemento == true || banderaMasBarataCemento < precio)
      {
        banderaMasBarataCemento = precio;
        banderaMasBarataCemento = false; 
      }
        acumuladorCantidadCemento = acumuladorCantidadCemento + cantidad; 
        acumuladorPrecioCemento = acumuladorPrecioCemento + precio;
    }
    promedio  = acumuladorPrecioArena / contadorArena; 
  }
    console.log(precioTotalBruto); 
    console.log(precioConDescuento);
    console.log("bolsa mas cara cal " + banderaMasCaraCal);
    console.log("bolsa mas barata de cemento " + banderaMasBarataCemento); 
    console.log("bolsas de arena compradas " + acumuladorCantidadArena); 
    console.log("promedio de compra de arena " + promedio); */

    /*Recu 2020 2 bis: /* "El cine"
    De un cine se deben ingresar una cantidad indeterminada 
    de venta de entradas diaria, validando los
    siguientes datos:
    nombre de película, precio, cantidad de entradas, tipo(3D o 4D)
    a)El nombre de la película más cara de tipo 4D.
    b)Informar el precio total de la venta del día.
    c)El nombre de la película con menos cantidad de entradas.
    d)El tipo de pelicula más vista y la cantidad de entradas. 
    e)El nombre de la pelicula más barata en 3D. 
    */

    let nombrePelicula;
    let precio; 
    let cantidad;
    let tipo;
    let nombrePeli4DCara;
    let bandera4DCara; 
    let bandera3DBarata; 
    let nombrePeli3DBarata; 
    let banderaMenosEntradas; 
    let acumuladorEntradas3D; 
    let acumuladorEntradas4D; 
    let acumuladorPrecio; 
    let nombreMenosCantidad; 
    let mensaje; 
    let respuesta; 

    respuesta = "si";
    bandera4DCara = true; 
    bandera3DBarata = true; 
    nombrePeli3DBarata = "";
    nombrePeli4DCara = ""; 
    banderaMenosEntradas = true; 
    acumuladorEntradas3D = 0;
    acumuladorEntradas4D = 0; 
    acumuladorPrecio = 0; 

    while(respuesta == "si")
    {
      nombrePelicula = prompt("Ingrese el nombre de la pelicula");

      precio = parseFloat(prompt("Ingrese el precio"));
      while(isNaN(precio) || precio < 0)
      {
        precio = parseFloat(prompt("ERROR Ingrese el precio"));

      }
     
      cantidad = parseInt(prompt("Ingrese la cantidad de entradas"));
      while(isNaN(cantidad) || cantidad < 1)
      {
        cantidad = parseInt(prompt("Ingrese la cantidad de entradas"))

      }

      tipo = prompt("Ingrese el tipo 3D o 4D");
      while(tipo != "3d" && tipo != "4d")
      {
        tipo = prompt("ERROR Ingrese el tipo 3D o 4D"); 

      }

      switch(tipo)
      {
        case "3d":
          if(bandera3DBarata == true || bandera3DBarata > precio)
          {
            bandera3DBarata = precio;
            nombrePeli3DBarata = nombrePelicula;
            bandera3DBarata = false; 
          }
          acumuladorEntradas3D = acumuladorEntradas3D + cantidad;
          break;

        case "4d": 
          if(bandera4DCara == true || bandera4DCara < precio)
          {
            bandera4DCara = precio;
            nombrePeli4DCara = nombrePelicula;
            bandera4DCara = false; 
          }
          acumuladorEntradas4D = acumuladorEntradas4D + cantidad; 

      }
      acumuladorPrecio = acumuladorPrecio + precio; 

      if(banderaMenosEntradas == true || banderaMenosEntradas > cantidad) 
      {
        banderaMenosEntradas = cantidad; 
        nombreMenosCantidad = nombrePelicula; 
        banderaMenosEntradas = false; 
      }

      if(acumuladorEntradas3D > acumuladorEntradas4D)
      {
        mensaje = "El tipo de pelicula mas vista es 3d con " + acumuladorEntradas3D + " entradas"; 
      }else if(acumuladorEntradas4D > acumuladorEntradas3D)
      {
        mensaje = "El tipo de pelicula mas vista es 4d con " + acumuladorEntradas4D+ " entradas"; 
      }

      respuesta = prompt("Desea continuar? si/no"); 

    }
    console.log("Precio total del dia es: " + acumuladorPrecio); 
    console.log("El nombre de la película más cara de tipo 4D es " + nombrePeli4DCara); 
    console.log("El nombre de la película más barata de tipo 3D es " + nombrePeli3DBarata); 
    console.log("El nombre de la película con menos cantidad de entradas es " + nombreMenosCantidad);
    console.log(mensaje); 
}

