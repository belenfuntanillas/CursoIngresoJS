//Funtanillas Belén
/*Al presionar el Botón, asignar una nota RANDOM al examen y mostrar:
"EXCELENTE" para notas igual a 9 o 10,
"APROBÓ" para notas mayores a 4,
"Vamos, la proxima se puede" para notas menores a 4
*/

function mostrar()
{
	let nota;
	let mensaje;

	nota = Math.floor(Math.random() * 10) + 1;

	if (nota >= 9) 
	{
		mensaje = "Excelente";
	}else{
		if (nota >= 4) 
		{
			mensaje = "Aprobó";
		}else{
			mensaje = "Vamos, la proxima se puede";
		}
	}

	alert("Tu nota es un: " + nota   + ", "  + mensaje);

}//FIN DE LA FUNCIÓN