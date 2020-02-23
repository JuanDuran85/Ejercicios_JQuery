$(function () {
    $("#contenedor__caja").on("click","a.informa__caja",function (event) {  
        event.preventDefault();
        //los efectos basicos para mostrar y ocultar son: show y hide
        //mientras que toggle hace que cambie el estado entra las dos anteriores
        /* $("#contenedor__caja").children().last().toggle(1000,function () {  
                alert("Más Información");
            });*/
        //otra opcion era:
        $(this).closest("#contenedor__caja").find(".mas_informacion__caja").toggle(1000, function () {  
                console.log("Más Información mostrada con toggle");
        });

        //otro efecto para aparecer y desaparecer es el fadeIn y el fadeOut. Ambos se pueden mezclar en una sola instruccion llamada fadeToggle
        $(this).closest("#contenedor__caja").find(".mas_informacion__caja2").fadeToggle(3000, function () {  
            console.log("Más Información mostrada con fadeToggle");
        });

        //Efectos de deslizamiento. Al igual que los efectos anteriores, el deslizamiento se puede lograr mediante los metodos: slideDown, slideUp()y la mezlca de las dos anteriroes con slideToggle()

        $(this).closest("#contenedor__caja").find(".mas_informacion__caja3").slideToggle(2000);

    });
});