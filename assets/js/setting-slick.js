$('.main-banner__content').slick({
  infinite: true,
  autoplay: true,
  slidesToShow: 1,
  speed: 500,
  fade: true,
  cssEase: 'linear',
  slidesToScroll: 1,
  dots: false,
  arrows: true,
  responsive: [{
    breakpoint: 1200,
    settings: {
      slidesToShow: 1,
      slidesToScroll: 1,
      infinite: true,
      dots: false
    }
  },
  {
    breakpoint: 900,
    settings: {
      slidesToShow: 1,
      slidesToScroll: 1
    }
  },
  {
    breakpoint: 600,
    settings: {
      slidesToShow: 1,
      slidesToScroll: 1,
      dots: false,
      autoplay: true,
      arrows: false,
      autoplaySpeed: 1000
    }
  }
  ]
});

$('.main-client__content').slick({
  // infinite: true,
  slidesToShow: 4,
  slidesToScroll:1,
  dots: true,
  autoplay: true,
  arrows: false,
  responsive: [{
    breakpoint: 1200,
    settings: {
      slidesToShow: 3,
      slidesToScroll: 3,
      infinite: true,
      dots: true
    }
  },
  {
    breakpoint: 900,
    settings: {
      slidesToShow: 2,
      slidesToScroll: 2
    }
  },
  {
    breakpoint: 600,
    settings: {
      slidesToShow: 1,
      slidesToScroll: 1,
      dots: false,
      autoplay: true,
      autoplaySpeed: 1000
    }
  }
  ]
});


$('.main-client__content--portfolio').slick({
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 4,
  dots: false,
  arrows: true,
  autoplay: true,

  responsive: [{
    breakpoint: 1200,
    settings: {
      slidesToShow: 3,
      slidesToScroll: 3,
      infinite: true,
      dots: true
    }
  },
  {
    breakpoint: 900,
    settings: {
      slidesToShow: 2,
      slidesToScroll: 2
    }
  },
  {
    breakpoint: 600,
    settings: {
      slidesToShow: 1,
      slidesToScroll: 1,
      dots: false,
      autoplay: true,
      autoplaySpeed: 1000
    }
  }
  ]
});
/*$('.main-tech__content--portfolio').slick({
  infinite: true,
  slidesToShow: 4,
  slidesToScroll: 1,
  dots: false,
  arrows: false,
  autoplay: true,

  responsive: [{
    breakpoint: 1200,
    settings: {
      slidesToShow: 3,
      slidesToScroll: 3,
      infinite: true,
      dots: true
    }
  },
  {
    breakpoint: 900,
    settings: {
      slidesToShow: 2,
      slidesToScroll: 2
    }
  },
  {
    breakpoint: 600,
    settings: {
      slidesToShow: 1,
      slidesToScroll: 1,
      dots: false,
      autoplay: false,
      autoplaySpeed: 1000
    }
  }
  ]
});
*/
$('.main-timeline').slick({
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  dots: false,
  arrows: false,
  responsive: [{
    breakpoint: 1200,
    settings: {
      slidesToShow: 3,
      slidesToScroll: 3,
      infinite: true,
      dots: true
    }
  },
  {
    breakpoint: 900,
    settings: {
      slidesToShow: 2,
      slidesToScroll: 2
    }
  },
  {
    breakpoint: 600,
    settings: {
      slidesToShow: 1,
      slidesToScroll: 1,
      dots: true,
      arrows:false,
      autoplay:false,
      autoplaySpeed: 1000
    }
  }
  ]
});

// $('.main-client__content--portfolio').slick({
//   infinite: true,
//   slidesToShow: 5,
//   slidesToScroll: 4,
//   dots: true,
//   arrows: true,
//   responsive: [{
//       breakpoint: 1200,
//       settings: {
//         slidesToShow: 3,
//         slidesToScroll: 3,
//         infinite: true,
//         dots: true
//       }
//     },
//     {
//       breakpoint: 900,
//       settings: {
//         slidesToShow: 2,
//         slidesToScroll: 2
//       }
//     },
//     {
//       breakpoint: 600,
//       settings: {
//         slidesToShow: 1,
//         slidesToScroll: 1,
//         dots: false,
//         autoplay: true,
//         autoplaySpeed: 1000
//       }
//     }
//   ]
// });






$('.screen-slider__porfolio').slick({
  infinite: true,
  slidesToShow: 5,
  slidesToScroll: 1,
  dots: true,
  autoplay:true,
  arrows: true,
  responsive: [{
    breakpoint: 1200,
    settings: {
      slidesToShow: 2,
      slidesToScroll: 1,
      infinite: true,
      dots: true
    }
  },
  {
    breakpoint: 900,
    settings: {
      slidesToShow: 2,
      slidesToScroll: 2
    }
  },
  {
    breakpoint: 600,
    settings: {
      slidesToShow: 1,
      slidesToScroll: 1,
      dots: false,
      autoplay: true,
      autoplaySpeed: 1000
    }
  }
  ]
});

// para app web
$('.main-screen').slick({
//  infinite:true,
slidesToShow: 1,
slidesToScroll: 1,
dots: false,
fade: true,
cssEase: 'linear',
touchMove: true,
//  centerMode:false,
//  variableWidth: true,
focusOnSelect: true,
cssEase: 'linear',
touchMove: true,
autoplay:true,
arrows: false,
responsive: [{
  breakpoint: 1200,
  settings: {
    slidesToShow: 2,
    slidesToScroll: 1,
    infinite: true,
    dots: true
  }
},
{
  breakpoint: 900,
  settings: {
    slidesToShow: 2,
    slidesToScroll: 2
  }
},
{
  breakpoint: 600,
  settings: {
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: false,
    autoplay: false,
    autoplaySpeed: 1000
  }
}
]
});

// para app web laptop

$('.main-screen_macbook').slick({
//  infinite: false,
slidesToShow: 1,
slidesToScroll: 1,
dots: false,
//  centerMode:false,
//  variableWidth: true,
focusOnSelect: true,
cssEase: 'linear',
fade: true,
touchMove: true,
autoplay:true,
arrows: true,
responsive: [{
  breakpoint: 1200,
  settings: {
    slidesToShow: 2,
    slidesToScroll: 1,
    infinite: true,
    dots: true
  }
},
{
  breakpoint: 900,
  settings: {
    slidesToShow: 2,
    slidesToScroll: 2
  }
},
{
  breakpoint: 600,
  settings: {
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: false,
    autoplay: false,
    autoplaySpeed: 1000
  }
}
]
});


// para app mivo
$('.main-screen--movil').slick({
  //  infinite:true,
  slidesToShow: 1,
  slidesToScroll: 1,
  dots: false,

  touchMove: true,
  //  centerMode:false,
  variableWidth: true,
  focusOnSelect: true,
  
  touchMove: true,
  autoplay:false,
  arrows: false,
  responsive: [{
    breakpoint: 1200,
    settings: {
      slidesToShow: 2,
      slidesToScroll: 1,
      infinite: true,
      dots: true
    }
  },
  {
    breakpoint: 900,
    settings: {
      slidesToShow: 2,
      slidesToScroll: 2
    }
  },
  {
    breakpoint: 600,
    settings: {
      slidesToShow: 1,
      slidesToScroll: 1,
      dots: false,
      autoplay: false,
      autoplaySpeed: 1000
    }
  }
  ]
});



// $('.main-steps__content').slick({

//   responsive: [{

//       breakpoint: 900,
//       settings: {
//         slidesToShow: 2,
//         slidesToScroll: 1
//       }
//     },
//     {
//       breakpoint: 600,
//       settings: {
//         slidesToShow: 1,
//         slidesToScroll: 1,
//         dots: false,
//         autoplay: true,
//         arrows: false,
//         autoplaySpeed: 1000
//       }
//     }
//   ]
// });