$(window).on("scroll", function() {
    var bar = $("#skills .progress-bar"),
            barPos,	
            windowBtm = $(window).scrollTop() + $(window).height();
    bar.each(function () {
        barPos = $(this).offset().top;
        if(barPos <= windowBtm - 50) {
            $(this).css("width", function() {
                return $(this).attr("data-width");
            });
            $(this).children(".percent").css({
                '-webkit-transform': 'scale(1)',
                '-moz-transform': 'scale(1)',
                '-ms-transform': 'scale(1)',
                '-o-transform': 'scale(1)',
                'transform': 'scale(1)'
            });
        }
    });
});

$(document).on('click', 'a[href^="#"]', function (event) {
    event.preventDefault();

    $('html, body').animate({
        scrollTop: $($.attr(this, 'href')).offset().top -1000
    }, 500);
});