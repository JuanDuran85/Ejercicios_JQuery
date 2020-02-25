$(function () {
    $( "#formulario" ).submit(function(evento) {
        evento.preventDefault();
        var valor_numero = $("#numePo").val();
        console.log(valor_numero);
          $.ajax({
            url: `https://pokeapi.co/api/v2/pokemon/${valor_numero}/`,
          }).done(function( data ) {
              console.log( "Sample of data:", data );
            });
      });
});