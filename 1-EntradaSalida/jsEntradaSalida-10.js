/* Funtanillas Belén
Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
/*
function mostrarAumento()
{
	let importe;
	let porcentaje; 
	let resultado;

	importe= document.getElementById("txtIdImporte").value; 
	importe= parseInt(importe);

	porcentaje= importe * 25/100;

	resultado= importe - porcentaje;

	document.getElementById("txtIdResultado").value= resultado;

}*/

//10 y 10 bis Funtanillas Belén 
function mostrarAumento()
{
	let importe;
	let descuentoIngresado;
	let resultado;
	let descuento;
// ingreso 100
	importe = document.getElementById("txtIdImporte").value; 
	importe = parseInt(importe); 
//25 descuento
	descuentoIngresado = prompt("Ingresar un porcentaje de descuento");
	descuentoIngresado = parseInt(descuentoIngresado);
	
//              100    *   0,25   = 25
	descuento = importe * descuentoIngresado/100;
   //             100     - 25
	resultado = importe - descuento;

	document.getElementById("txtIdResultado").value = resultado;
}
