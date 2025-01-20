let calculatorScreen = document.getElementById('calculator-screen');
let currentInput = '';

function appendNumber(number) {
    currentInput += number;
    calculatorScreen.value = currentInput;
}

function appendOperator(operator) {
    currentInput += ' ' + operator + ' ';
    calculatorScreen.value = currentInput;
}

function calculate() {
    try {
        currentInput = eval(currentInput.replace(/[^-()\d/*+.]/g, ''));
        calculatorScreen.value = currentInput;
    } catch (error) {
        calculatorScreen.value = 'Error';
        currentInput = '';
    }
}

function clearScreen() {
    currentInput = '';
    calculatorScreen.value = '';
}