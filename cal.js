// Get references to the input fields and buttons
let num1 = document.getElementById('num1');
let num2 = document.getElementById('num2');
let submitButton = document.getElementById('submit');
let plusButton = document.getElementById('plus');
let minusButton = document.getElementById('minus');
let multiplyButton = document.getElementById('multiply');
let divideButton = document.getElementById('divide');

// Function to get the input values as numbers
function getInputValues() {
    return {
        value1: parseFloat(num1.value),
        value2: parseFloat(num2.value)
    };
}

// Function to add values
function add() {
    let { value1, value2 } = getInputValues();
    alert(value1 + value2);
}

// Function to subtract values
function minus() {
    let { value1, value2 } = getInputValues();
    alert(value1 - value2);
}

// Function to multiply values
function multiply() {
    let { value1, value2 } = getInputValues();
    alert(value1 * value2);
}

// Function to divide values
function divide() {
    let { value1, value2 } = getInputValues();
    if (value2 !== 0) {
        alert(value1 / value2);
    } else {
        alert("Cannot divide by zero");
    }
}

// // Attach event listeners to buttons
// plusButton.addEventListener('click', add);
// minusButton.addEventListener('click', minus);
// multiplyButton.addEventListener('click', multiply);
// divideButton.addEventListener('click', divide);
