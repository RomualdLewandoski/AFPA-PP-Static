$(function () {
    /**
     * Smooth scrolling to page anchor on click
     **/
    $("a[href*='#']:not([href='#'])").click(function () {

        if (
            location.hostname == this.hostname
            && this.pathname.replace(/^\//, "") == location.pathname.replace(/^\//, "")
        ) {
            event.preventDefault()
            var anchor = $(this.hash);
            anchor = anchor.length ? anchor : $("[name=" + this.hash.slice(1) + "]");
            if (anchor.length) {
                $("html, body").animate({scrollTop: anchor.offset().top}, 1500);
            }
        }


    });

    function scrollTo(target) {
        if (target.length) {
            $("html, body").stop().animate({scrollTop: target.offset().top}, 1500);
        }
    }

});

$(document).ready(function () {

    $('.items').slick({
        dots: true,
        infinite: true,
        speed: 800,
        autoplay: true,
        autoplaySpeed: 2000,
        slidesToShow: 4,
        slidesToScroll: 4,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }

        ]
    });
});

$('.Count').each(function () {
    var $this = $(this);
    jQuery({Counter: 0}).animate({Counter: $this.text()}, {
        duration: 3000,
        easing: 'swing',
        step: function () {
            $this.text(Math.ceil(this.Counter));
        }
    });
});


$(document).ready(function () {
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('#scroll').fadeIn();
        } else {
            $('#scroll').fadeOut();
        }
    });
    $('#scroll').click(function () {
        $("html, body").animate({scrollTop: 0}, 600);
        return false;
    });
});

$(document).ready(function () {
    var link = $("link.theme");
    if ($.cookie("css")) {
        link.attr("href", $.cookie("css"));
    }
    $('#btn-theme').click(function () {
        event.preventDefault();
        var themed = link.attr("href");
        var light = "/assets/css/light.css";
        var black = "/assets/css/dark.css"
        if (themed == light) {
            link.attr("href", black);

        } else {
            link.attr("href", light);
        }
        $.cookie("css", link.attr('href'), {expires: 365, path: '/'});
    });
});

