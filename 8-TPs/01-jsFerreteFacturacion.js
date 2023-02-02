/*1.	Funtanillas Belén 
    Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
function Sumar () 
{
    let precioUno;
    let precioDos;
    let precioTres;
    let suma;

    // precioUno = parseint(document.getElementById("txtIdPrecioUno").value); dos pasos en uno 
    precioUno = document.getElementById("txtIdPrecioUno").value;
    precioUno = parseInt(precioUno);

    precioDos = document.getElementById("txtIdPrecioDos").value;
    precioDos = parseInt(precioDos);

    precioTres = document.getElementById("txtIdPrecioTres").value;
    precioTres= parseInt(precioTres);

    suma = "La suma es " + (precioUno + precioDos + precioTres);

    alert(suma);
    console.log(suma); 
}
function Promedio () 
{
    let precioUno;
    let precioDos;
    let precioTres;
    let promedio;

    precioUno = document.getElementById("txtIdPrecioUno").value;
    precioUno = parseInt(precioUno);

    precioDos = document.getElementById("txtIdPrecioDos").value;
    precioDos = parseInt(precioDos);

    precioTres = document.getElementById("txtIdPrecioTres").value;
    precioTres= parseInt(precioTres);

    promedio= "El promedio es " + (precioUno + precioDos + precioTres) / 3; 

    alert(promedio);
    console.log(promedio);
}
function PrecioFinal () 
{
    let precioUno;
    let precioDos;
    let precioTres;
    let precioSuma;
    let IVA; 
    let precioFinal;

    precioUno = document.getElementById("txtIdPrecioUno").value;
    precioUno = parseInt(precioUno);

    precioDos = document.getElementById("txtIdPrecioDos").value;
    precioDos = parseInt(precioDos);

    precioTres = document.getElementById("txtIdPrecioTres").value;
    precioTres = parseInt(precioTres);

    IVA = 21;

    precioSuma = (precioUno + precioDos + precioTres);
    precioFinal = (precioSuma * IVA / 100) + precioSuma; 

    alert(precioFinal);
    console.log(precioFinal); 
}