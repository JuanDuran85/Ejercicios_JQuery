$(function () {
    $("#mascota").on("change",function () {  
        if ($(this).is(":checked")) {
            $("#tipo_mascota").show(1200);
        } else {
            $("#tipo_mascota").val("");
            $("#tipo_mascota").hide(1000);
            $("#muestra").empty();
        };
    });
    $("#mascota").trigger("change"); //activa el evento si la casilla aparece seleccionada

    $("#tipo_mascota").on("change",function () {
        var tipo_mascota = $(this).val();
        if (tipo_mascota == "perro") {
            $("#muestra").text("El perro, ​​​ llamado perro doméstico o can, ​ y coloquialmente chucho​ o tuso, ​ y también choco, ​ es un mamífero carnívoro de la familia de los cánidos, que constituye una subespecie del lobo. En 2001, se estimaba que había cuatrocientos millones de perros en el mundo.​");
        }else if(tipo_mascota == "gato") {
            $("#muestra").text("El gato doméstico​​, llamado popularmente gato, y de forma coloquial minino, ​ michino, ​ michi, ​ micho, ​ mizo, ​ miz, ​ morroño​ o morrongo, ​ entre otros nombres, es un mamífero carnívoro de la familia Felidae. Es una subespecie domesticada por la convivencia con el ser humano.");
        }else if (tipo_mascota == "guacamaya") {
            $("#muestra").text("El guacamayo es un ave del orden Psittaciformes y de la familia Psittacidae, muy llamativa por el colorido de su plumaje. De acuerdo al país o región también se le llama guacamaya roja, guaca, papagayo y lapa roja; en inglés se llama scarlet macaw que significa literalmente “guacamaya escarlata");
        }else {
            $("#muestra").empty();
        };
    });
    $("#tipo_mascota").trigger("change");
});