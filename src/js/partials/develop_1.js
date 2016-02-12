
function tabs(buttons, content){

    $(buttons).click(function(){

        index = $(this).data('tabs');
        $(buttons).removeClass('active');
        $(this).addClass('active');

        $(content).removeClass('active');
        $(content+'[data-tabs='+index+']').addClass('active');

    });

}

$(document).ready(function(){

    tabs('.club-tabs-button-item', '.club-tabs-content');

});

$(window).load(function(){

});

$(window).resize(function(){

});