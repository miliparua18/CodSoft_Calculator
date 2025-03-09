let display = document.querySelector(".Calculator input");

function appendValue(value) {
    display.value += value;
}

function clearDisplay() {
    display.value = "";
}

function deleteLast() {
    display.value = display.value.slice(0, -1);
}

function calculateResult() {
    try {
        display.value = eval(display.value);
    } catch (error) {
        alert("Invalid Expression");
    }
}

document.querySelectorAll(".Calculator button").forEach(button => {
    button.addEventListener("click", () => {
        let value = button.textContent;

        if (value === "AC") clearDisplay();
        else if (value === "DEL") deleteLast();
        else if (value === "=") calculateResult();
        else appendValue(value);
    });
});
