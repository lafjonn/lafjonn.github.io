var btn = document.querySelector(".header__dropdown-btn");
var menu = document.querySelector(".header__menu-list");
var header = document.querySelector(".header");

btn.addEventListener("click", function (event) {
  "use strict";
  event.preventDefault();

  if (menu.classList.contains("header__menu-list--close")) {
    menu.classList.remove("header__menu-list--close");
    btn.classList.add("header__dropdown-btn--cross");
    header.classList.add("header__menu-color");
    header.classList.remove("absolute");
  } else {
    menu.classList.add("header__menu-list--close");
    btn.classList.remove("header__dropdown-btn--cross");
    header.classList.remove("header__menu-color");
    header.classList.add("absolute");
  }
});
