"use strict";

const displayBox = document.querySelector(".value-container");
const buttonNumbers = document.querySelectorAll(".button-divs");
let num1;
let num2;
let operator;
let emptyArray = [];

console.log(buttonNumbers);
displayBox.textContent = "";
buttonNumbers.forEach((button) => {
  button.addEventListener("click", (e) => {
    e.preventDefault();
    if (e.target.dataset.key === "clear") {
      num1 = "";
      num2 = "";
      operator = "";
      displayBox.textContent = "";
    } else if (e.target.dataset.key === "+") {
      num1 = +displayBox.textContent;
      displayBox.textContent += "+";
      emptyArray = [];
    } else if (e.target.dataset.key === "-") {
      num1 = +displayBox.textContent;
      displayBox.textContent += "-";
      emptyArray = [];
    } else if (e.target.dataset.key === "*") {
      displayBox.textContent += "*";
    } else if (e.target.dataset.key === "/") {
      displayBox.textContent += "/";
    } else if (e.target.dataset.key === "=") {
      console.log(displayBox.textContent);
      if (displayBox.textContent.includes("+")) {
        console.log(add(num1, num2));
      }
      if (displayBox.textContent.includes("-")) {
        console.log(subtract(num1, num2));
      }

      emptyArray = [];
    } else {
      // to assign a number to num2
      if (typeof num1 === "number") {
        num2 = Number(e.target.dataset.key);
        emptyArray.push(num2);
        num2 = +emptyArray.join("");
        console.log(num2);
      }
      displayBox.textContent += Number(e.target.dataset.key);
    }
  });
});

// creating function

// we need to find a way to populate the operate function
// for loop might be key

function add(num1, num2) {
  return num1 + num2;
}
console.log(add(3, 5));

function subtract(num1, num2) {
  return num1 - num2;
}
function multiply() {}
function divide() {}

function operate(operator, num1, num2) {
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
  }
}
console.log(operate("-", 7, 5));
console.log(operate(7, "+", 5));
// const expression = "2+4";
// const res = Function("return " + expression)();
// console.log(res);

// operate();
// Function takes a string or a number expression and evaluate it
// let result = displayBox.textContent;
// let finalResult = Function("return " + result)();
// displayBox.textContent = finalResult;
function testingArray(string) {
  let array = string.split("");
  let num1, num2, operator;

  for (let i = 0; i < array.length; i++) {
    if (isNaN(+array[i]) === false) {
      num1 = +array[i];
    } else if (isNaN(+array[i]) === true) {
      operator = array[i];
    }

    if (typeof num1 === "number") {
      // num2 = array[i];
    }
    // console.log(isNaN(+array[i]));
  }
  return [num1, operator, num2];
}
console.log(testingArray("1/2"));
// console.log(isNaN(+"1"));
