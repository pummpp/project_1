$(document).ready(function () {

    $('.single-item').slick({
        // dots: true,
        infinite: true,
        speed: 2000,
        slidesToShow: 1,
        centerMode: true,
        variableWidth: true,
        autoplay: true,
        autoplaySpeed: 2000
    });


    /* 네비 */


    $('.nav_b_1').click(function(){
        $('.nav_in_1').stop().slideToggle()
    });

    $('.nav_b_1').hover(function(){
        $(this).css({'color':'#FF7777'});
    },function(){
        $(this).css({'color':'#000'});
    });

    $('.nav_b_2').click(function(){
        $('.nav_in_2').stop().slideToggle()
    });

    $('.nav_b_2').hover(function(){
        $(this).css({'color':'#FF7777'});
    },function(){
        $(this).css({'color':'#000'});
    });

    $('.nav_b_3').click(function(){
        $('.nav_in_3').stop().slideToggle()
    });

    $('.nav_b_3').hover(function(){
        $(this).css({'color':'#FF7777'});
    },function(){
        $(this).css({'color':'#000'});
    });

    $('.nav_b_4').click(function(){
        $('.nav_in_4').stop().slideToggle()
    });

    $('.nav_b_4').hover(function(){
        $(this).css({'color':'#FF7777'});
    },function(){
        $(this).css({'color':'#000'});
    });

    $('.nav_b_5').click(function(){
        $('.nav_in_5').stop().slideToggle()
    });

    $('.nav_b_5').hover(function(){
        $(this).css({'color':'#FF7777'});
    },function(){
        $(this).css({'color':'#000'});
    });

    $('.nav_b_6').click(function(){
        $('.nav_in_6').stop().slideToggle()
    });

    $('.nav_b_6').hover(function(){
        $(this).css({'color':'#FF7777'});
    },function(){
        $(this).css({'color':'#000'});
    });
});
