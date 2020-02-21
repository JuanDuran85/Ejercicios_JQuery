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
	$(".clase_1").text('Agregando testo a las clases desde JQuery');
	//seleccionando mediante clase y cambiando el HTML
	$(".clase_2").html("<strong>Cambiado desde el JQuery</strong>")

});