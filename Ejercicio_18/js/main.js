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
            mostrar = '<section id="contenedor__caja" class="contenedor__caja col-4 m-1" data-id="'+valueOfElement.id+'">';
            mostrar += '<img src="'+valueOfElement.imagen+'" >';
            mostrar += '<div class="titulo__caja">'+valueOfElement.nombre+'</div>';
            mostrar += '<p>'+valueOfElement.descripcion+'</p>';
            mostrar += '<div class="precio__caja">'+valueOfElement.precio+'CLP</div>';
            mostrar += '<button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModal">Agregar a Carro</button>';
            mostrar += `
                <div>
                    <a href="#" class="informa__caja">Más Información Aquí</a>
                </div>
                <div class="mas_informacion__caja">
                    <p>${valueOfElement.masInfo}</p>
                </div>
            `;
            mostrar += `
            <!-- Modal -->
            <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog" role="document">
                <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body">
                    Compra agregada al carro. Precio seleccionado ${valueOfElement.precio}
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                </div>
                </div>
            </div>
            </div>   
            `;
            $(".muestra").append(mostrar);
        });
    });

    $("body").on("click",".informa__caja",function (event) {  
        event.preventDefault();
        $(this).closest("#contenedor__caja").find(".mas_informacion__caja").toggle(2000);
    });
});