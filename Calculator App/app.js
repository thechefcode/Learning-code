// HTML Elements
const nums = document.querySelectorAll('.num');
const operators = document.querySelectorAll('.operator');
const minusOperator = document.getElementById('minusOperator');
const screen = document.querySelector('.screen');
const equalBtn = document.getElementById('equalBtn');
const clearBtn = document.getElementById('clearBtn');
const delBtn = document.getElementById('deleteBtn');


// Button Functionality
nums.forEach((num) => {
    num.addEventListener('click', input)
    function input() {
      screen.innerText += num.innerText
      console.log(screen.innerText.length - 1)
    }
})
operators.forEach((operator) => {
    operator.addEventListener('click', input)
    function input() {
    if (screen.innerText[screen.innerText.length-1] === '+' ||
        screen.innerText[screen.innerText.length-1] === '-' ||
        screen.innerText[screen.innerText.length-1] === '*' ||
        screen.innerText[screen.innerText.length-1] === '/') {

           screen.innerText = screen.innerText

    } else if (screen.innerText === '') {
        screen.innerText = screen.innerText
    } else {
        screen.innerText += operator.innerText      
    }
    }
})

minusOperator.addEventListener('click', inputForMinus)
    
function inputForMinus() {
    if (screen.innerText[screen.innerText.length-1] === '+' ||
        screen.innerText[screen.innerText.length-1] === '-' ||
        screen.innerText[screen.innerText.length-1] === '*' ||
        screen.innerText[screen.innerText.length-1] === '/') {

           screen.innerText = screen.innerText

        } else {
        screen.innerText += minusOperator.innerText      
    }
}
clearBtn.addEventListener('click', () => {
    screen.innerText = ''
})

delBtn.addEventListener('click', () => {
    screen.innerText = screen.innerText.slice(0, -1)
})
equalBtn.addEventListener('click', () => {
    if (screen.innerText == '') {
        screen.innerText = ''
    } else {
        screen.innerText = eval(screen.innerText)
    }
})