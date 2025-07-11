let box = document.querySelector(".abcd");

// mouseover and mouseout event:-
// box.addEventListener("mouseover", () => {
//   box.style.backgroundColor = "Yellow";
// });

// box.addEventListener("mouseout", () => {
//   box.style.backgroundColor = "Red";
// });

// mousemove event:-

window.addEventListener("mousemove", function (e) {
  box.style.top = e.clientY + "px";
  box.style.left = e.clientX + "px";
});
