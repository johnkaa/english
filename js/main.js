$(function() {
    $('.teachers__slider').slick({
        arrows: false,
        infinite: false,
        speed: 300,
        slidesToShow: 4,
        slidesToScroll: 3,
        responsive: [
    {
      breakpoint: 800,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
      }
    },
    {
        breakpoint: 430,
        settings: {
            slidesToShow: 1,
            slidesToScroll: 1
        }
    },
    ]
    });
    $('.reviews__slider').slick({
        slidesToShow: 1,
        prevArrow: '<button type="button" class="slick-btn slick-prev"><img src="images/arrow-left.png" alt=""></button>',
        nextArrow: '<button type="button" class="slick-btn slick-next"><img src="images/arrow-right.png"></button>'
    });
    $('.menu__btn').on('click', function(){
        $('.menu').toggleClass('menu--active');
    }); 
});