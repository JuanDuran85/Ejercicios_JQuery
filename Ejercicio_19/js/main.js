$(function () {
    $.ajax("destinos.json", {
        dataType: 'json',
        contentType: 'application/json',
        cache: false //para no utilizar el cache del navegador y se conecte al servidor obligatoriamente.
    }).done(function (respuesta) {
        $.each(respuesta, function () {             
            var template = $.templates("#theTmpl");
            console.log(template);
            var htmlOutput = template.render(respuesta);
            console.log(htmlOutput);
            $("#result").html(htmlOutput);
        });
    });

    $("body").on("click",".informa__caja",function (event) {  
        event.preventDefault();
        $(this).closest("#contenedor__caja").find(".mas_informacion__caja").toggle(2000);
    });
});