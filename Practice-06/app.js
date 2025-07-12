let input = document.querySelector("input");
let span = document.querySelector("span");

input.addEventListener("input", function (e) {
  //   console.log(input.value.length);

  let leftCharacter = 20 - input.value.length;
  span.innerText = leftCharacter;

  if (leftCharacter < 0) {
    span.style.color = "red";
  } else {
    span.style.color = "white";
  }
});
