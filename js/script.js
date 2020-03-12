$(document).ready(function () {

    setTimeout(function () {
        $('.preloaderParent').fadeOut();
    }, 5500);
    $('.selectColor').on('click', function () {
        $('.Colors').slideToggle();
    });

    $('.red').on('click', function () {
        $('.changeBgColor').css({
            'backgroundColor': '#ba1e1e'
        });
        $('.changeFontColor').css({
            'color': '#ba1e1e'
        });
        $('nav.navbar-light , .copyRight').css({
            'backgroundColor': '#452727'
        });
    });

    /*green*/
    $('.green').on('click', function () {
        $('.changeBgColor').css({
            'backgroundColor': 'green'
        });
        $('.changeFontColor').css({
            'color': 'green'
        });
        $('nav.navbar-light , .copyRight').css({
            'backgroundColor': '#113411'
        });
    });
    /*orange*/
    $('.orange').on('click', function () {
        $('.changeBgColor').css({
            'backgroundColor': 'orange'
        });
        $('.changeFontColor').css({
            'color': 'orange'
        });
        $('nav.navbar-light , .copyRight').css({
            'backgroundColor': '#3f311a'
        });
    });
    /*purple*/
    $('.purple').on('click', function () {
        $('.changeBgColor').css({
            'backgroundColor': 'purple'
        });
        $('.changeFontColor').css({
            'color': 'purple'
        });
        $('nav.navbar-light , .copyRight').css({
            'backgroundColor': '#321532'
        });
    });



});