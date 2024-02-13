const swiper = new Swiper('.swiper', {
    speed: 2600,
    slidesPerView: 5,
    centeredSlides: true,
    loop: true,
    
    autoplay: {
      delay: 0,  
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      320: {
        slidesPerView: 2,
      },
      768: {
        slidesPerView: 3,
      },
      1024: {
        slidesPerView: 5,
      },
    },
  });

