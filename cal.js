
Share


You said:
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Calculator</title>
    <link rel="stylesheet" href="cal.css">
</head>
<body>
 <div class="main">
   
   <div class="container">
      <div class="calculator">
        <div class="display">
            <input type="text" name="display">
        </div>
        <div class="row">
            <button class="button">AC</button>
            <button class="button">C</button>
            <button class="button">%</button>
            <button class="button">/</button>

            <div class="row">
                <button class="button">7</button>
                <button class="button">8</button>
                <button class="button">9</button>
                <button class="button">*</button>
            </div>

            <div class="row">
                <button class="button">4</button>
                <button class="button">5</button>
                <button class="button">6</button>
                <button class="button">-</button>
            </div>

            <div class="row">
                <button class="button">1</button>
                <button class="button">2</button>
                <button class="button">3</button>
                <button class="button">+</button>
            </div>

            
            <div class="row">
                <button class="button">0</button>
                <button class="button">.</button>
                <button class="button" style="width: 112px;">=</button>
               
            </div>
        </div>
      </div>
   </div>
</div>   


   <script src="cal.js"></script> 
</body>
</html>
*{
    font-family: Arial, sans-serif;
    margin: 0;
    padding: 0;   
   
}

.main{
    display: flex;
    justify-content: center;
    text-align: center;
    align-items: center;
    margin: 120px;
}
.container{
    display: flex;
    flex-wrap: wrap;
    background-color:rgb(136, 159, 187);
    height: 450px;
    width: 280px;
    border-radius: 10px;
 }


.calculator{
   margin-top: 20px;
   background-color:  rgb(136, 159, 187);
}

.row{
    display: flex;
    flex-wrap: wrap;
}

.button{
    font-size: 20px;
    margin: 12px;
    height: 44px;
    width: 46px;
    background-color: rgb(236, 201, 0);
    border-radius: 10px;
}

.display input{
    width: 250px;
   height: 50px;
   margin: 10px;
   border-radius: 4px;
   border: 2px solid black;

}
@media screen and (max-width: 400px) {
    .container {
        max-width: 90%;
    }
    
    .display input {
        font-size: 22px;
        height: 55px;
    }

    .button {
        font-size: 18px;
        height: 45px;
        margin: 6px;
    }

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
