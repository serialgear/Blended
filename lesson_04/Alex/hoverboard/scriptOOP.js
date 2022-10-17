class Hoverboard {
  constructor() {
    this.containerRef = document.querySelector(".container");
    this.colors = [
      "#0000FF",
      "#FF8C00",
      "#00BFFF",
      "#FFFAF0",
      "#B22222",
      "#FFD700",
      "#FF69B4",
      "#4B0082",
      "#FFFFF0",
      "#7CFC00",
    ];
  }

  init() {
    this.createSquares(this.containerRef, this.colors);
  }

  createSquares(DOMRef, colors) {
    for (let i = 0; i < 800; i += 1) {
      const square = document.createElement("div");
      square.classList.add("square");
      square.addEventListener("mouseover", () => this.setColor(square, colors));
      square.addEventListener("mouseout", () => this.removeColor(square));
      DOMRef.append(square);
    }
  }

  getRandomColor(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
  }

  setColor(element, arr) {
    const color = this.getRandomColor(arr);
    element.style.background = color;
    element.style.boxShadow = `0 0 4px ${color}`;
  }

  removeColor(element) {
    element.style.background = "#1d1d1d";
    element.style.boxShadow = `0 0 4px #000000`;
  }
}
new Hoverboard().init();
