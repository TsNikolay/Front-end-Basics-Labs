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
