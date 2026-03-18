$(document).ready(function(){
    $('.owl-carousel').owlCarousel({
        loop: true,
        margin: 10,
        nav: true, // Força a exibição das setas
        navText: ["<span>&#10094;</span>", "<span>&#10095;</span>"], // Setas simples em HTML
        dots: false,
        autoplay: false,
        autoplayTimeout: 3000,
        responsive: {
            0: { items: 2 },
            600: { items: 3 },
            1000: { items: 5 }
        }
    });
});