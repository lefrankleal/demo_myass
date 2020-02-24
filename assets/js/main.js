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


//navbar
let activeOne = $('.navbar-nav').find('a.nav-link.active');

$(window).on('activate.bs.scrollspy', function (e, obj) {
  activeOne = $('.navbar-nav').find('a.nav-link.active');
});

$('a.nav-link').hover(function () {
  activeOne.removeClass('active')
  $(this).addClass('active')
}, function () {
  console.log('hover out')
  $(this).removeClass('active')
  activeOne.addClass('active')
})
// Full screen pre loader
// $(window).load(function () {
//   $("#pre-loader").delay(500).fadeOut(2000);
//   $(".preload-logo").addClass('zoomOutUp');
//   $(".loader").addClass('zoomOutDown');
// });

// let ubicationP = window.pageYOffset;
// window.onscroll = function(){
//   let ScrollA = window.pageYOffset;
//   if(ubicationP >= ScrollA){
//     document.getElementById('navbar').style.top = '0';
//   }
//   else{
//     document.getElementById('navbar').style.top = '-100px';
//   }
//   ubicationP = ScrollA;
// }
// card
let random = Math.floor(Math.random() * 3) + 1;
$('#card-'+random).addClass("active-about main-about__card-line ");

// Menú fixed
$(window).scroll(function () {
  if ($(document).scrollTop() > 70 && ($(window).width() >= 768)) {
    $('.navbar-fixed-js').addClass('fixed');
    $('.nav-link').addClass('fixed-color');
    //  $('.navbar-fixed-js').addClass('navbar-none');
    // $("#iso").addClass('img-size').attr('src', 'assets/img/iso.jpg').removeClass('scroll-up');
    $('.navbar').addClass('navbar-visible')
  } else {
    $('.navbar-fixed-js').removeClass('fixed');
    $("#iso").removeClass('img-size').attr('src', 'assets/img/iso-color.png').removeClass('scroll-up');
    $('.nav-link').removeClass('fixed-color');
    $('.navbar').removeClass('navbar-visible');
  }
});

$(".hamburger").on("click", function () {
  $(this).toggleClass("is-active");
});



( function( $ ) {
  const $document = $(document);
  
  const initTyped = (selector, options) => {
   let settings = options;
   if (!settings) {
    settings = {
     stringsElement: '#typed-content',
     typeSpeed: 60,
     backSpeed: 40,
     loop: true,
     showCursor: true
   };
 }

 let typed = new Typed(selector, settings);
}

$document.ready(() => {
  //  console.log('ready');

  initTyped('.js-typed');
});
})(jQuery);

