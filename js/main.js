;ymaps.ready(init);
var myMap,
    bakeryPlacemark;

function init(){
    myMap = new ymaps.Map("map", {
        center: [55.76, 37.64],
        zoom: 15
    });

    bakeryPlacemark = new ymaps.Placemark([55.76, 37.64], {
        hintContent: 'Bakery!',
        balloonContent: 'Пекарня Bakery'
    });

    myMap.geoObjects.add(bakeryPlacemark);
    myMap.behaviors.disable('scrollZoom');
}

$(function(){

    var descAnimate = $('.main-header__description .animate');
    descAnimate.addClass(descAnimate.data('animate'));

    $(window).scroll(function() {

        $('.animate').each(function(){
            var blockPos = $(this).offset().top,
                topOfWindow = $(window).scrollTop();

            if (blockPos < topOfWindow + 800) {
                $(this).addClass($(this).data('animate'));
            }

        });
    });

    $('.nav a[href^="#"]').click( function(e){

        e.preventDefault();

        var href = $(this).attr('href');

        $(".nav a").removeClass("active");
        $(this).addClass('active');

        if (href.length != 0) {
            $('html, body').animate({ scrollTop: $(href).offset().top }, 800);
        }

    });

    baguetteBox.run('.gallery');

});