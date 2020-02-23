$(function () {
    $("#caja1").on("click",function () {
        var offset = $(this).offset();
        var izquierda= offset.left;
        console.log($(this));
        console.log(izquierda);
        if (izquierda >= 700) {
            $(this).animate({left: "-=50px"});
        }else {
            $(this).animate({left: "+=50px"});
        }
    });

    $("#caja2").on("click", function () {
        $(this).animate({opacity: 0.4}, "slow", function () {
            console.log("termino el opaco");
        })
    })
});