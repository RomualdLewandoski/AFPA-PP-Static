
$(function () {

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
    var theme = localStorage.getItem("theme");
    if (theme!= null){
        link.attr("href", theme);
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
        localStorage.setItem("theme", link.attr("href"));
    });
});

