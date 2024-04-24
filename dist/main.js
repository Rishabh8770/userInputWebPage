"use strict";
const number1 = document.getElementById("num1");
const printButton = document.getElementById("printBtn");
const printValue = document.getElementById("enteredNumber");
function printEnteredValue() {
    const numb1 = parseFloat(number1.value);
    console.log(typeof numb1);
    printValue.textContent = numb1.toString();
    console.log(typeof printValue.textContent);
}
printButton.addEventListener('click', printEnteredValue);
//# sourceMappingURL=main.js.map