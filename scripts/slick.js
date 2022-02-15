$(document).ready(function () {
  $(".carousel").slick({
      mobileFirst: true,
      arrows: false,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 3200,
      responsive: [
          {
              breakpoint: 374,
              settings: {
                  arrows: true,
                  prevArrow:
                      '<button type="button" class="slide-arrow slick-prev"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M460,256a10,10,0,0,0-5-8.65h0l-78.81-45.5a10,10,0,0,0-10,17.32L415.68,246H66a10,10,0,0,0,0,20H415.68l-49.49,26.84a10,10,0,1,0,10,17.32L455,264.66h0A10,10,0,0,0,460,256Z"></path></svg></button>',
                  nextArrow:
                      '<button type="button" class="slide-arrow slick-next"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M460,256a10,10,0,0,0-5-8.65h0l-78.81-45.5a10,10,0,0,0-10,17.32L415.68,246H66a10,10,0,0,0,0,20H415.68l-49.49,26.84a10,10,0,1,0,10,17.32L455,264.66h0A10,10,0,0,0,460,256Z"></path></svg></button>',
              },
          },
      ],
  });
});
