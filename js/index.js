$(function () {
    $(".dimmed").css("display", "none")
    $('.mobile-header-menu').click(function () {
        $('.mobile-bugger-menu-wrap').addClass('on');
        $(".dimmed").css("display", "block")
    })
})

$(document).ready(function () {
    $('.dimmed').click(function () {
        if($(".dimmed").css("display", "block")){
            $('.mobile-bugger-menu-wrap').removeClass('on');
            $(".dimmed").css("display", "none")
        }
    })
})

$('.icon-left-arrow').click(function () {
    $(this).parent().next('.mobile-menu-item').stop().slideToggle();
    var target = $(this).parent().next().addClass('active');
    $(target).slideToggle(500);
})

$('.icon-left-arrow').click(function () {
    $(this).parent().next('.mobile-menu-item').stop().slideToggle();
    $(this).toggleClass('down-icon');
})

