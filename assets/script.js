// $(document).ready(function(){ $('.test').slick({ dots: true, arrows: true, infinite: true, slidesToShow: 1, slidesToScroll: 1 }); });


$(document).ready(function(){
  $(".photoGallery").slick({
    centerMode: true,
    centerPadding: '0px',
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: '<b><i class="fas fa-forward"></i></b>',
    prevArrow:'<b><i class="fas fa-backward"></i></b>',
    responsive: [
      {
        breakpoint: 1024,
        settings: {
        centerMode: false,
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: false
        }
      },
      {
        breakpoint: 600,
        settings: {
        centerMode: false,
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          centerMode: false,
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]}
);

})

