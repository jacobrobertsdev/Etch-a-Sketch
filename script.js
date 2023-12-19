const container = document.querySelector(".container");

function createGrid(dimension) {
  container.style.gridTemplateColumns = `repeat(${dimension}, 1fr)`;
  container.style.gridTemplateRows = `repeat(${dimension}, 1fr)`;
  for (let i = 1; i <= dimension * dimension; i++) {
    let div = document.createElement("div");
    div.style.backgroundColor = "gray";
    div.style.border = "1px solid black";
    container.appendChild(div);
  }
}

document.addEventListener("DOMContentLoaded", createGrid(16));
