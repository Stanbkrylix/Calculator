"use strict";

const displayBox = document.querySelector(".value-container");
const buttonNumbers = document.querySelectorAll(".button-divs");
let num1;
let num2;
let num3;
let operator;
let emptyArray = [];
let emptyArray2 = [];

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

function equal() {
  if (displayBox.textContent.includes("+")) {
    operator = "+";
    displayBox.textContent = operate(operator, num1, num2);
    num2 = "";
  } else if (displayBox.textContent.includes("-")) {
    operator = "-";
    displayBox.textContent = operate(operator, num1, num2);
    num2 = "";
  } else if (displayBox.textContent.includes("*")) {
    operator = "*";
    displayBox.textContent = operate(operator, num1, num2);
    num2 = "";
  } else if (displayBox.textContent.includes("/")) {
    operator = "/";
    displayBox.textContent = operate(operator, num1, num2);
    num2 = "";
  }
}

displayBox.textContent = "";
buttonNumbers.forEach((button) => {
  button.addEventListener("click", (e) => {
    e.preventDefault();

    if (e.target.dataset.key === "clear") {
      num1 = "";
      num2 = "";
      operator = "";
      displayBox.textContent = "";
      emptyArray = [];
    } else if (e.target.dataset.key === "+") {
      equal();
      console.log(operator);
      num1 = +displayBox.textContent;
      displayBox.textContent += "+";
      emptyArray = [];
    } else if (e.target.dataset.key === "-") {
      equal();
      num1 = +displayBox.textContent;
      displayBox.textContent += "-";
      emptyArray = [];
    } else if (e.target.dataset.key === "*") {
      equal();
      num1 = +displayBox.textContent;
      displayBox.textContent += "*";
      emptyArray = [];
    } else if (e.target.dataset.key === "/") {
      equal();
      num1 = +displayBox.textContent;
      displayBox.textContent += "/";
      emptyArray = [];
    } else if (e.target.dataset.key === ".") {
      displayBox.textContent += ".";
      emptyArray = [];
    } else if (e.target.dataset.key === "del") {
      // equal();
      let displayArray = displayBox.textContent.split("");
      displayArray.pop();
      displayBox.textContent = displayArray.join("");
      emptyArray = [];
    }

    //============================= Determines which operation happens =============================================
    else if (e.target.dataset.key === "=") {
      equal();
      // emptyArray = [];
    }

    //========================= To assign a number to num2 ========================================================
    else {
      if (typeof num1 === "number") {
        num2 = Number(e.target.dataset.key);
        emptyArray.push(num2);
        num2 = +emptyArray.join("");
        console.log(num1, num2);
      }

      displayBox.textContent += Number(e.target.dataset.key);
    }
  });
});

// operate();
// Function takes a string or a number expression and evaluate it
// let result = displayBox.textContent;
// let finalResult = Function("return " + result)();
// displayBox.textContent = finalResult;
