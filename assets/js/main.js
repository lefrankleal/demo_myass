/*
Title: Main Scripts
Theme Name: Myass
Author Name: Yively Alvarez
Website: http://myass.co/
*/

$(function () {
  'use strict'

  $('[data-toggle="offcanvas"]').on('click', function () {
    $('.offcanvas-collapse').toggleClass('open')
  })
})


// Full screen pre loader
// $(window).load(function () {
//   $("#pre-loader").delay(500).fadeOut(2000);
//   $(".preload-logo").addClass('zoomOutUp');
//   $(".loader").addClass('zoomOutDown');
// });

let ubicationP = window.pageYOffset;
window.onscroll = function(){
  let ScrollA = window.pageYOffset;
  if(ubicationP >= ScrollA){
    document.getElementById('navbar').style.top = '0';
  }
  else{
    document.getElementById('navbar').style.top = '-100px';
  }
  ubicationP = ScrollA;
}



// Menú fixed
$(window).scroll(function () {
  if ($(document).scrollTop() > 70 && ($(window).width() >= 768)) {
    $('.navbar-fixed-js').addClass('fixed');
    //  $('.navbar-fixed-js').addClass('navbar-none');
    // $("#iso").addClass('img-size').attr('src', 'assets/img/iso.jpg').removeClass('scroll-up');

  } else {
    $('.navbar-fixed-js').removeClass('fixed');
    $("#iso").removeClass('img-size').attr('src', 'assets/img/iso-color.png').removeClass('scroll-up');
    // $('.navbar-fixed-js').addClass('navbar-visi');
   
  }
});

$(".hamburger").on("click", function () {
  $(this).toggleClass("is-active");
});

