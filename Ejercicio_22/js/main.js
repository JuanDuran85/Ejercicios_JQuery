$(function () {
    $(".btn").click(function() {
      $(".text").text("loading . . .");
      $.ajax({
        type: "GET",
        url: "https://api.meetup.com/2/cities",
        success: function(data) {
            //$(".text").text(JSON.stringify(data));
            var elementos = [];
            for (const key in data) {
                //console.log("for IN 2");
                for (const key2 in data[key]) {
                    //console.log(key2);
                    //console.log(data[key][key2]);
                    elementos.push(data[key][key2]);
                    console.log(elementos);
                };
            };
            //console.log("elemento 0");
            //console.log(elementos[0].zip); 
            var mostrar = `
            <table>
                <tbody>
                    <tr>
                        <td>Id</td>
                        <td>ZIP</td>
                        <td>Country</td>
                    </tr>
            `;

            elementos.forEach((value, index, array) => {
/*                 console.log("elementos");
                console.log(value);
                console.log(index);
                console.log(array); */
                if (index <= 20) {
                    mostrar += `
                        <tr>
                            <td>${index}</td>
                            <td>${value.zip}</td>
                            <td>${value.country}</td>
                        </tr>
                        `;
                }
            });

            mostrar += `
                    </tbody>
                    </table>
            `;
            $(".text").text("Cargado");
            $("body").append(mostrar); 
            // for (let index = 0; index < 20; index++) {
            //     var mostrar = `
            //             <table>
            //                 <tbody>
            //                     <tr>
            //                         <td>ZIP</td>
            //                         <td>Country</td>
            //                     </tr>
            //                     <tr>
            //                         <td>${elementos[index].zip}</td>
            //                         <td>${elementos[index].country}</td>
            //                     </tr>
            //                 </tbody>
            //             </table>
            //         `;
            //         $("body").append(mostrar);    
            // }; 
        },
        dataType: "jsonp"
      });
    });
});