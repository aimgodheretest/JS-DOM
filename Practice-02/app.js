let fileInput = document.querySelector("#file-input");
let Btn = document.querySelector("#btn");

Btn.addEventListener("click", (e) => {
  fileInput.click();
});

fileInput.addEventListener("change", (e) => {
  const file = e.target.files[0];

  if (file) {
    Btn.textContent = file.name;
  }
});
