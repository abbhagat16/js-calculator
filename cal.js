


const display = document.querySelector('input[name="display"]');
const buttons = document.querySelectorAll('.button');

let currentInput = '';

buttons.forEach(button => {
  button.addEventListener('touchstart', () => {
    const value = button.textContent;

    switch (value) {
      case 'AC':
        currentInput = '';
        break;
      case 'C':
        currentInput = currentInput.slice(0, -1);
        break;
      case '%':
        currentInput = (parseFloat(currentInput) / 100).toString();
        break;
      case '=':
        try {
          currentInput = eval(currentInput).toString();
        } catch {
          currentInput = 'Error';
        }
        break;
      default:
        currentInput += value;
        break;
    }

    display.value = currentInput;
  });
});



