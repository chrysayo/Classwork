$(document).ready(function() {

redrawDotNav();

/* Scroll event handler */
$(window).bind('scroll',function(e){
    parallaxScroll();
    redrawDotNav();
});

/* Next/prev and primary nav btn click handlers */
$('a.firstbox').click(function(){
    $('html, body').animate({
        scrollTop:0
    }, 1000, function() {
        parallaxScroll(); // Callback is required for iOS
    });
    return false;
});
$('a.secondbox').click(function(){
    $('html, body').animate({
        scrollTop:$('#secondbox').offset().top
    }, 1000, function() {
        parallaxScroll(); // Callback is required for iOS
    });
    return false;
});
$('a.thirdbox').click(function(){
    $('html, body').animate({
        scrollTop:$('#thirdbox').offset().top
    }, 1000, function() {
        parallaxScroll(); // Callback is required for iOS
    });
    return false;
});
$('a.fourthbox').click(function(){
    $('html, body').animate({
        scrollTop:$('#fourthbox').offset().top
    }, 1000, function() {
        parallaxScroll(); // Callback is required for iOS
    });
    return false;
});

/* Show/hide dot lav labels on hover */
$('nav#primary a').hover(
    function () {
        $(this).prev('h1').show();
    },
    function () {
        $(this).prev('h1').hide();
    }
);

});

/* Scroll the background layers */
function parallaxScroll(){
var scrolled = $(window).scrollTop();
$('#parallax-bg1').css('top',(0-(scrolled*.25))+'px');
$('#parallax-bg2').css('top',(0-(scrolled*.5))+'px');
$('#parallax-bg3').css('top',(0-(scrolled*.5))+'px');
}

/* Set navigation dots to an active state as the user scrolls */
function redrawDotNav(){
var section1Top =  0;
// The top of each section is offset by half the distance to the previous section.
var section2Top =  $('#secondbox').offset().top - (($('#thirdbox').offset().top - $('#secondbox').offset().top) / 2);
var section3Top =  $('#thirdbox').offset().top - (($('#fourthbox').offset().top - $('#thirdbox').offset().top) / 2);
var section4Top =  $('#fourthbox').offset().top - (($(document).height() - $('#fourthbox').offset().top) / 2);;
$('nav#primary a').removeClass('active');
if($(document).scrollTop() >= section1Top && $(document).scrollTop() < section2Top){
    $('nav#primary a.firstbox').addClass('active');
} else if ($(document).scrollTop() >= section2Top && $(document).scrollTop() < section3Top){
    $('nav#primary a.secondbox').addClass('active');
} else if ($(document).scrollTop() >= section3Top && $(document).scrollTop() < section4Top){
    $('nav#primary a.thirdbox').addClass('active');
} else if ($(document).scrollTop() >= section4Top){
    $('nav#primary a.fourthbox').addClass('active');
}

}