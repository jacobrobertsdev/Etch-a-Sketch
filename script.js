const container = document.querySelector(".grid-container");
let buttons = document.querySelectorAll("button");

// Create the grid, set hover color

function createGrid(dimension) {
  container.style.gridTemplateColumns = `repeat(${dimension}, 1fr)`;
  container.style.gridTemplateRows = `repeat(${dimension}, 1fr)`;

  for (let i = 1; i <= dimension * dimension; i++) {
    let div = document.createElement("div");
    div.style.backgroundColor = "silver";
    container.appendChild(div);

    div.addEventListener("mouseover", () => {
      div.style.backgroundColor = "black";
    });
  }
}

// Reset the grid color

function resetGrid() {
  let squares = container.querySelectorAll("div");

  for (let square of squares) {
    square.style.backgroundColor = "silver";
  }
}

// Load default grid

document.addEventListener("DOMContentLoaded", createGrid(16));

// Button controls

for (let button of buttons) {
  button.addEventListener("click", (e) => {
    resetGrid();

    if (e.target.classList.contains("sixteen")) {
      createGrid(16);
    } else if (e.target.classList.contains("thirty-two")) {
      createGrid(32);
    } else if (e.target.classList.contains("sixty-four")) {
      createGrid(64);
    } else if (e.target.classList.contains("max")) {
      createGrid(100);
    }
  });
}
