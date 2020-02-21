$(document).ready(function () {
    //escuchamos al contenedor del boton
    $("#ejemplo").on("click", function () {
        console.log(this); //muestra solamente el boton, el objeto sobre el cual se esta haciendo clic, se refiere solo al boton
        //con el toggle se agrega la clase si no existe, y se quita si la clase ya existe en el elemento.
        $(this).parent().children().toggleClass("nueva_clase");
        console.log($(this).parent());
    });
});