$(function () {
    $("#main__contenedor").on("click", "button", function () {
        var seleccion = $("#main__contenedor select option:selected");
        var valor = seleccion.val();
        var precio = seleccion.attr("data-precio");
        //cualquiera de las dos maneras es valida
        //var precio = seleccion.data("precio");

        if (precio) {
            $("#div__resultado").html("<p>Destino seleccionado: "+valor+". El costo es de: "+precio+"USD</p>");
        }    
    });
});