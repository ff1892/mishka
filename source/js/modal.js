let buy = document.querySelectorAll(".buy");
let overlay = document.querySelector(".overlay");
let size = document.querySelector(".size");
let choose = document.querySelector(".size__submit");


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
