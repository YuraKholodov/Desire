import Swiper from "swiper/bundle";
import "swiper/css/bundle";

export const swiper = new Swiper(".top__slider", {
  // Optional parameters
  loop: true,
  autoplay: true,
  effect: 'fade',
  fadeEffect: {
    crossFade: true
  },

  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
  },
});
