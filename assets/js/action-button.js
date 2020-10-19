// Action Button Efects 
$(function(){
        $('.action-button').hide();
        
      });

var offset = 200;
var duration = 500;
$(window).scroll(function () {
        if ($(this).scrollTop() > offset) {
                $('.action-button').fadeIn(400);
        } else {
                $('.action-button').fadeOut(400);
        }
});


// Action Button link builder helper 
var dir = window.document.URL;
var dir2 = encodeURIComponent(dir);
var tit = window.document.title;
var tit2 = encodeURIComponent(tit);

