$(function () {
    $( "#formulario" ).submit(function(evento) {
        evento.preventDefault();
        var valor_numero = $("#numePo").val();
        $(".pokeInfo").empty();
        $(".pStats").empty();
        console.log(valor_numero);
          $.ajax({
            url: `https://pokeapi.co/api/v2/pokemon/${valor_numero}/`,
          }).done(function( data ) {
              console.log( "Sample of data:", data );
              $(".pokeInfo").append(`<div><h3>${data.name}<h3><div>`);
              $(".pokeInfo").append(`<img src="${data.sprites.front_default}"/>`);
              $(".pokeInfo").append(`<div><p>Peso: ${data.weight}kg<p><div>`);
            });
      });
});