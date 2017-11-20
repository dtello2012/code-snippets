//this function runs every time you are scrolling

$(window).scroll(function() {
    var top_of_element = $("#element").offset().top;
    var bottom_of_element = $("#element").offset().top + $("#element").outerHeight();
    var bottom_of_screen = $(window).scrollTop() + window.innerHeight;
    var top_of_screen = $(window).scrollTop();

    if((bottom_of_screen > top_of_element) && (top_of_screen < bottom_of_element)){
        // The element is visible, do something
    }
    else {
        // The element is not visible, do something else
    }
});

/*
Another option 

Include this somewhere after jQuery is included:
$.fn.isInViewport = function() {
    var elementTop = $(this).offset().top;
    var elementBottom = elementTop + $(this).outerHeight();

    var viewportTop = $(window).scrollTop();
    var viewportBottom = viewportTop + $(window).height();

    return elementBottom > viewportTop && elementTop < viewportBottom;
};

Sample usage:
$(window).on('resize scroll', function() {
    if ($('#Something').isInViewport()) {
        // do something
    } else {
        // do something else
    }
});

*/
