let inputs = document.querySelectorAll("input");
let form = document.querySelector("form");
let main = document.querySelector("#main");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  let card = document.createElement("div");
  card.classList.add("card");

  let profile = document.createElement("div");
  profile.classList.add("profile");

  let image = document.createElement("img");
  image.setAttribute("src", inputs[0].value);

  let h3 = document.createElement("h3");
  h3.innerText = inputs[1].value;

  let h5 = document.createElement("h5");
  h5.innerText = inputs[2].value;

  let p = document.createElement("p");
  p.innerText = inputs[3].value;

  profile.appendChild(image);
  card.appendChild(profile);
  card.appendChild(h3);
  card.appendChild(h5);
  card.appendChild(p);

  main.appendChild(card);

  inputs.forEach(function (input) {
    console.log(input);

    if (input.type !== "submit") {
      input.value = "";
    }
  });
});
