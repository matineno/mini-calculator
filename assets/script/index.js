document.addEventListener('DOMContentLoaded', function() {
    const display = document.querySelector('[name="display"]');
    const buttons = document.querySelectorAll('input[type="button"]');

    buttons.forEach(button => {
        button.addEventListener('click', function() {
            const value = this.value;
            if (value === 'AC') {
                display.value = '';
            } else if (value === 'Del') {
                display.value = display.value.slice(0, -1);
            } else if (value === '=') {
                display.value = eval(display.value);
            } else {
                display.value += value;
            }
        });
    });
});