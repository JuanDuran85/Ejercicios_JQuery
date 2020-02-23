$(function () {
    //visualizando el texto dentro del contenedor
    var texto = $("#contenedor p.p1").text();
    console.log("Texto del parrafo 1: "+texto);

    //al agregar un texto dentro de los parentesis del metodo, se modifica solo el texto. Es importate recordar que el metodo text es solo para crear un nodo de texto, por lo tanto no se pueden agregar etiquetas html.
    $("#contenedor p.p1").text("Modificado desde JQuery con el metodo text");

    //para modificar el html por completo y agregar etiquetas desde JQuery, se utiliza el metodo html()
    var texto2 = $(".contenedor").html();
    console.log("Texto del contenedor: "+texto2);
    $("#contenedor p.p2").html("Modificado con html desde <em>JQuery</em>");

    //agregando atributos un elemento con el atributo attr
    $("#contenedor p.p4").attr("style","background-color: blue");

    //para vaciar el documento se utiliza el metodo empty
    var texto3 = $("#contenedor p.p3").html();
    console.log("html del parrafo 3: "+texto3);
    $("#contenedor p.p3").empty();
});