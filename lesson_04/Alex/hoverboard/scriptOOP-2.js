class Hoverboard {
  constructor({ refs: { containerRef }, colors, squaresQuantity }) {
    this.containerRef = containerRef;
    this.colors = colors;
    this.squaresQuantity = squaresQuantity;
  }

  init() {
    this.createSquares(this.squaresQuantity);
    this.addEventListeners();
  }

  createSquares = (qty) => {
    let div = "";
    for (let index = 0; index < qty; index += 1) {
      div = document.createElement("div");
      div.classList.add("square");
      this.div = div;
      this.containerRef.append(this.div);
    }
  };

  addEventListeners = () => {
    this.containerRef.addEventListener("mouseover", (event) => {
      if ("square" !== event.target.className) {
        return;
      }
      this.setColor(event.target, this.colors);
    });

    this.containerRef.addEventListener("mouseout", (event) => {
      this.removeColor(event.target);
    });
  };

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
const settings = {
  refs: {
    containerRef: document.querySelector(".container"),
  },
  colors: [
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
  ],
  squaresQuantity: 500,
};

new Hoverboard(settings).init();
