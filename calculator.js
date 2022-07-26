"use strict";

const displayBox = document.querySelector(".display-Value");
const buttonNumbers = document.querySelectorAll(".numbers");
const operand = document.querySelectorAll(".operand");
const resultContainer = document.querySelector(".result-container");
const numberAndOperation = document.querySelector(".numberAndOperation");
let num1 = "";
let num2 = "";
let result = null;
let operator = "";

let haveDot = false;

function operate(operator, num1, num2) {
  function add(num1, num2) {
    let finalNum = num1 + num2;
    if (finalNum % 1 === 0) {
      return finalNum;
    } else {
      return Number.parseFloat(finalNum).toFixed(2);
    }
  }

  function subtract(num1, num2) {
    let finalNum = num1 - num2;
    if (finalNum % 1 === 0) {
      return finalNum;
    } else {
      return Number.parseFloat(finalNum).toFixed(2);
    }
  }
  function multiply(num1, num2) {
    let finalNum = num1 * num2;
    if (finalNum % 1 === 0) {
      return finalNum;
    } else {
      return Number.parseFloat(finalNum).toFixed(2);
    }
  }
  function divide(num1, num2) {
    let finalNum = num1 / num2;
    if (finalNum % 1 === 0) {
      return finalNum;
    } else {
      return Number.parseFloat(finalNum).toFixed(2);
    }
  }

  //==========================Logic on how to pick a function ==========================================
  if (
    operator === "+" &&
    typeof num1 === "number" &&
    typeof num2 === "number"
  ) {
    return add(num1, num2);
  } else if (
    operator === "-" &&
    typeof num1 === "number" &&
    typeof num2 === "number"
  ) {
    return subtract(num1, num2);
  } else if (
    operator === "*" &&
    typeof num1 === "number" &&
    typeof num2 === "number"
  ) {
    return multiply(num1, num2);
  } else if (
    operator === "/" &&
    typeof num1 === "number" &&
    typeof num2 === "number"
  ) {
    return divide(num1, num2);
  }
}

//============================ Equation function =============================

function selectedOperator(key) {
  if (key === "/") {
    operator = key;
    return operator;
  }
  if (key === "+") {
    operator = key;
    return operator;
  }
  if (key === "-") {
    operator = key;
    return operator;
  }
  if (key === "*") {
    operator = key;
    return operator;
  }
}

function oneOperator(operator) {
  let array = displayBox.textContent.split("");
  let currentOperator = "";
  for (let i = 0; i < array.length; i++) {
    if (array[i] === operator) {
      array.pop();
    }
  }
  let finalOutput = array.join("");
  return finalOutput;
}

// else if (displayBox.textContent.includes(selectedOperator(key))) {
//   displayBox.textContent = operate(operator, num1, num2);
// } else if (displayBox.textContent.includes(selectedOperator(key))) {
//   displayBox.textContent = operate(operator, num1, num2);
// } else if (displayBox.textContent.includes(selectedOperator(key))) {
//   displayBox.textContent = operate(operator, num1, num2);
// }

// displayBox.textContent = "";

//button operation
buttonNumbers.forEach((button) => {
  button.addEventListener("click", (e) => {
    e.preventDefault();

    num1 += e.target.textContent;

    // making dot print one time
    if (e.target.textContent === "." && !haveDot) {
      haveDot = true;
    } else if (e.target.textContent === "." && haveDot) {
      return;
    }

    displayBox.textContent = num1;
  });
});

// function for operator buttons
operand.forEach(function (selectedOperation) {
  selectedOperation.addEventListener("click", (e) => {
    // if num1 does not exist
    if (!num1) return;
    haveDot = false;

    const operation = e.target.dataset.key;
    // if they exist or true
    if (num1 && num2 && operator) {
      operate(num1, num2, operator);
    } else {
      result += parseFloat(num1);
    }
    console.log(result);
  });
});

// operate();
// Function takes a string or a number expression and evaluate it
// let result = displayBox.textContent;
// let finalResult = Function("return " + result)();
// displayBox.textContent = finalResult;
let arr = [3, 6, 78, 8];
const n = null;

console.log(arr.join(""));
