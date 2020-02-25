$(function () {
    $("#caja").on("click","button.caja_boton",function () {  
        //otra manera de hacer los llamados mediante ajax y jquery.
        $.ajax("texto.txt", {
            //el parametro beforeSend, es un objeto que se ejecuta antes de hacer la llamada mediante una función. 
            beforeSend: function () {
                $("#resultado").text("Cargando...");
            }
            //el metodo done se ejecuta cuando el llamdo de ajax al archivo se ejecuta de manera correcta
        }).done(function (respuesta) { 
            //simulando tiempo de retardo en respuesta de un servidor
            //cuando cambie el estado a cargado, se mostrará la información proveniente del servidor 
            setTimeout(function () {
                console.log(respuesta);
                $("#resultado2").html(respuesta);
            },3000);
            // el metodo always, se ejecuta siempre, exista error o no en el llamado y la respuesta.
        }).fail(function (request, errorType, errorMessage) {
            /* Tipos de errores: "timeout": paso mucho tiempo sin respuesta del servidor. "error": si la pagina no esta disponible o llega un error del tipo 500. "abort": si se aborto la peticion. "parseerror": cuando se pide al servidor una informacion del tipo JSON y lo que envia de regreso no se puede convertir*/
            console.log(errorType);
            console.log(request);
            console.log(errorMessage);
        }).always(function () {
            setTimeout(mostrar,3000);
        });
    });
    //simulando tiempo de retardo en respuesta de un servidor
    function mostrar() {
        $("#resultado").text("Completado...");
    };
});