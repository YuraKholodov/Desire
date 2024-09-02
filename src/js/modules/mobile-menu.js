export function mobileMenu() {
  const headerBtn = document.querySelector(".header__btn-menu");
  const mobileMenu = document.querySelectorAll(".menu");

  headerBtn.addEventListener("click", () => {
    mobileMenu.forEach((menu) => {
      menu.classList.toggle("menu--open");
    });
  });
}
