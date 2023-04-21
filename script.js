// global variables and DOM elements for modification
/*
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

// listen for operator buttons -----------------------------TO FIX-------------------------------
operators.forEach((button) => {
  button.addEventListener("click", (e) => {
    handleOperator(e.target.textContent);
  });
});

// function to manage operators -----------------------------TO REVIEW-------------------------------
function handleOperator(op) {
  operator = op;
  previousNum = currentNum;
  previousDisplayNumber.textContent = previousNum + " " + operator;
  currentNum = "";
  currentDisplayNumber.textContent = "";
}

// function to manage "=" -----------------------------TO REVIEW-------------------------------
function handleEquals() {
  previousNum = Number(previousNum);
  currentNum = Number(currentNum);

  if (operator === "+") {
    previousNum = previousNum + currentNum;
  } else if (operator === "-") {
    previousNum = previousNum - currentNum;
  } else if (operator === "x") {
    previousNum = previousNum * currentNum;
  } else if (operator === "/") {// global variables and DOM elements for modification
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
});// global variables and DOM elements for modification
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
operators.forEach((button) => {
  button.addEventListener("click", (e) => {
    handleOperator(e.target.textContent);
  });
});

// function to manage operators
function handleOperator(op) {
  operator = op;
  previousNum = currentNum;
  previousDisplayNumber.textContent = previousNum + " " + operator;
  currentNum = "";
  currentDisplayNumber.textContent = "";
}

// function to manage "="
function handleEquals() {
  if (!previousNum || !currentNum) {
    return;
  }
  previousNum = Number(previousNum);
  currentNum = Number(currentNum);

  if (operator === "+") {
    previousNum = previousNum + currentNum;
  } else if (operator === "-") {
    previousNum = previousNum - currentNum;
  } else if (operator === "x") {
    previousNum = previousNum * currentNum;
  } else if (operator === "/") {
    previousNum = previousNum / currentNum;
  }
  previousDisplayNumber.textContent = "";
  currentDisplayNumber.textContent = previousNum;
}

// listen for keyboard numbers
document.addEventListener("keydown", (e) => {
  if (e.key >= 0 && e.key <= 9) {
    handleNumber(e.key);
  }
});


function handleNumber(number) {
  if (currentNum.length <= 11) {
    currentNum += number;
    currentDisplayNumber.textContent = currentNum;
  }
}

// listen for operator buttons
document.querySelectorAll(".operators").forEach((button) => {
  button.addEventListener("click", (e) => {
    handleOperator(e.target.textContent);
  });
});

// function to manage operators
function handleOperator(op) {
  operator = op;
  previousNum = currentNum;
  previousDisplayNumber.textContent = previousNum + " " + operator;
  currentNum = "";
  currentDisplayNumber.textContent = "";
}

// function to manage "="
function handleEquals() {
  if (!previousNum || !currentNum) {
    return;
  }
  previousNum = Number(previousNum);
  currentNum = Number(currentNum);

  if (operator === "+") {
    previousNum = previousNum + currentNum;
  } else if (operator === "-") {
    previousNum = previousNum - currentNum;
  } else if (operator === "x") {
    previousNum = previousNum * currentNum;
  } else if (operator === "/") {
    previousNum = previousNum / currentNum;
  }
  previousDisplayNumber.textContent = "";
  currentDisplayNumber.textContent = previousNum;
}

// listen for keyboard numbers
document.addEventListener("keydown", (e) => {
  if (e.key >= 0 && e.key <= 9) {
    handleNumber(e.key);
  }
});
  }
  previousDisplayNumber.textContent = "";
  currentDisplayNumber.textContent = previousNum;
}



// listen for keyboard numbers
document.addEventListener("keydown", (e) => {
  if (e.key >= 0 && e.key <= 9) {
    handleNumber(e.key);
  }
});
*/

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
const operators = document.querySelectorAll(".operator");

// listen for number buttons
numberButtons.forEach((button) => {
  button.addEventListener("click", (event) => {
    handleNumber(event.target.textContent);
  });
});

// listen for operator buttons
operators.forEach((button) => {
  button.addEventListener("click", (e) => {
    handleOperator(e.target.textContent);
  });
});

// function to manage numbers
function handleNumber(number) {
  if (currentNum.length <= 11) {
    currentNum += number;
    currentDisplayNumber.textContent = currentNum;
  }
}

// function to manage operators
function handleOperator(op) {
  operator = op;
  previousNum = currentNum;
  previousDisplayNumber.textContent = previousNum + " " + operator;
  currentNum = "";
  currentDisplayNumber.textContent = "";
}

// function to manage "="
function handleEquals() {
  if (!previousNum || !currentNum) {
    return;
  }
  previousNum = Number(previousNum);
  currentNum = Number(currentNum);

  if (operator === "+") {
    previousNum = previousNum + currentNum;
  } else if (operator === "-") {
    previousNum = previousNum - currentNum;
  } else if (operator === "x") {
    previousNum = previousNum * currentNum;
  } else if (operator === "/") {
    previousNum = previousNum / currentNum;
  }
  previousDisplayNumber.textContent = "";
  currentDisplayNumber.textContent = previousNum;
}

// listen for keyboard numbers
document.addEventListener("keydown", (e) => {
  if (e.key >= 0 && e.key <= 9) {
    handleNumber(e.key);
  }
});

// listen for keyboard operators
document.addEventListener("keydown", (e) => {
  if (e.key === "+" || e.key === "-" || e.key === "*" || e.key === "/") {
    handleOperator(e.key);
  }
});

// listen for keyboard "="
document.addEventListener("keydown", (e) => {
  if (e.key === "=" || e.key === "Enter") {
    handleEquals();
  }
});

// listen for decimal button
decimal.addEventListener("click", () => {
  if (!currentNum.includes(".")) {
    currentNum += ".";
    currentDisplayNumber.textContent = currentNum;
  }
});

// listen for clear button
clear.addEventListener("click", () => {
  currentNum = "";
  previousNum = "";
  operator = "";
  currentDisplayNumber.textContent = "";
  previousDisplayNumber.textContent = "";
});

// listen for equals button
equals.addEventListener("click", handleEquals);


