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

var showActive = true



function changeActive(){
  
  showActive=false
}
setInterval(() => {
  $('#card-1').removeClass('active-about main-about__card-line circle-active')
  $('#card-2').removeClass('active-about main-about__card-line circle-active')
  $('#card-3').removeClass('active-about main-about__card-line circle-active')
  let random = Math.floor(Math.random() * 3) + 1;
  $('#card-' + random).addClass("active-about main-about__card-line circle-active ")
  if(showActive==true){

  }
}, 3000)

// active timeline

// setInterval(() => {
//   $('#time-1').removeClass('active-time')
//   $('#time-2').removeClass('active-time')
//   $('#time-3').removeClass('active-time')
//   $('#time-4').removeClass('active-time')
//   $('#time-5').removeClass('active-time')
//   let random = Math.floor(Math.random() * 6) + 1;
//   $('#time-' + random).addClass("active-time ")
//   if(showActive==true){

//   }
// }, 2000)


// active logos clientes
setInterval(() => {
  $('#logo-1').removeClass('active-logo')
  $('#logo-2').removeClass('active-logo')
  $('#logo-3').removeClass('active-logo')
  $('#logo-4').removeClass('active-logo')
  $('#logo-5').removeClass('active-logo')
  let random = Math.floor(Math.random() * 5) + 1;
  $('#logo-' + random).addClass("active-logo ")
  if(showActive==true){

  }
}, 2000)


// fade in






//wow animation by using with animate css
var isiPad = (navigator.userAgent.match(/iPad/i) != null);
if (($.browser.mobile) || (isiPad)) {
  // disable animation on mobile
  $("body").removeClass("wow");
} else {
  var wow = new WOW({
    boxClass: 'wow',
    animateClass: 'animated',
    offset: 0,
    mobile: true
  });
  wow.init();
}





//Function to animate slider captions 
function doAnimations(elems) {
  //Cache the animationend event in a variable
  var animEndEv = 'webkitAnimationEnd animationend';

  elems.each(function () {
    var $this = $(this),
      $animationType = $this.data('animation');
    $this.addClass($animationType).one(animEndEv, function () {
      $this.removeClass($animationType);
    });
  });
}

//Variables on page load 
var $myCarousel = $('.caption-slider'),
  $firstAnimatingElems = $myCarousel.find('.item:first').find("[data-animation ^= 'animated']");

//Initialize carousel 
$myCarousel.carousel();

//Animate captions in first slide on page load 
doAnimations($firstAnimatingElems);

//Pause carousel  
$myCarousel.carousel('pause');


//Other slides to be animated on carousel slide event 
$myCarousel.on('slide.bs.carousel', function (e) {
  var $animatingElems = $(e.relatedTarget).find("[data-animation ^= 'animated']");
  doAnimations($animatingElems);
});




var tabChange = function () {
  var tabs = $('.circle-container > li');
  var active = tabs.filter('.active');
  var next = active.next('li').length ? active.next('li').find('a') : tabs.filter(':first-child').find('a');

  next.tab('show')
}
var tabCycle = setInterval(tabChange, 100000)
$(function () {
  $('.circle-container a').click(function (e) {
    e.preventDefault();
    clearInterval(tabCycle);
    $(this).tab('show')
    setTimeout(function () {
      tabCycle = setInterval(tabChange, 100000)
    }, 100000);
  });
});


// $(function () {
//   $('.modal').click(function () {
//     $(".main-cafe_grid").removeClass("main-cafe__img-none");
//   });
  
//   $('#modal-none').click(function () {
//     $(".main-cafe_grid").addClass("main-cafe__img-none");
//   });
 
// });

/**Responsive**/

if ($(window).width() < 767) {
  $(".circle-container").addClass("circle-responsive");
  $(".circle-pannel").addClass("circle-pannel-responsive");
}




// Full screen pre loader
$(window).load(function () {
  $("#pre-loader").delay(500).fadeOut(2000);
  $(".preload-logo").addClass('zoomOutUp');
  $(".loader").addClass('zoomOutDown');
});


//Logo fadeIn fadeOut on 
$(window).scroll(function () {
  if ($(this).scrollTop() > $(window).height() / 2.2) $('.logo-wrapper').fadeOut('slow');
  if ($(this).scrollTop() < $(window).height() / 2.2) $('.logo-wrapper').fadeIn('slow');
});

$('button').click(function () {
  elements.addClass('active');
});

$('.close-modal').click(function () {
  elements.removeClass('active');
});


  //******************************nav active***************************************//
// Cache selectors
var lastId,
topMenu = $("#mainNav"),
topMenuHeight = topMenu.outerHeight()+1,
 // All list items
 menuItems = topMenu.find("a"),
 // Anchors corresponding to menu items
 scrollItems = menuItems.map(function(){
   var item = $($(this).attr("href"));
   if (item.length) { return item; }
 });

// Bind click handler to menu items
// so we can get a fancy scroll animation
menuItems.click(function(e){
  var href = $(this).attr("href"),
  offsetTop = href === "#" ? 0 : $(href).offset().top-topMenuHeight+1;
  $('html, body').stop().animate({ 
    scrollTop: offsetTop
  }, 850);
  e.preventDefault();
});

// Bind to scroll
$(window).scroll(function(){
   // Get container scroll position
   var fromTop = $(this).scrollTop()+topMenuHeight;
   
   // Get id of current scroll item
   var cur = scrollItems.map(function(){
     if ($(this).offset().top < fromTop)
       return this;
   });
   // Get the id of the current element
   cur = cur[cur.length-1];
   var id = cur && cur.length ? cur[0].id : "";
   
   if (lastId !== id) {
     lastId = id;
       // Set/remove active class
       menuItems
       .parent().removeClass("active-nav")
       .end().filter("[href=#"+id+"]").parent().addClass("active-nav");
     }                   
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


//******************************nav active***************************************//








