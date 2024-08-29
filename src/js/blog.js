import { rightside_menu } from "./modules/rightside-menu";
rightside_menu();

require("fslightbox");

import Swiper from "swiper/bundle";
import "swiper/css/bundle";
new Swiper(".article-slider__internal", {
  // Optional parameters
  loop: true,

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

new Swiper(".blog__item-external-swiper", {
  // Optional parameters
  loop: true,

  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + (index + 1) + "</span>";
    },
  },
});
