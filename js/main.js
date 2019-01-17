(function ($) {
    "use strict";
    $(document).ready(function () {
        //pre-loader
        $('#ud_dots').delay(750).fadeOut(300, function () {
            $('#ud_bg_left').animate({
                left: '-50%'
            }, 300);
            $('#ud_bg_right').animate({
                right: '-50%'
            }, 300, function () {
                $('#ud_preloader').fadeOut(10);
            });
        });
        //navbar  background  change
        $(window).on("scroll", function () {
            var scroll = $(window).scrollTop();
            if (scroll > 650) {
                $(".navbar-default").css("background", "#222629");
            }
            else {
                $(".navbar-default").css("background", "transparent");
            }
            if ($(this).scrollTop() > 100) {
                $('.scrollup').fadeIn();
            }
            else {
                $('.scrollup').fadeOut();
            }
        });
        //navbar scroll menu click 
        $('.nav li a').on("click", function () {
            if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
                var $target = $(this.hash);
                $target = $target.length && $target || $('[name=' + this.hash.slice(1) + ']');
                if ($target.length) {
                    var targetOffset = $target.offset().top;
                    $('html,body').animate({
                        scrollTop: targetOffset
                    }, 1000);
                    return false;
                }
            }
        });
        //scroll Top
        $('.scrollup').on("click", function () {
            $("html, body").animate({
                scrollTop: 0
            }, 600);
            return false;
        });
        //side scroll
        $("body").niceScroll();
    });
    //google map
    $(function myMap() {
        var mapProp = {
            center: new google.maps.LatLng(51.508742, -0.120850)
            , zoom: 5
        , };
        var map = new google.maps.Map(document.getElementById("googleMap"), mapProp);
    });
})(jQuery);