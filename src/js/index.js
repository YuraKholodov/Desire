import { rightside_menu } from "./modules/rightside-menu";
rightside_menu();

import { mobileMenu } from "./modules/mobile-menu";
mobileMenu();

import Swiper from "swiper/bundle";
import "swiper/css/bundle";
export const swiper = new Swiper(".top__slider", {
  // Optional parameters
  loop: true,
  autoplay: true,
  effect: "fade",
  fadeEffect: {
    crossFade: true,
  },

  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
  },
});

import mixitup from "mixitup";
const mixer = mixitup(".gallery__inner", {
  load: {
    filter: ".category-living",
  },
});
