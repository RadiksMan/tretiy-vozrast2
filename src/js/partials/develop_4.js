$.scrollbarWidth=function(){var a,b,c;if(c===undefined){a=$('<div style="width:50px;height:50px;overflow:auto"><div/></div>').appendTo('body');b=a.children();c=b.innerWidth()-b.height(99).innerWidth();a.remove()}return c};

function headeButer(){

    $('.mobile-menu').click(function(event) {
        if($(window).width()<=1024-$.scrollbarWidth()){
            $(this).toggleClass('active');
            $('.nav').stop().slideToggle();
        }
    });


    $(document).on('click touchstart',function (event){
        if($(window).width()<=1024-$.scrollbarWidth()){
            var div = $('.nav');
            if (!div.is(event.target) && div.has(event.target).length === 0 && !$('.mobile-menu').is(event.target) && $('.mobile-menu').has(event.target).length === 0)
                {
                    $('.nav').slideUp();
                }
        }
    });

}

function worksHeight(item){
    if($(window).width()>1024-$.scrollbarWidth()){
        $('.mlm-row.row-2').removeAttr('style').removeClass('overflow');
        $('.mlm-row.row-2').removeAttr('style');
        $('.mlm-height-normal').removeAttr('style');

        var device = 1;
        item.each(function() {
            var coef = ($(this).data('height-normal'))*device;
            var width = $(this).width();
            $(this).height(parseFloat(coef*width));
        });
    }
    if($(window).width()>1024-$.scrollbarWidth() && $(window).width()<1366-$.scrollbarWidth()){
        $('.mlm-row.row-2').height($('.mlm-row.row-1').height());
        $('.mlm-row.row-2').addClass('overflow');
    }
    if($(window).width()<1024-$.scrollbarWidth()){
        $('.mlm-row.row-2').removeAttr('style').removeClass('overflow');
        $('.mlm-row.row-2').removeAttr('style');
        $('.mlm-height-normal').removeAttr('style');
    }
}

function mainLikeMassonryFansy(){
    $('.mlm-item-masonry').fancybox();
}

function headerMenuMobile(){

    $('.mobile-arrow').click(function(){

        if($(window).width()<=1024){
            var parent = $(this).parents('li');
            $(this).toggleClass('active');
            parent.find('ul').stop().slideToggle(300);
        }

    });

    $(window).resize(function () {
        if($(window).width()>1024){
            $('header li ul').removeAttr('style');
        }
    });

}

$(document).ready(function(){
    mainLikeMassonryFansy();
    headeButer();
    worksHeight($('.mlm-height-normal'));
    headerMenuMobile();
});

$(window).load(function(){

});

$(window).resize(function(){
    worksHeight($('.mlm-height-normal'));



    /*header fix*/
    if($(window).width()>1024){
        $('.nav').removeAttr('style');
    }

});


