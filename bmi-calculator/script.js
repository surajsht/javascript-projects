let form = document.querySelector(".bmi-calculator-form");
let weightInput = document.querySelector(".weight");
let heightInput = document.querySelector(".height");
let bmiResult = document.querySelector(".bmi-result");
let bmiRemark = document.querySelector(".bmi-remark");
let calculate = document.querySelector(".calculate");
let refresh = document.querySelector(".refresh");

form.addEventListener("submit", (e) => {
  e.preventDefault();
});

calculate.addEventListener("click", () => {
  let weightValue = parseFloat(weightInput.value);
  let heightValue = parseFloat(heightInput.value);

  if (
    isNaN(weightValue) ||
    isNaN(heightValue) ||
    weightValue <= 0 ||
    heightValue <= 0
  ) {
    alert("Please enter valid positive values for weight and height.");
    return;
  }

  let heightToMeters = heightValue / 100;
  let heightSquare = Math.pow(heightToMeters, 2);
  let getBmi = parseFloat((weightValue / heightSquare).toFixed(2));

  displayResult(getBmi);
});

function displayResult(bmi) {
  bmiResult.textContent = `Your BMI is ${bmi}`;

  if (bmi < 18.5) {
    bmiRemark.textContent = `You are underweight.`;
  } else if (bmi >= 18.5 && bmi <= 24.9) {
    bmiRemark.textContent = `Your weight is normal.`;
  } else if (bmi >= 25 && bmi <= 30) {
    bmiRemark.textContent = `You are overweight.`;
  } else {
    bmiRemark.textContent = `You are obese.`;
  }
}

refresh.addEventListener("click", () => {
  weightInput.value = "";
  heightInput.value = "";
  bmiRemark.textContent = "";
  bmiResult.textContent = "";
});
