"use strict";

const displayBox = document.querySelector(".display-Value");
const buttonNumbers = document.querySelectorAll(".numbers");
const operand = document.querySelectorAll(".operand");
const resultContainer = document.querySelector(".result-container");
const numberAndOperation = document.querySelector(".numberAndOperation");
const equal = document.querySelector(".equal");
const erase = document.querySelector(".delete");
const clear = document.querySelector(".clear");
let num1 = "";
let num2 = "";
let result = null;
let operator = "";

let haveDot = false;

function add() {
  let finalNum = parseFloat(result) + parseFloat(num1);
  return finalNum;
}

function subtract() {
  let finalNum = parseFloat(result) - parseFloat(num1);
  return finalNum;
}
function multiply() {
  let finalNum = parseFloat(result) * parseFloat(num1);
  return finalNum;
}
function divide() {
  let finalNum = parseFloat(result) / parseFloat(num1);
  return finalNum;
}

function operate() {
  //==========================Logic on how to pick a function ==========================================
  if (operator === "+") {
    result = add();
  } else if (operator === "-") {
    result = subtract();
  } else if (operator === "*") {
    result = multiply();
  } else if (operator === "/") {
    result = divide();
  }
}

displayBox.textContent = 0;
resultContainer.textContent = "";
numberAndOperation.textContent = "";

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
      operate();
    } else {
      result = parseFloat(num1);
    }

    numberAndOpe(operation);
    console.log(result);
    operator = operation;
    console.log(num1, result, operator);
  });
});

// to put up number and the operator
function numberAndOpe(ope = "") {
  num2 += num1 + " " + ope + " ";
  numberAndOperation.textContent = num2;
  displayBox.textContent = "";
  num1 = "";
  resultContainer.textContent = result;
}

// equal functionality
equal.addEventListener("click", (e) => {
  if (!num1 || !num2) return;
  haveDot = false;
  operate();
  numberAndOpe();
  displayBox.textContent = result;
  resultContainer.textContent = "";
  num1 = result;
  num2 = "";
});

//clear all functionality
clear.addEventListener("click", (e) => {
  displayBox.textContent = "";
  numberAndOperation.textContent = "";
  resultContainer.textContent = "";
  num1 = "";
  num2 = "";
  result = null;
});

// delete a number functionality
erase.addEventListener("click", (e) => {
  if (num1 || result) {
    let array = displayBox.textContent.split("");
    array.pop();
    num1 = array.join("");
    displayBox.textContent = num1;
  }
});

//===============================Adding keyboard function================================
window.addEventListener("keydown", (e) => {
  if (
    e.key === "0" ||
    e.key === "1" ||
    e.key === "2" ||
    e.key === "3" ||
    e.key === "4" ||
    e.key === "5" ||
    e.key === "6" ||
    e.key === "7" ||
    e.key === "8" ||
    e.key === "9" ||
    e.key === "."
  ) {
    keyboardFunction(e.key);
  } else if (e.key === "+" || e.key === "-" || e.key === "*" || e.key === "/") {
    clickOperation(e.key);
  } else if (e.key == "Enter" || e.key === "=") {
    clickEqual(e.key);
  } else if (e.key === "Backspace" || e.key === "d") {
    clickErase(e.key);
  } else if (e.key === "c") {
    clickClear(e.key);
  }
});

function keyboardFunction(key) {
  buttonNumbers.forEach((button) => {
    if (button.textContent === key) {
      button.click();
    }
  });
}

function clickOperation(key) {
  operand.forEach((button) => {
    if (button.textContent === key) {
      button.click();
    }
  });
}
function clickEqual(key) {
  equal.click();
}
function clickErase(key) {
  erase.click();
}

function clickClear(key) {
  clear.click();
}
