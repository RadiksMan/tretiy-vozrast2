$(document).ready(function(){
    $(".fancybox").fancybox({
        openEffect  : 'none',
        closeEffect : 'none'
    });
    $('.item-slider').slick({
       infinite: false,
       slidesToShow: 3,
       slidesToScroll: 3,
       dots: true,
       responsive: [
            {
                breakpoint: 961,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,


                }
            },
            {
                breakpoint: 641,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1


                }
            }
        ]
    });
     $('.same').slick({
       infinite: true,
       slidesToShow: 3,
       slidesToScroll: 3,
       dots: true,
       responsive: [
            {
                breakpoint: 641,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });
    $('.big-slider').slick({
        infinite: true,
        dots: true,
        slidesToShow: 1,
        autoplay: true,
        autoplaySpeed: 8000,
        speed: 500

    });
    $('.our-team-slids').slick({
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 3,
      dots: true,
      responsive: [
          {
              breakpoint: 641,
              settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1
              }
          }
      ]
    });
});

$(window).load(function(){

});

$(window).resize(function(){

});