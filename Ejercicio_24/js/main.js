$(function () {
    $( "#formulario" ).submit(function(evento) {
        evento.preventDefault();
        var valor_numero = $("#numePo").val();
        console.log(valor_numero);
          $.ajax({
              url: `https://pokeapi.co/api/v2/pokemon/${valor_numero}/`,
              success: function (data) {
                console.log(data);
                console.log(data.stats);

                $(".chartContainer").CanvasJSChart({ 
                  title: { 
                    text: "Título del Gráfico" 
                  }, 
                  axisY: { 
                    title: "Valor", 
                    includeZero: false 
                  }, 
                  data: [ 
                  { 
                    type: "column", 
                    toolTipContent: "{label}: {y}", 
                    dataPoints: [ 
                      { label: data.stats[0].stat.name, y: data.stats[0].base_stat }, 
                      { label: data.stats[1].stat.name, y: data.stats[1].base_stat }, 
                      { label: data.stats[2].stat.name, y: data.stats[2].base_stat }, 
                      { label: data.stats[3].stat.name, y: data.stats[3].base_stat }, 
                      { label: data.stats[4].stat.name, y: data.stats[4].base_stat }, 
                      { label: data.stats[5].stat.name, y: data.stats[5].base_stat }, 
                    ] 
                  } 
                  ] 
                });
                $(".pokeInfo").append(`<p>${data.name}</p>`);
                //console.log(data.abilities)
              }
            });
      });
});