
const Swiper = require('swiper/bundle').default;

const sliderCarousel = () => {
  if (document.querySelector('.companies-wrapper')) {
    new Swiper('.companies-wrapper', {
      loop: true,
      slidesPerView: 1,
      spaceBetween: 10,

      autoplay: {
        delay: 2500, 
        disableOnInteraction: false, 
      },

      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },

      breakpoints: {
        640: {
          slidesPerView: 2,
          spaceBetween: 20
        },
        768: {
          slidesPerView: 4,
          spaceBetween: 40
        },
        1024: {
          slidesPerView: 5,
          spaceBetween: 50
        },
      },
    });
  }
};

module.exports = sliderCarousel; 



/*
// import Swiper from 'swiper/bundle';
// import { Pagination } from 'swiper/modules';

const sliderCarousel = () => {

  const swiper = new Swiper('.companies-wrapper', {
    loop: true,
    slidesPerView: 1,
    spaceBetween: 10,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    breakpoints: {
      640: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      768: {
        slidesPerView: 4,
        spaceBetween: 40,
      },
      1024: {
        slidesPerView: 5,
        spaceBetween: 50,
      },
    },
  });
}

export default sliderCarousel;
// module.exports = sliderCarousel;
*/