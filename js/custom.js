(function ($) {
  "use strict";

  var review = $('.player_info_item');
  if (review.length) {
    review.owlCarousel({
      items: 1,
      loop: true,
      dots: false,
      autoplay: true,
      margin: 40,
      autoplayHoverPause: true,
      autoplayTimeout: 5000,
      nav: true,
      navText: [
        '<img src="img/icon/left.svg" alt="">',
        '<img src="img/icon/right.svg" alt="">'

      ],
      responsive: {
        0: {
          margin: 15,
        },
        600: {
          margin: 10,
        },
        1000: {
          margin: 10,
        }
      }
    });
  }
  $('.popup-youtube, .popup-vimeo').magnificPopup({
    type: 'iframe',
    mainClass: 'mfp-fade',
    removalDelay: 160,
    preloader: false,
    fixedContentPos: false
  });



  var review = $('.textimonial_iner');
  if (review.length) {
    review.owlCarousel({
      items: 1,
      loop: true,
      dots: true,
      autoplay: true,
      autoplayHoverPause: true,
      autoplayTimeout: 5000,
      nav: false,
      responsive: {
        0: {
          margin: 15,
        },
        600: {
          margin: 10,
        },
        1000: {
          margin: 10,
        }
      }
    });
  }
  $(document).ready(function() {
    $('select').niceSelect();
  });

  $(window).scroll(function () {
    var window_top = $(window).scrollTop() + 1;
    if (window_top > 50) {
      $('.navbar_main_menu').addClass('menu_fixed animated fadeInDown');
    } else {
      $('.navbar_main_menu').removeClass('menu_fixed animated fadeInDown');
    }
  });

  $(document).ready(function(){
    $(".counter").counterUp({
        delay: 0.8,
        time: 60
    });
});

  $('.slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    speed: 300,
    infinite: true,
    asNavFor: '.slider-nav-thumbnails',
    autoplay:true,
    pauseOnFocus: true,
    dots: true,
  });
 
  $('.slider-nav-thumbnails').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    asNavFor: '.slider',
    focusOnSelect: true,
    infinite: true,
    prevArrow: false,
    nextArrow: false,
    centerMode: true,
    responsive: [
      {
        breakpoint: 480,
        settings: {
          centerMode: false,
        }
      }
    ]
  });
 
  $('.slider-nav-thumbnails .slick-slide').removeClass('slick-active');
  $('.slider-nav-thumbnails .slick-slide').eq(0).addClass('slick-active');
  $('.slider').on('beforeChange', function (event, slick, currentSlide, nextSlide) {
    var mySlideNumber = nextSlide;
    $('.slider-nav-thumbnails .slick-slide').removeClass('slick-active');
    $('.slider-nav-thumbnails .slick-slide').eq(mySlideNumber).addClass('slick-active');
 });
   
 $('.slider').on('afterChange', function(event, slick, currentSlide){   
   $('.content').hide();
   $('.content[data-id=' + (currentSlide + 1) + ']').show();
 }); 

 $('.gallery_img').magnificPopup({
  type: 'image',
  gallery:{
    enabled:true
  }
});

}(jQuery));

function toggle(bnum) {
  var x=0;

      if (bnum == 1) {
        x=1;
        var display = document.getElementById('faq-paragraf1');
        display.classList.toggle('active');
        $('.title_blog').removeClass('title_blog');
    }

    if (bnum == 2) {
      x=2;
      var display = document.getElementById('faq-paragraf2');
      display.classList.toggle('active'); 
  }

    if (bnum == 3) {
      x=3;
      var display = document.getElementById('faq-paragraf3');
      display.classList.toggle('active'); 
  }

    if (bnum == 4) {
      x=4;
      var display = document.getElementById('faq-paragraf4');
      display.classList.toggle('active'); 
  }

    if (bnum == 5) {
      x=5;
      var display = document.getElementById('faq-paragraf5');
      display.classList.toggle('active'); 
  }

    if (bnum == 6) {
      x=6;
      var display = document.getElementById('faq-paragraf6');
      display.classList.toggle('active'); 
  }

    if (bnum == 7) {
      x=7;
      var display = document.getElementById('faq-paragraf7');
      display.classList.toggle('active'); 
  }

    if (bnum == 8) {
      x=8;
      var display = document.getElementById('faq-paragraf8');
      display.classList.toggle('active'); 
  }

    if (bnum == 9) {
      x=9;
      var display = document.getElementById('faq-paragraf9');
      display.classList.toggle('active'); 
  }

    if (bnum == 10) {
      x=10;
      var display = document.getElementById('faq-paragraf10');
      display.classList.toggle('active'); 
  }

    if (bnum == 11) {
      x=11;
      var display = document.getElementById('faq-paragraf11');
      display.classList.toggle('active'); 
  }

    if (bnum == 12) {
      x=12;
      var display = document.getElementById('faq-paragraf12');
      display.classList.toggle('active'); 
  }

    if (bnum == 13) {
      x=13;
      var display = document.getElementById('faq-paragraf13');
      display.classList.toggle('active'); 
  }

    if (bnum == 14) {
      x=14;
      var display = document.getElementById('faq-paragraf14');
      display.classList.toggle('active'); 
  }

    if (bnum == 15) {
      x=15;
      var display = document.getElementById('faq-paragraf15');
      display.classList.toggle('active'); 
  }
  
    if (bnum == 16) {
      x=16;
      var display = document.getElementById('faq-paragraf16');
      display.classList.toggle('active'); 
  }

    if (bnum == 17) {
      x=17;
      var display = document.getElementById('faq-paragraf17');
      display.classList.toggle('active'); 
  }

    if (bnum == 18) {
      x=18;
      var display = document.getElementById('blog_pages_area');
      display.classList.toggle('active'); 
  }

    if (bnum == 19) {
      x=19;
      var display = document.getElementById('blog_pages_area2');
      display.classList.toggle('active'); 
  }

    if (bnum == 20) {
      x=20;
      var display = document.getElementById('blog_pages_area3');
      display.classList.toggle('active'); 
  }
  
    if (bnum == 21) {
      x=21;
      var display = document.getElementById('blog_pages_area4');
      display.classList.toggle('active'); 
  }

    if (bnum == 22) {
      x=22;
      var display = document.getElementById('blog_pages_area5');
      display.classList.toggle('active'); 
  }
}