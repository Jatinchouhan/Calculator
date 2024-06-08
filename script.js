function clearDisplay() {
    document.getElementById('result').value = '0';
}

function deleteLast() {
    const display = document.getElementById('result');
    if (display.value.length > 1) {
        display.value = display.value.slice(0, -1);
    } else {
        display.value = '0';
    }
}

function appendCharacter(char) {
    const display = document.getElementById('result');
    if (display.value === '0' && char !== '.') {
        display.value = char;
    } else {
        display.value += char;
    }
}

function calculateResult() {
    const display = document.getElementById('result');
    try {
        display.value = eval(display.value);
    } catch (e) {
        display.value = 'Error';
    }
}
