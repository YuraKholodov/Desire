import { rightside_menu } from "./modules/rightside-menu";
rightside_menu();

import { mobileMenu } from "./modules/mobile-menu";
mobileMenu();

import Swiper from "swiper/bundle";
import "swiper/css/bundle";
export const swiper = new Swiper(".contacts-slider__swiper", {
  loop: true,
  slidesPerView: 1,
  slidesPerGroup: 1,
  spaceBetween: 20,

  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    376: {
      slidesPerView: 2,
      slidesPerGroup: 2,
    },

    550: {
      slidesPerView: 3,
      slidesPerGroup: 3,
    },

    768: {
      slidesPerView: 4,
      slidesPerGroup: 4,
    },

    992: {
      slidesPerView: 6,
      slidesPerGroup: 6,
    },

    1511: {
      slidesPerView: 8,
      slidesPerGroup: 8,
    },

    1700: {
      slidesPerView: 10,
      slidesPerGroup: 10,
      spaceBetween: 20,
    },
  },
});
