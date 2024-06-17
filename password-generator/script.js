let passwordLength = document.querySelector(".password-length");
let passwordRange = passwordLength.querySelector("input");
let passwordRangeValue = document.querySelector(".range-value");
let displayPassword = document.querySelector(".password span");
let passwordNumber = document.querySelector(".password-number");
let passwordSymbol = document.querySelector(".password-symbol");

let alphabes = "abcdefghijklmnopqrstuvwxyz";
let numbers = "1234567890";
let symbols = "!@#$%^&*()_+}{?><|/.,;'[]";

passwordLength.addEventListener("submit", (e) => {
  e.preventDefault();

  let passwordOptions = alphabes;

  if (passwordNumber.checked) {
    passwordOptions += numbers;
  }

  if (passwordSymbol.checked) {
    passwordOptions += symbols;
  }

  let passwordRangeValue = passwordRange.value;

  let newPassword = "";

  for (let i = 1; i <= passwordRangeValue; i++) {
    let randomNumber = Math.floor(Math.random() * passwordOptions.length);
    newPassword += passwordOptions[randomNumber];
  }

  displayPassword.textContent = newPassword;
});

passwordRange.addEventListener("input", (e) => {
  passwordRangeValue.textContent = e.target.value;
});
