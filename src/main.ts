const number1 = document.getElementById("num1") as HTMLInputElement;
const printButton = document.getElementById("printBtn") as HTMLButtonElement;
const printValue = document.getElementById("enteredNumber") as HTMLOutputElement;

function printEnteredValue(): void {
    const numb1 = parseFloat(number1.value);
    console.log(typeof numb1)
    printValue.textContent = numb1.toString();
    console.log(typeof printValue.textContent);
    
}

printButton.addEventListener('click', printEnteredValue);