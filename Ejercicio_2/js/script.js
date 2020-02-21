$(function() {
	//selecciones mediante atributos en los selectores
	$('input[required]').addClass('fondo_1');
	$('input[placeholder="Segundo Nombre"]').addClass('fondo_2');
	$("input[placeholder*='Correo']").addClass('fondo_3');
});