$(function () {
    $("#main__contenedor").on("click", "a", function (event) {
        //para desactivar los comportamientos predeterminados de formularios, link, se utiliza el metodo de preventDefault 
        event.preventDefault();
        //Para detener la propagacion del evento y que no se ejecute en otros elementos del DOM, se utiliza el metodo stopPropagation
        event.stopPropagation();
        console.log("clic solo en el texto");
        alert("clic en texto con la etiqueta a");
        $("#div__resultado").html("<p>clic solo en el texto</p>");
    });

    $("#main__contenedor").on("click", function () {  
        console.log("clic sobre el contendor");
        $("#div__resultado").html("<p>clic en el contenedor principal</p>");
    })
});