let navBar = document.getElementById("header__nav__hamburger-btn");
let navList = document.getElementById("header__nav-list");
let bactop = document.getElementById("bactop");

window.addEventListener("scroll", function () {
  showBactop();
});

navBar.addEventListener("click", function () {
  navList.classList.toggle("show-header__nav-list");
});

function showBactop() {
  if (scrollY > 200) {
    bactop.classList.add("show-bactop");
  } else {
    bactop.classList.remove("show-bactop");
  }
}

window.addEventListener("scroll", function () {
  shrink();
});

let navbar = document.getElementById("navbar");

function shrink() {
  if (scrollY > 100) {
    navbar.classList.add("navbar-shrink");
  } else {
    navbar.classList.remove("navbar-shrink");
  }
}

let modeBtn = document.getElementById("mode-btn");

modeBtn.addEventListener("click", function () {
  if (document.body.className != "dark") {
    this.firstElementChild.src = "images/light.svg";
  } else {
    this.firstElementChild.src = "images/dark.svg";
  }
  document.body.classList.toggle("dark");
});
