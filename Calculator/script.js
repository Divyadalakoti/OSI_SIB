const display = document.getElementById("display");
const buttons = document.querySelectorAll("button");

let currentInput = "";
let operator = "";
let firstOperand = null;

buttons.forEach(button => {
  button.addEventListener("click", () => {
    const buttonValue = button.textContent;
    
    if (buttonValue.match(/[0-9.]/)) {
      currentInput += buttonValue;
      display.value = currentInput;
    } else if (buttonValue === "C") {
      clear();
    } else if (buttonValue === "=") {
      calculate();
    } else {
      if (currentInput !== "") {
        if (firstOperand === null) {
          firstOperand = parseFloat(currentInput);
          operator = buttonValue;
          currentInput = "";
        }
      }
    }
  });
});

function clear() {
  currentInput = "";
  operator = "";
  firstOperand = null;
  display.value = "";
}

function calculate() {
  if (firstOperand !== null && currentInput !== "") {
    const secondOperand = parseFloat(currentInput);
    let result;

    switch (operator) {
      case "+":
        result = firstOperand + secondOperand;
        break;
      case "-":
        result = firstOperand - secondOperand;
        break;
      case "*":
        result = firstOperand * secondOperand;
        break;
      case "/":
        result = firstOperand / secondOperand;
        break;
    }

    clear();
    currentInput = result.toString();
    display.value = currentInput;
  }
}
