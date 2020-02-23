$(function () {
    $("#contenedor__input").on("click", "button", function () {  
        var entrada = $("input").val();

        var agregando = `<div class="grupos">${entrada}<div class="eliminar">X</div></div>`;

        $("#contenedor__grupos").children().last().after(agregando);
        //$("#contenedor__grupos").children().first().before(agregando);

        //borrando elementos mediante delegacion de eventos
        $("#contenedor__grupos").on("click", ".eliminar", function () {  
            var padre = $(this).parent().remove();
        });
    });
});