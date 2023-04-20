// global variables and DOM elements for modification
let currentNum = "";
let previousNum = "";
let operator = "";

const currentDisplayNumber = document.querySelector(".currentNumber");
const previousDisplayNumber = document.querySelector(".previousNumber");

const equals = document.querySelector(".equals");
const decimal = document.querySelector(".decimal");
const clear = document.querySelector(".clear");
const numberButtons = document.querySelectorAll(".number");
const operators = document.querySelectorAll(".operators");

// listen for number buttons
numberButtons.forEach((button) => {
  button.addEventListener("click", (event) => {
    handleNumber(event.target.textContent);
  });
});

function handleNumber(number) {
  if (currentNum.length <= 11) {
    currentNum += number;
    currentDisplayNumber.textContent = currentNum;
  }
}

// listen for operator buttons
operators.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    handleOperator(e.target.textContent);
  });
});

function handleOperator(op) {
  operator = op;
  previousNum = currentNum;
  previousDisplayNumber.textContent = previousNum + " " + operator;
  currentNum = "";
  currentDisplayNumber.textContent = "";
}

// listen for keyboard numbers
document.addEventListener("keydown", (e) => {
  if (e.key >= 0 && e.key <= 9) {
    handleNumber(e.key);
  }
});