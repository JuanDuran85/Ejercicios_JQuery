$(function () {
    $("#contenedor__caja").on("click","a.informa__caja",function (event) {  
        event.preventDefault();
        //los efectos basicos para mostrar y ocultar son: show y hide
        //mientras que toggle hace que cambie el estado entra las dos anteriores
        /* $("#contenedor__caja").children().last().show(1000,function () {  
                alert("Más Información");
            });*/
        //otra opcion era:
        $(this).closest("#contenedor__caja").find(".mas_informacion__caja").toggle(1000, function () {  
                alert("Más Información");
        });
    });
});