"use strict";

const displayBox = document.querySelector(".value-container");
const buttonNumbers = document.querySelectorAll(".button-divs");
let num1;
let num2;

console.log(buttonNumbers);
displayBox.textContent = "";
buttonNumbers.forEach((button) => {
  button.addEventListener("click", (e) => {
    e.preventDefault();
    if (e.target.dataset.key === "clear") {
      displayBox.textContent = "";
    } else if (e.target.dataset.key === "+") {
      displayBox.textContent += "+";
    } else if (e.target.dataset.key === "-") {
      displayBox.textContent += "-";
    } else if (e.target.dataset.key === "*") {
      displayBox.textContent += "*";
    } else if (e.target.dataset.key === "/") {
      displayBox.textContent += "/";
    } else if (e.target.dataset.key === "=") {
      // operate();
      let result = displayBox.textContent;
      let finalResult = Function("return " + result)();
      console.log(finalResult);
    } else displayBox.textContent += Number(e.target.dataset.key);
  });
});

// creating function

function add(num1, num2) {
  return num1 + num2;
}
console.log(add(3, 5));
function subtract() {}
function multiply() {}
function divide() {}

function operate(operator, num1 = 0, num2 = 0) {
  if (operator === "+") {
    return add(num1, num2);
  }
}

// const expression = "2+4";
// const res = Function("return " + expression)();
// console.log(res);
