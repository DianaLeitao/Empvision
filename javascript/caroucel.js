
let xOffset = 0;
let hoverMouse = false;
const caroucel = document.getElementById("caroucel");

setInterval(translate, 0);

function translate() {
  let offsetIncrementor = hoverMouse ? 0.05 : 0.2;
  if (xOffset >= 258 * 7) xOffset = 0;
  else xOffset = xOffset + offsetIncrementor;
  caroucel.style.transform = "translateX(-" + xOffset + "px)";
}

caroucel.addEventListener("mousehover", function (event) {
  hoverMouse = true;
});

caroucel.addEventListener("mouseout", function (event) {
  hoverMouse = false;
});
