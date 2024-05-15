$('.owl-carousel').owlCarousel({
    autoplay:true,
    autoplayTimeout: 1100,
    autoplaySpeed: 1100,
    loop: true,
    responsive:{
        0:{
            items:1
        },
        500:{
            items:4
        },
        1100:{
            items:8
        }
    }
});