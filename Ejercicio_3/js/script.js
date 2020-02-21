$(function() {

	//buscando todos los descendientes de un elemento
	var personas = $("#seccion .personas");
	console.log(personas);

	// El metodo de JQuery para realizar el proceso anterior es el find
	var resultado = $("#seccion").find('.personas');
	console.log(resultado);

	//buscando hijos directos - DOM traversing
	var resultado2 = $("#seccion").children();
	console.log(resultado2);

	//el metodo anterior se puede hacer con selectores de css
	var resultado3 = $("#seccion > *");
	console.log(resultado3);

	//tambien sepuede especificar un selector en particular
	var resultado4 = $("#seccion").children("section");
	console.log(resultado4);

	var resultado4 = $("#seccion > section");
	console.log(resultado4);

	//utilizando metodos de seleccion especifica
	//first() last()
	var resultado5 = $("#seccion").children().first().children('.personas').last();
	console.log(resultado5);

	//utilizando el metodo prev()
	var resultado6 = $("#seccion").children().first().children().last().prev().prev();
	console.log(resultado6);

	//utilizando el metodo next()
	var resultado7 = $("#seccion").children().first().children().first().next();
	console.log(resultado7);

	//buscando el padre de un objeto en especifico
	var resultado8 = $("#person_b").parent();
	console.log(resultado8);

	// buscando y mostrando todos los ancestros
	var resultado9 = $("#person_b").parents("");
	console.log(resultado9);

	// buscando y mostrando el ancestro mas cercano
	var resultado10 = $("#person_b").closest(".categoria");
	console.log(resultado10);
});