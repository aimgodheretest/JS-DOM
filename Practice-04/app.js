let box = document.querySelector(".abcd");

box.addEventListener("mouseover", () => {
  box.style.backgroundColor = "Yellow";
});

box.addEventListener("mouseout", () => {
  box.style.backgroundColor = "Red";
});
