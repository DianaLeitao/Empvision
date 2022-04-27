const menuBtn = document.querySelector('.menuHamburger');
let menuOpen = false;

menuBtn.addEventListener('click', () => {
    if(!menuOpen) {
        menuBtn.classList.add('open');
        menuOpen = true;

    } else {
        menuBtn.classList.remove('open');
        menuOpen = false;

    }
});

function openContent() {
  var menuList = document.getElementById("menuList");
  if (menuList.style.display === "flex") {
    menuList.style.display = "none";
  } else {
    menuList.style.display = "flex";
  }
}