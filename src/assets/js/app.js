import mixitup from 'mixitup';

window.onload = function(){
    
    $('.burger').on( 'click', function () {
        $('.rightside__menu').addClass('rightside__menu-active');
        $('.rightside__mask').css("display", "block")
    })

    $('.rightside__menu-close').on( 'click', function () {
        $('.rightside__menu').removeClass('rightside__menu-active');
        $('.rightside__mask').css("display", "none")
    })

    $('.intro__slider').slick({
        dots: true,
        arrows: false,
        fade: true,
        speed: 1000,
        autoplay: true,
        autoplaySpeed: 5000
    });

    $('.contact__slider').slick({
        dots: true,
        arrows: false,
        slidesToShow: 10,
        slidesToScroll: 10
    });

    $('.blog__item-slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
    });

    var mixitup = require('mixitup');

    var mixer = mixitup('.gallery__inner', {
        load: {
            filter: '.bedroom'
        }
    });
}
