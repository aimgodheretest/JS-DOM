let h1 = document.querySelector("h1");

window.addEventListener("keydown", function (e) {
  if (e.key === " ") {
    h1.innerText = "Space";
  } else {
    h1.innerText = e.key;
  }
});
