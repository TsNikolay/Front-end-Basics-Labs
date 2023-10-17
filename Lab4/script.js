const clickableElement1 = document.getElementById("hobbies");

clickableElement1.addEventListener("click", () => {
  clickableElement1.style.backgroundColor = "blue";
  clickableElement1.style.color = "white";
});

const clickableElement2 = document.querySelector(".games");

clickableElement2.addEventListener("click", () => {
  clickableElement2.style.backgroundColor = "yellowgreen";
  clickableElement2.style.color = "black";
});

const imageBlock = document.querySelector(".author-favorite-city-photo");

const addButton = document.querySelector(".addButton");
addButton.addEventListener("click", () => {
  imageBlock.style.display = "block";
});

const deleteButton = document.querySelector(".deleteButton");
deleteButton.addEventListener("click", () => {
  imageBlock.style.display = "none";
});

let imgWidth = 350;
const image = document.querySelector(".image");
const zoomInButton = document.querySelector(".zoomInButton");
zoomInButton.addEventListener("click", () => {
  imgWidth += 100;
  image.style.width = imgWidth + "px";
});

const zoomOutButton = document.querySelector(".zoomOutButton");
zoomOutButton.addEventListener("click", () => {
  if (imgWidth > 50) {
    imgWidth -= 100;
    image.style.width = imgWidth + "px";
  }
});
