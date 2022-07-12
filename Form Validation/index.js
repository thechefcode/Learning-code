const choice = document.querySelector('.choice');
const employee = document.querySelector('.employee');
const hirer = document.querySelector('.hirer');
const firstName = document.getElementById('name')
const surname = document.getElementById('surname')
const password = document.getElementById('password')
const confirmPassword = document.getElementById('confirm')
const feedback = document.getElementById('feedback')
const myForm = document.forms[0];

employee.addEventListener('click', () => {
    employee.classList.add('active')
    hirer.classList.remove('active')
})
hirer.addEventListener('click', () => {
    hirer.classList.add('active')
    employee.classList.remove('active')
})
firstName.addEventListener('input', () => {
    if(firstName.value === '') {
        firstName.style.borderColor = 'black'
    } else if (isNaN(firstName.value)) {
        firstName.style.borderColor = 'greenyellow'
    }
    else {
        firstName.style.borderColor = 'red'
    }
})
surname.addEventListener('input', () => {
    if(surname.value === '') {
        surname.style.borderColor = 'black'
    } else if (isNaN(surname.value)) {
        surname.style.borderColor = 'greenyellow'
    }
    else {
        surname.style.borderColor = 'red'
    }
})
password.addEventListener('input', () => {
    let specialCharacters = ['~', '!', '@', '#', '$', '%', '^', '&', '*', '(', ")", "-", '=', '+', '?', '/']
    for (i in specialCharacters) {
        if (password.value.includes(i) && password.value.length < 8 && password.value.includes(Number)) {
            password.style.borderColor = 'greenyellow'
        } else {
            password.style.borderColor = 'red'
        }
    } 
    if (password.value !== confirmPassword.value) {
        feedback.innerText = 'Passwords do not match';
    }
})
confirmPassword.addEventListener('input', () => {
    if (confirmPassword.value !== password.value) {
        confirmPassword.style.borderColor = 'red'
        feedback.innerText = 'Passwords do not match'    
    } else {
        confirmPassword.style.borderColor = 'greenyellow'
        feedback.innerText = ''    
    }
})