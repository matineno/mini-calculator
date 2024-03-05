document.addEventListener('DOMContentLoaded', function() {
    const display = document.querySelector('[name="display"]');
    const buttons = document.querySelectorAll('input[type="button"]');

// Functions that makes the operators work
    buttons.forEach(button => {
        button.addEventListener('click', function() {
            const value = this.value;
            if (value === 'AC') {
                display.value = '';
            } else if (value === '±') {
                display.value = (display.value * -1);
            } else if (value === '=') {
                display.value = eval(display.value);
            } else if (value === '%') {
                display.value = (display.value / 100);
            } else {
                display.value += value;
            }
        });
    });
});