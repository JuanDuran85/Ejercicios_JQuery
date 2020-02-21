$(function() {

	//buscando todos los descendientes de un elemento
	var personas = $("#seccion .personas");
	console.log(personas);
	// el metodo de JQuery para realizar el proceso anterior es el find
	var resultado = $("#seccion").find('.personas');
	console.log(resultado);
});