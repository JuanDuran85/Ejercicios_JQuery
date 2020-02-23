$(function () {
    $("#caja").on("click","button.caja_boton",function () {  
        console.log("click en boton");
        // para traer los datos de otro archivo en el servidor, se utiliza el metodo de $.ajax() de JQuery. LA direccion del archivo es relativa, por lo tanto ruta depende donde se encuentre el mismo.
        $.ajax({
            type: "get",
            url: "archivo.html",
            success: function (response) {
                console.log("enviado"+response);
                $("#resultado").html(`<p>${response}</p>`);
            },
            error: function (response) {  
                console.error(response);
                console.log("error: ");
            }
        });

        //otra manera de hacer los llamados mediante ajax y jquery.
        $.ajax("texto.txt").done(function (response) {  
            $("#resultado2").html(response);
        })
    })
});