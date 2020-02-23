$(function () {
    $("#caja").on("click","button.caja_boton",function () {  
        //otra manera de hacer los llamados mediante ajax y jquery.
        $.ajax("texto.txt", {
            beforeSend: function () {
                $("#resultado").text("Cargando...");
            }
        }).done(function (response) {  
            $("#resultado2").html(response);
        }).always(function () {
            setTimeout(mostrar,3000);
        });
    });
    //simulando tiempo de retardo en respuesta de un servidor
    function mostrar() {
        $("#resultado").text("Completado...");
    };
});