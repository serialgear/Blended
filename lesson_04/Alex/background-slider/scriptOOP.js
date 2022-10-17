class Gallery {
  constructor({ body, slidesRef, leftBtnRef, rightBtnRef }) {
    this.body = body;
    this.slidesRef = slidesRef;
    this.leftBtnRef = leftBtnRef;
    this.rightBtnRef = rightBtnRef;
    this.activeSlide = 0;
  }

  init() {
    this.addListeners();
  }

  addListeners() {
    this.rightBtnRef.addEventListener("click", () => {
      this.activeSlide += 1;
      if (this.activeSlide > this.slidesRef.length - 1) {
        this.activeSlide = 0;
      }
      this.setActiveSlide();
      this.setBodyBackground();
    });

    this.leftBtnRef.addEventListener("click", () => {
      this.activeSlide -= 1;
      if (this.activeSlide < 0) {
        this.activeSlide = this.slidesRef.length - 1;
      }
      this.setActiveSlide();
      this.setBodyBackground();
    });
  }

  setActiveSlide() {
    this.slidesRef.forEach((slide) => {
      slide.classList.remove("active");
    });
    this.slidesRef[this.activeSlide].classList.add("active");
  }

  setBodyBackground() {
    this.body.style.backgroundImage =
      this.slidesRef[this.activeSlide].style.backgroundImage;
  }
}

const refs = {
  body: document.body,
  slidesRef: document.querySelectorAll(".slide"),
  leftBtnRef: document.querySelector("#left"),
  rightBtnRef: document.querySelector("#right"),
};

new Gallery(refs).init();
