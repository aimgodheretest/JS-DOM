let email = document.querySelector("#email");
let password = document.querySelector("#password");
let form = document.querySelector("form");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  //   Email and password Regex
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/;

  let isValid = true;

  let emailValue = emailRegex.test(email.value);
  let passValue = passwordRegex.test(password.value);

  if (!emailValue) {
    document.querySelector("#emailError").textContent = "Email Not Valid";
    isValid = false;
  }
  if (!passValue) {
    document.querySelector("#passwordError").textContent = "Password Not Valid";
    isValid = false;
  }
  if (isValid) {
    document.querySelector("#emailError").textContent = "";
    document.querySelector("#passwordError").textContent = "";
    document.querySelector("#errorMsg").textContent =
      alert("Login Successfull");
    email.value = "";
    password.value = "";
  }
});
