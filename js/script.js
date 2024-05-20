$('.owl-carousel-1').owlCarousel({
    autoplay:true,
    autoplayTimeout: 1100,
    autoplaySpeed: 1100,
    loop: true,
    dots: true,
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
$(document).ready(function(){
    $('.owl-carousel-2').owlCarousel({
        autoplay:false,
        loop: true,
        nav: true,
        responsive:{
                        1100:{
                items:1
    }

        }
    });
});