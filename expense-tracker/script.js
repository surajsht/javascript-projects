let addBudget = document.querySelector(".add-budget");
let totalBudget = document.querySelector(".total-budget span");

let totalBudgetRec = 0;

addBudget.addEventListener("submit", (e) => {
  e.preventDefault();

  let budgetInput = addBudget.querySelector("input");
  let budgetInputValue = budgetInput.value.trim();

  if (budgetInputValue === "") {
    alert("Please enter a valid number");
    budgetInput.value = "";
    return;
  }

  totalBudgetRec = budgetInputValue;
  totalBudget.textContent = totalBudgetRec;
  budgetInput.value = "";
  calculateRemainingBudget();
});

let addExpense = document.querySelector(".add-expense");
let remainingBudget = document.querySelector(".remaining-budget span");
let expenseList = document.querySelector(".expense-list");
let expenseTotal = document.querySelector(".expense-total span");

addExpense.addEventListener("submit", (e) => {
  e.preventDefault();

  let expenseInput = addExpense.querySelector("input");
  let expenseInputValue = expenseInput.value.trim();

  if (expenseInput === "") {
    alert("Please enter a valid number");
    expenseInput.value = "";
    return;
  }

  expenseList.insertAdjacentHTML(
    "beforeend",
    `
    <li class="expense-item"> ${expenseInputValue} </li>
    `
  );

  expenseInput.value = "";
  calculateRemainingBudget();
});

function calculateRemainingBudget() {
  let expenseItem = document.querySelectorAll(".expense-item");
  let check = [...expenseItem];

  let remainingBudgetRec = 0;

  let getTotalExp = check.reduce((acc, curr) => {
    return (acc += parseFloat(curr.textContent));
  }, 0);

  remainingBudgetRec = getTotalExp;
  remainingBudget.textContent = totalBudgetRec - remainingBudgetRec;
  expenseTotal.textContent = getTotalExp;
}
