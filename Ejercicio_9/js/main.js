$(function () {
    //Eventos del Teclado: keydown, keyup, keypress
    $("#main__contenedor").on("keydown", "input#entrada1", function () {  
        $("#div__resultado").html(`<p>KeyDown - Tu nombre es: ${$(this).val()}</p>`);
    });
    $("#main__contenedor").on("keyup", "input#entrada2", function () {  
        $("#div__resultado").html(`<p>KeyUp - Tu nombre es: ${$(this).val()}</p>`);
    });
    $("#main__contenedor").on("keypress", "input#entrada3", function () {  
        $("#div__resultado").html(`<p>KeyPress - Tu nombre es: ${$(this).val()}</p>`);
    });
});