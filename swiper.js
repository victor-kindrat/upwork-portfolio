const swiper = new Swiper('.swiper', {
    direction: 'horizontal',
    loop: true,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    loopedSlidesLimit: false,
    slidesPerView: 3.1,
    spaceBetween: 25,
  });
