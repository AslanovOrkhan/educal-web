"use strict"


let lastScrollTop = 20,
  header = document.querySelector("header");
let clickToTop_btn = document.querySelector('.clickToTop_btn');
window.addEventListener("scroll", () => {
  let scrollTop = window.pageYoffset || document.documentElement.scrollTop;
  if (scrollTop > lastScrollTop) {
    header.classList.add("sticky");
    clickToTop_btn.classList.add("fade");
  } else {
    header.classList.remove("sticky");
    clickToTop_btn.classList.remove("fade");
  }
})