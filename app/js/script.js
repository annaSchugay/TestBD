/**
 * Created by Anna on 30.03.2018.
 */

$(document).ready(function() {
  $(window).resize(function(){
    var windowWidth = $(window).width();
    if(windowWidth <= 758) {
      $('.about-us').slick({
        dots: true,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 3000,
        prevArrow: false,
        nextArrow: false
      });
    }
  });
});