let emailInput = document.getElementById('email')
let passwordInput = document.getElementById('password')
let feedback = document.getElementById('feedback')
let form = document.getElementById('form')
console.log(form);

form.addEventListener('submit', submit)

function submit(e) {
    e.preventDefault();
    if (emailInput.value == '') {
        feedback.innerText = "Email can't be empty";
        setTimeout(() => {
            feedback.innerText = ''
        }, 2000);
    } else if (passwordInput.value == '') {
        feedback.innerText = "password can't be empty";
        setTimeout(() => {
            feedback.innerText = ''
        }, 2000);
    } else if (passwordInput.value.length < 8) {
        feedback.innerText = `Password Should be 8 characters long, you have entered ${passwordInput.value.length}, ${8 - passwordInput.value.length} characters more`
        setTimeout(() => {
            feedback.innerText = ''
        }, 2000);
    }
}