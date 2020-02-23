$(function () {
    $("#main__contenedor").on("click", "button", function () {
        var seleccion = $("#main__contenedor select option:selected");
        var valor = seleccion.val();
        var precio = seleccion.attr("data-precio");

        if (precio) {
            $("#div__resultado").html("<p>Destino seleccionado: "+valor+". El costo es de: "+precio+"USD</p>");
        };
        
    });

    //usando delegacion de eventos con change
    $("#main__contenedor").on("change", "#select__lugar", function () {
        console.log("hay cambio");
        var seleccion2 = $("#select__lugar option:selected");
        var valor2 = seleccion2.val();
        var precio2 = seleccion2.data("precio");

        if (precio2) {
        var valor2 = seleccion2.val();
            alert(`Su selección fue: ${valor2} y el costo es de: ${precio2}USD`);
        }
    })
});