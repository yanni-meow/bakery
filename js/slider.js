$(document).ready(function() { 
    $('.slider_left').slick({
        arrows: false,
        asNavFor: '.slider__text,.slider__nav',
    });
    $('.slider__text').slick({
        arrows: false,
        asNavFor: '.slider_left,.slider__nav',
    });
    $('.slider__nav').slick({
        arrows: true,
        asNavFor: '.slider__text,.slider_left',
        centerMode: true,
        centerPadding: '3.8rem',
        dots: true,
        focusOnSelect: true,
        slidesToShow: 3,
    });
});

// $(document).ready(function() { 
//     $('.breakfast__slider-box"').slick({
//         arrows: true,
// })}