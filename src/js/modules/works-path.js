export function worksPath() {
  const vw = document.documentElement.clientWidth || window.innerWidth;
  if (vw > 650) return;

  const worksPathItemProduction = document.querySelector(
    ".works-path__item--production"
  );
  const worksPathMeasurements = document.querySelector(
    ".works-path__item--measurements"
  );

  worksPathItemProduction.insertAdjacentHTML(
    "beforebegin",
    worksPathMeasurements.outerHTML
  );

  worksPathMeasurements.remove();
}
