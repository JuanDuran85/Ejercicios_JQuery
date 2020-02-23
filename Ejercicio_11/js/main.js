$(function () {
    $("#contenedor__input").on("click", "button", function () {  
        var entrada = $("input").val();

        var agregando = `<div class="grupos">${entrada}<div class="eliminar">X</div></div>`;

        $("#contenedor__grupos").append(agregando);
        //otra manera de agregar el elemento al final es con:
        //$(agregando).appendTo("#contenedor__grupos");

        $("#contenedor__grupos").prepend(agregando);
         //otra manera de agregar el elemento al inicio es con:
         //$(agregando).prependTo("#contenedor__grupos");
        
    });
});