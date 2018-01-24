$(document).ready(function() {
    $(".fanhui").click(function() {
        if (scroll == "off") return; //如果（滚动= =“关闭”)返回
        $('html,body').animate({ scrollTop: 0 }, 600);
    });
    $(window).scroll(function() {
        var htmlTop = $(document).scrollTop();
        // if (htmlTop > 0) {
        //     $(".fanhui").fadeIn();
        // } else {
        //     $(".fanhui").fadeOut();
        // }
    });

    var swiper = new Swiper('.banner .swiper-container', {
        speed: 800,
        loop: true,
        autoplay: 5000,
        autoplayDisableOnInteraction: false,
        pagination: '.banner .swiper-pagination',
        paginationClickable: true,
    });
    var swiper = new Swiper('.pa4con .swiper-container', {
        speed: 800,
        loop: true,
        autoplay: 5000,
        autoplayDisableOnInteraction: false,
        prevButton: '.pa4con .swiper-button-prev',
        nextButton: '.pa4con .swiper-button-next',
    });
    var swiper = new Swiper('.pa6con .swiper-container', {
        speed: 800,
        loop: false,
        autoplay: 5000,
        slidesPerView: 3,
        autoplayDisableOnInteraction: false,
        prevButton: '.pa6con .swiper-button-prev',
        nextButton: '.pa6con .swiper-button-next',
    });


    $('.naver li:last').css('margin-right', '0');
    $('.fottop li:last').css('border-right', 'none');
    $('.hnxl .hnxlbox li:last a').css('border-bottom', 'none');


});