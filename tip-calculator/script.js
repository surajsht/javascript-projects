let calculate = document.querySelector("form button");
let amount = document.querySelector(".amount");
let tip = document.querySelector(".tip");
let totalAmount = document.querySelector(".total-amount");

calculate.addEventListener("click", (e) => {
  e.preventDefault();

  let amountValue = Number(amount.value);
  let tipValue = tip.value;

  let tipAmount = (tipValue / 100) * amountValue;
  let total = amountValue + tipAmount;
  console.log(typeof amountValue, typeof tipAmount);

  totalAmount.textContent = `Rs.${total}`;
});
