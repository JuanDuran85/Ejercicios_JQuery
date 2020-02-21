/* JQuery se puede cargar o activar mediante las siguientes formas:

$(document).ready(function() {
	
});

o

$(function() {
	
}); */



$(document).ready(function() {
	//seleccionando un elemento mediante selectores de CSS (id, clases, etiquetas);
	//cambiando el HTMl de un elemento seleccionado por ID
	$("#contenedor").html("Cambiando el texto con JQuery");
	// Cambiando el texto de las selecciones mediante clases
	$(".clase_1").text('Agregando texto a las clases desde JQuery');
	//seleccionando mediante clase y cambiando el HTML
	$(".clase_1_2, .clase_1_3, .clase_1_4").html("<strong>Cambiado desde el JQuery</strong>");
	//aqui se seleccionan todos los descendientes del selector
	//$("#lista li").addClass('clase_3');
	//aquí solo se seleccionan los descendientes directos del selector
	$("#lista > li").addClass('clase_3');
});