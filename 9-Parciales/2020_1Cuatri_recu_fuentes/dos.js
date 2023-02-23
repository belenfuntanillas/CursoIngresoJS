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
  let tipoProducto;
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
    console.log("promedio de compra de arena " + promedio); 
    

}

