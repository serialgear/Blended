const body = document.body;
const slidesRef = document.querySelectorAll(".slide");
const leftBtnRef = document.querySelector("#left");
const rightBtnRef = document.querySelector("#right");

let activeSlide = 0;

rightBtnRef.addEventListener("click", () => {
  activeSlide += 1;
  if (activeSlide > slidesRef.length - 1) {
    activeSlide = 0;
  }
  setActiveSlide();
  setBodyBackground();
});

leftBtnRef.addEventListener("click", () => {
  activeSlide -= 1;
  if (activeSlide < 0) {
    activeSlide = slidesRef.length - 1;
  }
  setActiveSlide();
  setBodyBackground();
});

function setActiveSlide() {
  slidesRef.forEach((slide) => {
    slide.classList.remove("active");
  });
  slidesRef[activeSlide].classList.add("active");
}

function setBodyBackground() {
  body.style.backgroundImage = slidesRef[activeSlide].style.backgroundImage;
}
