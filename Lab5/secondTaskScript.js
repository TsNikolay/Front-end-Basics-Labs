const cells = document.querySelectorAll("td");
const myCell = document.getElementById("cell34");

document.addEventListener("DOMContentLoaded", () => {
  for (let i = 1; i <= cells.length; i++) {
    cells[i - 1].textContent = i;
  }
});

myCell.addEventListener("mouseenter", () => {
  const randomColor = getRandomColor();
  myCell.style.backgroundColor = randomColor;
});

function getRandomColor() {
  const letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

function setColorForCell(cell) {
  const selectedColor = document.querySelector(".colorPicker").value;
  cell.style.backgroundColor = selectedColor;
}

function setColorForDiagonal() {
  const selectedColor = document.querySelector(".colorPicker").value;
  const table = document.getElementById("matrix");
  const rows = table.getElementsByTagName("tr");

  for (let i = 0; i < rows.length; i++) {
    const cells = rows[i].getElementsByTagName("td");
    const diagonalCell = cells[cells.length - 1 - i];
    diagonalCell.style.backgroundColor = selectedColor;
  }
}
