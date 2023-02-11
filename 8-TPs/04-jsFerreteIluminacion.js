//FUNTANILLAS BELÉN
/*4.	Para el departamento de iluminación:
Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $35 pesos final.
A.	Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%. 
B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % y si es de otra marca el descuento es del 30%.
C.	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un descuento del 25 % y si es de otra marca el descuento es del 20%.
D.	Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%, si es  “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.
E.	Si el importe final con descuento suma más de $120  se debe sumar un 10% de ingresos brutos en informar del impuesto con el siguiente mensaje:
 ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó. 

 */
function CalcularPrecio () 
{
 	/*
    let cantidadLamparas;
    let precio;
    let marca; 
    let precioFinal;
    let descuento; 
    let impuesto; 

    precio = 35;
    

    cantidadLamparas = parseInt(document.getElementById("txtIdCantidad").value);
    marca = document.getElementById("Marca").value;


    //PUNTO A
    if (cantidadLamparas > 5) 
    {
        descuento = 50/100;

    }else if (cantidadLamparas == 5) 
        {
            if (marca == "ArgentinaLuz") 
            {
                descuento = 40/100; 
            }else{
                descuento = 30/100;
            } 
    } else if (cantidadLamparas == 4) 
    {
        if (marca == "ArgentinaLuz" || marca == "FelipeLamparas") 
        {
            descuento = 25/100;
        }else{
            descuento = 20/100; 
        }
    }else if (cantidadLamparas == 3) 
    {
        if (marca == "ArgentinaLuz") 
        {
            descuento = 15/100; 
        }else if (marca == "FelipeLamparas") 
        { 
            descuento = 10/100;
        }else{
            descuento = 5/100; 
        }
    }else{
        descuento = 0/100; 
    }

    precioFinal = precio - (precio * descuento); 

    if (precioFinal >= 120) 
    {
        impuesto = precioFinal * 10/100; 
        precioFinal = precioFinal + impuesto; 

        alert("Usted pago " + impuesto + " de IIBB"); 
    }

    document.getElementById("txtIdprecioDescuento").value = precioFinal;*/

    //FUNTANILLAS BELÉN IF (MARCA) SWITCH (CANTIDAD)
    
   /* let cantidadLamparas;
    let precio;
    let marca; 
    let precioFinal;
    let descuento; 
    let impuesto; 

    precio = 35;
    

    cantidadLamparas = parseInt(document.getElementById("txtIdCantidad").value);
    marca = document.getElementById("Marca").value;
    descuento = 0; 

    
    
       if (marca == "ArgentinaLuz") 
        {
            switch (cantidadLamparas) 
            {
                case 5:
                    descuento = 40/100;
                    break;
                case 4: 
                    descuento = 25/100;
                    break; 
                case 3: 
                    descuento = 15/100;
                    break; 
                default:
                    descuento = 50/100;
            }
        }else if (marca == "FelipeLamparas") 
        {
            switch (cantidadLamparas) 
            {
                case 4:
                descuento = 25/100;
                break;
                case 3:
                    descuento = 10/100;
                    break;
                default:
                    descuento = 50/100;
            }
        }else if (marca != "ArgentinaLuz" && marca != "FelipeLamparas") 
        {
            switch (cantidadLamparas) 
            {
                case 5:
                    descuento = 30/100;
                    break;
                case 4:
                    descuento = 20/100;
                    break;
                case 3:
                    descuento = 5/100;
                    break;
                default:
                    descuento = 50/100;
                break; 
            }
        } 
    

    precioFinal = precio - (precio * descuento); 

    if (precioFinal >= 120) 
    {
        impuesto = precioFinal * 10/100; 
        precioFinal = precioFinal + impuesto; 

        alert("Usted pago " + impuesto + " de IIBB"); 
    }

    document.getElementById("txtIdprecioDescuento").value = precioFinal;*/

    //SWITCH (MARCA) IF (LAMPARAS)

   /* let cantidadLamparas;
    let precio;
    let marca; 
    let precioFinal;
    let descuento; 
    let impuesto; 

    precio = 35;
    

    cantidadLamparas = parseInt(document.getElementById("txtIdCantidad").value);
    marca = document.getElementById("Marca").value;
    descuento = 0; 

    switch (marca) 
    {
        case "ArgentinaLuz":
            if (cantidadLamparas >=6) 
            {
                descuento = 50/100; 

            }else if(cantidadLamparas == 5)
            {
                descuento = 40/100;

            }else if (cantidadLamparas == 4) 
            {
                descuento = 25/100;

            }else if(cantidadLamparas == 3)
            {
                descuento = 15/100;

            }else{
                descuento = 0/100; 
            }

            break;
        
        case "FelipeLamparas":
            if (cantidadLamparas >=6) 
            {
                descuento = 50/100; 

            }else if(cantidadLamparas == 5)
            {
                descuento = 30/100;

            }else if (cantidadLamparas == 4) 
            {
                descuento = 25/100;

            }else if(cantidadLamparas == 3)
            {
                descuento = 10/100;

            }else{
                descuento = 0/100; 
            }

            break;

        case "JeLuz":
            if (cantidadLamparas >= 6) 
            {
                descuento = 50/100;

            }else if (cantidadLamparas == 5) 
            {
                descuento = 30/100;

            }else if (cantidadLamparas == 4)
            {
                descuento = 20/100;

            }else if (cantidadLamparas == 3) 
            {
                descuento = 5/100; 

            }else{
                descuento = 0/100;
            }

            break; 

        case "HazIluminacion":
            if (cantidadLamparas >= 6) 
            {
                descuento = 50/100;

            }else if (cantidadLamparas == 5) 
            {
                descuento = 30/100;

            }else if (cantidadLamparas == 4)
            {
                descuento = 20/100;

            }else if (cantidadLamparas == 3) 
            {
                descuento = 5/100; 

            }else{
                descuento = 0/100;
            }

            break; 

        case "Osram":
            if (cantidadLamparas >= 6) 
            {
                descuento = 50/100;

            }else if (cantidadLamparas == 5) 
            {
                descuento = 30/100;

            }else if (cantidadLamparas == 4)
            {
                descuento = 20/100;

            }else if (cantidadLamparas == 3) 
            {
                descuento = 5/100; 

            }else{
                descuento = 0/100;
            }

            break; 

    }
        precioFinal = precio - (precio * descuento); 

        if (precioFinal >= 120) 
        {
            impuesto = precioFinal * 10/100; 
            precioFinal = precioFinal + impuesto; 

            alert("Usted pago " + impuesto + " de IIBB"); 
        }

        document.getElementById("txtIdprecioDescuento").value = precioFinal;*/

        //TODO SWITCH

    let cantidadLamparas;
    let precio;
    let marca; 
    let precioFinal;
    let descuento; 
    let impuesto; 

    precio = 35;
    

    cantidadLamparas = parseInt(document.getElementById("txtIdCantidad").value);
    marca = document.getElementById("Marca").value;
    descuento = 0; 


        if (cantidadLamparas >0)
        {
            switch(cantidadLamparas)
            {
                case 5:
                    switch (marca)
                    {
                        case "ArgentinaLuz": porcentaje = 40/100
                        break;
    
                        default : porcentaje = 30/100
                        break;
                    }
                        
                break;
    
                case 4:
                    switch (marca)
                    {
                        case "ArgentinaLuz":
                        case "FelipeLamparas": porcentaje = 25/100
                        break;
                        default : porcentaje = 20/100
                        break;
                    }
    
                break;
    
                case 3:
                    switch (marca)
                    {
                        case "ArgentinaLuz": porcentaje = 15/100
                        break;
                        case "FelipeLamparas": porcentaje = 10/100
                        break;
                        default : porcentaje = 5/100
                        break;
                    }
    
                break;
    
                case 2:
                    porcentaje = 0/100
                break;
    
                case 1:
                    porcentaje = 0/100
                break;
    
                default:
                    porcentaje = 50/100
                break;
                
            }
            
        } 
        precioFinal = precio - (precio * descuento); 

        if (precioFinal >= 120) 
        {
            impuesto = precioFinal * 10/100; 
            precioFinal = precioFinal + impuesto; 

            alert("Usted pago " + impuesto + " de IIBB"); 
        }

        document.getElementById("txtIdprecioDescuento").value = precioFinal;

    }
    
