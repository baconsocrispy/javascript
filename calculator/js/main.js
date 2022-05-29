// creates a calculator object to store attributes
const calculator = {
  displayValue: '0',
  firstOperand: null,
  checkSecondOperand: false,
  operator: null,
}

// handles control of digit entry
function inputDigit(digit)  {
  const { displayValue, checkSecondOperand } = calculator
  if (checkSecondOperand === true)  {
    calculator.displayValue = digit;
    calculator.checkSecondOperand = false;
  }
  else  {
    calculator.displayValue = displayValue === '0' ? digit : displayValue + digit;
  }
}

// handles control of decimal point
function inputDecimal(decimal)  {
  if (calculator.checkSecondOperand === true) return;
  if (!calculator.displayValue.includes(decimal)) {
    calculator.displayValue += decimal;
  }
}

// operator logic
function handleOperator(nextOperator) {
  const { firstOperand, displayValue, operator } = calculator;
  const inputValue = parseFloat(displayValue);
  if (operator && calculator.checkSecondOperand) {
    calculator.operator = nextOperator;
  }
  if (firstOperand == null) {
    calculator.firstOperand = inputValue;
  }
  else if (operator)  {
    const valueNow = firstOperand || 0;
    let result = performCalc[operator](valueNow, inputValue);
    result = Number(result).toFixed(9);
    result = (result * 1).toString();
    calculator.displayValue = parseFloat(result);
    calculator.firstOperand = parseFloat(result);
  }
  calculator.checkSecondOperand = true;
  calculator.operator = nextOperator;
}

// operation lookup
const performCalc = {
  '/': (firstOperand, secondOperand) => firstOperand / secondOperand,
  '*': (firstOperand, secondOperand) => firstOperand * secondOperand,
  '+': (firstOperand, secondOperand) => firstOperand + secondOperand,
  '-': (firstOperand, secondOperand) => firstOperand - secondOperand,
  '=': (firstOperand, secondOperand) => secondOperand
};

// resets calculator
function reset()  {
  calculator.displayValue = '0';
  calculator.firstOperand = null;
  calculator.checkSecondOperand = false;
  calculator.operator = null;
}

// updates display as numbers are entered / calculations performed
function updateDisplay() {
  const display = document.querySelector('.calculator-screen');
  display.value = calculator.displayValue;
}
updateDisplay();

// manages button interaction logic
const calcKeys = document.querySelector('.keys');
calcKeys.addEventListener('click', (event) => {
  const { target } = event;
  if (!target.matches('button'))  {
    return;
  }
  if (target.classList.contains('operator'))  {
    handleOperator(target.value);
    updateDisplay();
    return;
  }
  // Added below to include 'equal sign' operation
  if (target.classList.contains('equal')) {
    handleOperator(target.value);
    updateDisplay();
    return;
  }
  if (target.classList.contains('decimal')) {
    inputDecimal(target.value);
    updateDisplay();
    return;
  }
  if (target.classList.contains('clear')) {
    reset();
    updateDisplay();
    return;
  }
  inputDigit(target.value);
  updateDisplay();
})