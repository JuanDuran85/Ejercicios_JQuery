$(function () {
    $.ajax("destinos.json", {
        dataType: 'json',
        contentType: 'application/json',
        cache: false //para no utilizar el cache del navegador y se conecte al servidor obligatoriamente.
    }).done(function (respuesta) {
        console.log(respuesta);
        var mostrar;
        $.each(respuesta, function (indexInArray, valueOfElement) { 
            console.log("Index: "+indexInArray);
            console.log(valueOfElement);
            mostrar = '<section id="contenedor__caja" class="contenedor__caja" data-id="'+valueOfElement.id+'">';
            mostrar += '<img src="'+valueOfElement.imagen+'" >';
            mostrar += '<div class="titulo__caja">'+valueOfElement.nombre+'</div>';
            mostrar += '<p>'+valueOfElement.descripcion+'</p>';
            mostrar += '<div class="precio__caja">'+valueOfElement.precio+'CLP</div>';
            mostrar += '<button>Agregar a Carro</button>';
            mostrar += `
                <div>
                    <a href="#" class="informa__caja">Más Información Aquí</a>
                </div>
                <div class="mas_informacion__caja">
                    <p>${valueOfElement.masInfo}</p>
                </div>
            `;
            $("body").append(mostrar);
        });
    });

    $("body").on("click",".informa__caja",function (event) {  
        event.preventDefault();
        $(this).closest("#contenedor__caja").find(".mas_informacion__caja").toggle(2000);
    });
});