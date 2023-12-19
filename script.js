const container = document.querySelector(".grid-container");

function createGrid(dimension, color) {
  container.style.gridTemplateColumns = `repeat(${dimension}, 1fr)`;
  container.style.gridTemplateRows = `repeat(${dimension}, 1fr)`;
  for (let i = 1; i <= dimension * dimension; i++) {
    let div = document.createElement("div");
    div.style.backgroundColor = "silver";
    container.appendChild(div);
    div.addEventListener("mouseover", () => {
      div.style.backgroundColor = color;
    });
  }
}

document.addEventListener("DOMContentLoaded", createGrid(16, "black"));
