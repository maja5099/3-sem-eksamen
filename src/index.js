//   Tilbud + specialist sektion swiper
new Swiper('.swiper', {
    loop: true,
    spaceBetween: 32,
    slidesPerView: 1,
    pagination: {
      clickable: true,
      el: '.swiper-pagination',
    },
    breakpoints: {
      640: {
        slidesPerView: 2,
      },
      1024: {
        slidesPerView: 4,
      },
    },
  })

//   Trustpilot sektion swiper
  document.addEventListener('DOMContentLoaded', function () {
    new Swiper('.swiper-container', {
      loop: true,
      slidesPerView: 1,
      spaceBetween: 32,
      autoplay: {
        delay: 8000,
      },
      breakpoints: {
        640: {
          centeredSlides: true,
          slidesPerView: 1.5,
        },
        1024: {
          centeredSlides: false,
          slidesPerView: 2.5,
        },
      },
      navigation: {
        nextEl: '.next-button',
        prevEl: '.prev-button',
      },
    })
  })