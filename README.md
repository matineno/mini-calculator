# iOS Theme Calculator

Welcome to the iOS Theme Calculator project! This simple calculator app is designed with an iOS-inspired theme, providing a familiar and user-friendly interface for basic arithmetic operations.

## Features

- Clean and intuitive iOS-themed user interface.
- Support for addition, subtraction, multiplication, and division.
- Responsive design for all web devices.

## Tutorial

In this tutorial, we are going to learn how to make a simple calculator with HTML, CSS and Javascript

### Step 1: HTML Structure
Create the basic elements for html head tag and add the following to the page body

```html
<div class="container">
    <div class="calculator">
            <form>
                <div class="display">
                    <input type="text" name="display" disabled>
                </div>
                <div>
                    <input type="button" value="AC" class="ac-btn">
                    <input type="button" class="plus-or-minus-btn" value="±">
                    <input type="button" class="percentage-btn" value="%">
                    <input type="button" class="symbols" value="/">
                </div>
                <div>
                    <!-- 2nd button row -->
                </div>
                <div>
                    <!-- 3nd button row -->
                </div>
                <div>
                    <!-- 4nd button row -->
                </div>
                <div>
                    <!-- 5nd button row -->
                </div>
            </form>
    </div>
</div>
```

Repeat the div for the rest button row respectively till the last row. You can view code for more info and tips.

### Step 2: CSS Styling
For the style, I made mine look like the ios calculator with the colors, buttons and borders. You can change yours according to your style.

### Step 3: JavaScript logic
JavaScript does all the calculation and listens to know the particular operation the user is performing at the particular time. I acheive that with a simple condition statement in an event listener. See code below

```JavaScript
document.addEventListener('DOMContentLoaded', function() {
    const display = document.querySelector('[name="display"]');
    const buttons = document.querySelectorAll('input[type="button"]');

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
```

## Installation

1. Clone this repository to your local machine:

```bash
git clone https://github.com/matineno/mini-calculator.github.io.git
```

2. Open the project folder in VSCode.

3. Build and run the project on your device.

## Usage

1. Launch the iOS Theme Calculator app on your device.

2. Perform calculations using the familiar arithmetic buttons (+, -, *, /).

3. View the result displayed on the screen.

4. Clear the input by tapping the "C" button.

## Demo

Click [here](https://matineno.github.io/mini-calculator.github.io/) to test your application

## Screenshot

![Main Screenshot](screenshot.png)

## Contributing

Contributions are welcome! If you'd like to contribute to this project, please follow these steps:

1. Fork the repository.

2. Create a new branch (`git checkout -b feature/your-feature-name`).

3. Commit your changes (`git commit -am 'Add some feature'`).

4. Push to the branch (`git push origin feature/your-feature-name`).

5. Create a new Pull Request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
