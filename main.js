$(document).ready(function(){
    $('.testimonial-1-slider').slick({
        arrows: true,
        prevArrow: '<button type="button" class="slick-prev"><img src="right.svg" class="arrow-left" alt="Left"></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="right.svg" class="arrow-right" alt="Right"></button>',
    });

    $('.testimonial-2-slider').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
    });

    $('.services-3-slider').slick({
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 2,
        arrows: true,
        prevArrow: '<button type="button" class="slick-prev"><img src="ChevronLeft.svg" class="arrow-left" alt="Left"></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="ChevronLeft.svg" class="arrow-right" alt="Right"></button>',
    });


    $('.drop-down').on('click', function() {
        $(this).find('.answer').toggleClass('active');
        $(this).find('img').toggleClass('flip');
    });

});
