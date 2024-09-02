import { rightside_menu } from "./modules/rightside-menu";
rightside_menu();

import { mobileMenu } from "./modules/mobile-menu";
mobileMenu();

import Swiper from "swiper/bundle";
import "swiper/css/bundle";
export const swiper = new Swiper(".contacts-slider__swiper", {
  loop: true,
  slidesPerView: 10,
  slidesPerGroup: 10,
  spaceBetween: 20,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});
