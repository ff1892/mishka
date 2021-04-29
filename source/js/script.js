// Menu variables

var navMain = document.querySelector('.main-nav');
var navToggle = document.querySelector('.main-nav__toggle');

// Modal variables

let buy = document.querySelectorAll(".buy");
let overlay = document.querySelector(".overlay");
let size = document.querySelector(".size");
let choose = document.querySelector(".size__submit");

// Slider variables

let slides = document.querySelectorAll(".slider__item");
let buttonPrevious = document.querySelector(".slider__toggle--previous");
let buttonNext = document.querySelector(".slider__toggle--next");
let slideIndex = 0;

// Menu script

navMain.classList.remove('main-nav--nojs');

navToggle.addEventListener('click', function() {
if (navMain.classList.contains('main-nav--closed')) {
  navMain.classList.remove('main-nav--closed');
  navMain.classList.add('main-nav--opened');
} else {
  navMain.classList.add('main-nav--closed');
  navMain.classList.remove('main-nav--opened');
}
});

//  Modal script

for (let button of buy) {
  button.addEventListener("click", function(evt) {
    evt.preventDefault();
    overlay.classList.add("overlay--show");
    size.classList.add("size--show");
  });
}

choose.addEventListener("click", function(evt) {
  evt.preventDefault();
  overlay.classList.remove("overlay--show");
  size.classList.remove("size--show");
});

overlay.addEventListener("click", function(evt) {
  evt.preventDefault();
  overlay.classList.remove("overlay--show");
  size.classList.remove("size--show");
});

window.addEventListener("keydown", function(evt) {
  if (evt.key == "Escape") {
    if (overlay.classList.contains("overlay--show")) {
      evt.preventDefault();
      overlay.classList.remove("overlay--show");
      size.classList.remove("size--show");
    }
  }
});

// Slider script

buttonNext.addEventListener("click", function() {
  slideIndex ++
  if (slideIndex >= slides.length) {
    slides[slideIndex-1].classList.remove("slider__item--show");
    slideIndex = 0;
    slides[slideIndex].classList.add("slider__item--show");
  } else {
    slides[slideIndex-1].classList.remove("slider__item--show");
    slides[slideIndex].classList.add("slider__item--show");
  }
});

buttonPrevious.addEventListener("click", function() {
  slideIndex --;
  if (slideIndex >= 0) {
    slides[slideIndex + 1].classList.remove("slider__item--show");
    slides[slideIndex].classList.add("slider__item--show");
  } else {
    slides[slideIndex + 1].classList.remove("slider__item--show");
    slideIndex = slides.length - 1;
    slides[slideIndex].classList.add("slider__item--show");
  }
});
