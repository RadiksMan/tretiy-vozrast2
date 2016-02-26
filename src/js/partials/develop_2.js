function googleMap(mapWrap){
    function initialize() {
        var myLatlng = new google.maps.LatLng(cordX,cordY);
        var myOptions = {
            zoom: 16,
            center: myLatlng,
            draggable: false,
            zoomControl: false,
            scrollwheel: false,
            disableDefaultUI: false, //без управляющих елементов
            mapTypeId: google.maps.MapTypeId.ROADMAP,
            zoomControlOptions: {
               position: google.maps.ControlPosition.LEFT_BOTTOM
            }
        }
        var map = new google.maps.Map(document.getElementById(mapWrap), myOptions);

        var contentString = '<div class="marker-test">'+googleText+'</div>';
        var infowindow = new google.maps.InfoWindow({
            content: contentString
        });

        var marker = new google.maps.Marker({
            position: myLatlng,
            map: map,
            title: 'Мы тут',
            optimized: false,
            visible: true,
            flat: true,
            icon: {
                path: google.maps.SymbolPath.CIRCLE,
                scale: 4,
                fillColor: '#fff',
                fillOpacity: 1,
                strokeColor: '#FF3232',
                strokeWeight: 10
            },
        });
        google.maps.event.addListener(marker, 'click', function() {
            infowindow.open(map,marker);
        });
    }
    initialize();
}

var map2 ;
var myLatlng;

function googleMap2(mapWrap){
     function initialize() {
        myLatlng = new google.maps.LatLng(cordX,cordY);
        var myOptions = {
            zoom: 16,
            center: myLatlng,
            draggable: true,
            zoomControl: false,
            scrollwheel: false,
            disableDefaultUI: false, //без управляющих елементов
            mapTypeId: google.maps.MapTypeId.ROADMAP,
            zoomControlOptions: {
               position: google.maps.ControlPosition.LEFT_BOTTOM
            }
        }
        map2 = new google.maps.Map(document.getElementById(mapWrap), myOptions);

        var contentString = '<div class="marker-test">'+googleText+'</div>';
        var infowindow = new google.maps.InfoWindow({
            content: contentString
        });

        var marker = new google.maps.Marker({
            position: myLatlng,
            map: map2,
            title: 'Мы тут',
            optimized: false,
            visible: true,
            flat: true,
            icon: {
                path: google.maps.SymbolPath.CIRCLE,
                scale: 4,
                fillColor: '#fff',
                fillOpacity: 1,
                strokeColor: '#FF3232',
                strokeWeight: 10
            },
        });
        google.maps.event.addListener(marker, 'click', function() {
            infowindow.open(map2,marker);
        });

        map2.set('styles', [
            {
              stylers: [
                { hue: "#ff0000" },
                { saturation: -100 }
              ]
            },{
              featureType: "road",
              elementType: "geometry",
              stylers: [
               { saturation: 0 },
                { invert_lightness: false }
              ]
            },{
              featureType: "road",
              elementType: "labels",
              stylers: [
                { visibility: "off" }
              ]
            }
        ]);

    }
    initialize();
}

$(document).ready(function(){
    if ($("#mapInit").length > 0){
        googleMap('mapInit');
    }
     if ($("#mapInit2").length > 0){
        googleMap2('mapInit2');

    }

    if ($("#mapInit2").length > 0){
        if ($(window).width() < 768) {
            if ($("#mapInit2").length > 0){
               map2.set('draggable', false);
            }
        }
        else{
            map2.set('draggable', true);
        }
    }
    if ($("#mapInit2").length > 0){
        if ($(window).width() >= 1024) {
            var myLatlng1 = new google.maps.LatLng(cordX,cordY-0.01);
            map2.set('center', myLatlng1);
        }

        if ($(window).width() < 1024) {
           var myLatlng1 = new google.maps.LatLng(cordX,cordY-0.008);
            map2.set('center', myLatlng1) ;
        }
        if ($(window).width() < 960) {
           var myLatlng1 = new google.maps.LatLng(cordX,cordY-0.006);
            map2.set('center', myLatlng1) ;
        }
        if ($(window).width() < 768) {
           var myLatlng1 = new google.maps.LatLng(cordX+0.0115,cordY);
            map2.set('center', myLatlng1) ;
        }
        if ($(window).width() < 480) {
           var myLatlng1 = new google.maps.LatLng(cordX-0.003,cordY);
            map2.set('center', myLatlng1) ;
        }
    }

});

$(window).load(function(){
$('.tab-1-small-list').slick({
       infinite: true,
       slidesToShow: 3,
       slidesToScroll: 1,
       dots: true,
       arrows: false,
       responsive: [
        {
            breakpoint: 940,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrows: true
                    //centerMode: true
                }
        },

        {
            breakpoint: 600,
                settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                arrows: false
                //centerMode: true
              }
        }

        ]

    })

    $('.tab-2-small-list').slick({
       infinite: true,
       slidesToShow: 3,
       slidesToScroll: 1,
       dots: true,
       arrows: false,
       responsive: [
        {
            breakpoint: 940,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrows: true,
                    centerMode: true
                }
        },

        {
            breakpoint: 600,
                settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                arrows: false,
                centerMode: true
              }
        }

        ]

    })

});

$(window).resize(function(){
    var sclWidth = $.scrollbarWidth();

    if (($(window).width() + sclWidth) < 960 ){
        $('#bgvid').css('display', 'none');
    }
    else{
        $('#bgvid').css('display', 'block');
    }

//    $('.tab-1-small-list').slick('unslick');
//    $('.tab-2-small-list').slick('unslick');
/*
    $('.tab-1-small-list').slick({
       infinite: true,
       slidesToShow: 3,
       slidesToScroll: 1,
       dots: true,
       arrows: false,
       responsive: [
            {
                breakpoint: 940,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrows: true,
                    centerMode: true
                },
                 breakpoint: 640,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        arrows: false,
                        centerMode: true
                }

            }
        ]

    })

    $('.tab-2-small-list').slick({
       infinite: true,
       slidesToShow: 3,
       slidesToScroll: 1,
       dots: true,
       arrows: false,
       responsive: [
            {
                breakpoint: 940,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrows: true,
                    centerMode: true
                },
                 breakpoint: 640,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        arrows: false,
                        centerMode: true
                }

            }
        ]

    })
*/

    if ($("#mapInit2").length > 0){
        if ($(window).width() < 768) {
            if ($("#mapInit2").length > 0){
               map2.set('draggable', false);
              // map2.set('center', false);
            }
        }
        else{
            map2.set('draggable', true);
        }
    }
    if ($("#mapInit2").length > 0){
        if ($(window).width() >= 1024) {
            var myLatlng1 = new google.maps.LatLng(cordX,cordY-0.01);
            map2.set('center', myLatlng1);
        }
        if ($(window).width() < 1024) {
           var myLatlng1 = new google.maps.LatLng(cordX,cordY-0.008);
            map2.set('center', myLatlng1) ;
        }
        if ($(window).width() < 960) {
           var myLatlng1 = new google.maps.LatLng(cordX,cordY-0.006);
            map2.set('center', myLatlng1) ;
        }
        if ($(window).width() < 768) {
           var myLatlng1 = new google.maps.LatLng(cordX+0.0115,cordY);
            map2.set('center', myLatlng1) ;
        }
        if ($(window).width() < 480) {
           var myLatlng1 = new google.maps.LatLng(cordX-0.003,cordY);
            map2.set('center', myLatlng1) ;
        }
    }
});

$(window).on('load', function () {
    var $preloader = $('#page-preloader'),
        $spinner   = $preloader.find('.spinner');
    $spinner.fadeOut();
    $preloader.delay(350).fadeOut('slow');
});

$.scrollbarWidth=function(){var a,b,c;if(c===undefined){a=$('<div style="width:50px;height:50px;overflow:auto"><div/></div>').appendTo('body');b=a.children();c=b.innerWidth()-b.height(99).innerWidth();a.remove()}return c};



$(document).ready(function(){
    var sclWidth = $.scrollbarWidth();

    if (($(window).width() + sclWidth) < 960 ){
        $('#bgvid').css('display', 'none');
    }
})