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
