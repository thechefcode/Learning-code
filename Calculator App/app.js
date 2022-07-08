const nums = document.querySelectorAll('.num')
const operators = document.querySelectorAll('.operator')
const screen = document.querySelector('.screen')
const equal = document.getElementById('equal')
const clear = document.getElementById('clear')


nums.forEach((num) => {
    num.addEventListener('click', input)
    function input() {
      screen.innerText += num.innerText
    }
})
operators.forEach((operator) => {
    operator.addEventListener('click', input)
    function input() {
    screen.innerText += operator.innerText      
    }
})
equal.addEventListener('click', () => {
    screen.innerText = eval(screen.innerText)
})
clear.addEventListener('click', () => {
    screen.innerText = ''
})