import { rightside_menu } from "./modules/rightside-menu";
rightside_menu();

import { mobileMenu } from "./modules/mobile-menu";
mobileMenu();

import mixitup from "mixitup";
const mixer = mixitup(".gallery__inner", {
  load: {
    filter: ".category-living",
  },
});
