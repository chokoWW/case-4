function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    if (b === 0) {
        throw new Error("Ошибка: деление на ноль невозможно!");
    }
    return a / b;
}


const num1Input = document.getElementById("num1");
const num2Input = document.getElementById("num2");
const resultDisplay = document.getElementById("result-display");

const btnSum = document.getElementById("btn-sum");
const btnSub = document.getElementById("btn-sub");
const btnMul = document.getElementById("btn-mul");
const btnDiv = document.getElementById("btn-div");


function parseInputNumbers() {
    const rawVal1 = num1Input.value.trim().replace(",", ".");
    const rawVal2 = num2Input.value.trim().replace(",", ".");

    if (rawVal1 === "" || rawVal2 === "") {
        throw new Error("Ошибка: заполните оба поля ввода!");
    }

    const n1 = Number(rawVal1);
    const n2 = Number(rawVal2);

    if (isNaN(n1) || isNaN(n2)) {
        throw new Error("Ошибка: введены некорректные данные (не цифры)!");
    }

    return [n1, n2];
}

function calculate(operationFunction) {
    try {
        const [a, b] = parseInputNumbers();
        const result = operationFunction(a, b);

        const finalResult = Number.isInteger(result) ? result : Number(result.toFixed(6));

        resultDisplay.textContent = finalResult;
        resultDisplay.className = "result-box success";
    } catch (error) {
        resultDisplay.textContent = error.message;
        resultDisplay.className = "result-box error";
    }
}


btnSum.addEventListener("click", () => calculate(add));
btnSub.addEventListener("click", () => calculate(subtract));
btnMul.addEventListener("click", () => calculate(multiply));
btnDiv.addEventListener("click", () => calculate(divide));
