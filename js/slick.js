
//thư viện slick slider 

$(document).ready(function(){
    $(".slick").slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true,
    speed: 800,
    autoplay: true,
    autoplaySpeed: 1000,
    responsive: [
      {
        breakpoint: 800,
        settings: {
          arrows: false,
        }
      },
    ],
    prevArrow:`<button type='button' class='slick-prev pull-left'><i class="fas fa-angle-left"></i></button>`,
    nextArrow:`<button type='button' class='slick-next pull-right'><i class="fas fa-angle-right"></i></button>`
    });
   
  });
  