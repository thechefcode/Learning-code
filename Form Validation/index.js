const choice = document.querySelector('.choice');
const employee = document.querySelector('.employee');
const hirer = document.querySelector('.hirer');
const firstName = document.getElementById('name')
const surname = document.getElementById('surname')
const password = document.getElementById('password')
const confirmPassword = document.getElementById('confirm')
const emailInput = document.getElementById('email')
const phoneInput = document.getElementById('phone')
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
        feedback.innerText = 'Name cannot contain a number'
    }
})
password.addEventListener('input', () => {
        if (password.value.length < 8) {
            password.style.borderColor = 'red'
            feedback.innerText = 'passwords must be 8 characters long'
        } else {
            password.style.borderColor = 'greenyellow'
            feedback.innerText =''
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

 function validateEmail (email) {
        return email.match(
          /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        );
    };
emailInput.addEventListener('input', () => {
   
    if (validateEmail(emailInput.value)) {
        emailInput.style.borderColor = 'greenyellow'
        feedback.innerText = ''
    } else {
        emailInput.style.borderColor = 'red'
        feedback.innerText = 'Email is invalid'
    }

})
phoneInput.addEventListener('click', () => {
    if(phoneInput.value.includes('+')) {
        if (phoneInput.value.length < 13) {
            phoneInput.style.borderColor ='red';
            feedback.innerText = `Phone too short ${13 - phoneInput.value.length} digits left`
        } else {
            phoneInput.style.borderColor = 'greenyellow';
            feedback.innerText = '';
        }
    } else {
        phoneInput.style.borderColor ='red';
        feedback.innerText = 'phone must start with +'
    }
})