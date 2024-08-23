export function rightside_menu() {
  const headerBtn = document.querySelector(".header__btn");
  const rightSideMenuClose = document.querySelector(".rightside-menu__close");
  const rightSideMenu = document.querySelector(".rightside-menu");

  headerBtn.addEventListener("click", () => {
    rightSideMenu.classList.remove("rightside-menu--close");
  });

  rightSideMenuClose.addEventListener("click", () => {
    rightSideMenu.classList.add("rightside-menu--close");
  });
}
