$(document).ready(function () {
    
    
    $( "#enviarCorreo" ).click(function() {
        const enviarCorreo = prompt("Ingresa tu correo")
        alert( "El correo fue enviado correctamente..." );
      });


    
    $("h3").on("dblclick", function () {
        $(this).css({
            "color": "red",
        })
    })



    $('.owl-carousel').owlCarousel({
        loop: false,
        margin: 16,
        nav: false,
        dots: true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 3
            },
            1000: {
                items: 4
            }
        }
    })


    var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
    var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
        return new bootstrap.Tooltip(tooltipTriggerEl)
    });

   
    $(".card-title-01").click(function () {
        $(".card-text-01").toggle("slow");
    });

    $(".card-title-02").click(function () {
        $(".card-text-02").toggle("slow");
    });


    $(".card-title-03").click(function () {
        $(".card-text-03").toggle("slow");
    });



})