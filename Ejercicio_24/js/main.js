$(function () {
    $( "#formulario" ).submit(function(evento) {
        evento.preventDefault();
        var valor_numero = $("#numePo").val();
        console.log(valor_numero);

          $.ajax({
              url: `https://pokeapi.co/api/v2/pokemon/${valor_numero}/`,
              success: function (data) {
                //console.log(data);
                //console.log(data.abilities);
                $.each(data.abilities, function (indexInArray, valueOfElement) { 
                    console.log(indexInArray); 
                    console.log(valueOfElement.ability.url);
                  $(".pokeInfo").append(`<p>${valueOfElement.ability.url}</p>`);
                });
              }
            });
      });
});