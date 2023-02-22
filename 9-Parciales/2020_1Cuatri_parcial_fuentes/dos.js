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
    alert(mensaje1)

}
