const containerRef = document.querySelector(".container");
const colors = [
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
createSquares(containerRef, colors);

function createSquares(DOMRef, colors) {
  for (let i = 0; i < 800; i += 1) {
    const square = document.createElement("div");
    square.classList.add("square");
    square.addEventListener("mouseover", () => setColor(square, colors));
    square.addEventListener("mouseout", () => removeColor(square));
    DOMRef.append(square);
  }
}

function getRandomColor(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

function setColor(element, arr) {
  const color = getRandomColor(arr);
  element.style.background = color;
  element.style.boxShadow = `0 0 4px ${color}`;
}

function removeColor(element) {
  element.style.background = "#1d1d1d";
  element.style.boxShadow = `0 0 4px #000000`;
}

// document.body.style.background = getRandomColor(colors);
