let display = document.getElementById('display');
let darkModeEnabled = false;

function appendNumber(num) {
  display.textContent += num;
}

function appendOperator(operator) {
  display.textContent += ` ${operator} `;
}

function appendDecimal() {
  if (!display.textContent.includes('.')) {
    display.textContent += '.';
  }
}

function clearDisplay() {
  display.textContent = '';
}

function calculate() {
  try {
    display.textContent = eval(display.textContent);
  } catch (error) {
    display.textContent = 'Error';
  }
}

function toggleDarkMode() {
  darkModeEnabled = !darkModeEnabled;
  document.body.classList.toggle('dark-mode', darkModeEnabled);
}

function toggleSign() {
  let currentDisplay = display.textContent;
  if (currentDisplay.charAt(0) === '-') {
    display.textContent = currentDisplay.slice(1);
  } else {
    display.textContent = '-' + currentDisplay;
  }
}
