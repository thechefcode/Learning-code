if (localStorage.password === undefined) {
    current.style.display = 'none';
    removeBtn.style.display = 'none';
    formSaveBtn.addEventListener('click', setPassword)

    function setPassword() {
        if (newPassword.value < 4) {
            backup.style.opacity = '1';
            backup.innerText = 'Must be 4 characters';
            setTimeout(() => {
                backup.style.opacity = '0';
            }, 4000);
        }
        else if (newPassword.value !== confirm.value) {
            backup.style.opacity = '1';
            backup.innerText = 'Passwords do not match';
            setTimeout(() => {
                backup.style.opacity = '0';
            }, 4000);
        } else {
            backup.style.opacity = '1';
            backup.innerText = 'Your password was successfully created';
            let continueBtn = document.createElement('a');
            continueBtn.setAttribute('href', 'index.html');
            continueBtn.className = 'continueBtn';
            continueBtn.innerHTML = 'Continue'
            console.log(continueBtn)
            form.insertBefore(continueBtn, backup)

            localStorage.setItem('password', newPassword.value)
            
        }
    }
} else {
    let currentPassword = +localStorage.password;
    removeBtn.addEventListener('click', () => {
        if(+current.value !== currentPassword) {
            backup.style.opacity = '1';
            backup.innerText = 'Your password was enterted incorrectly';
            setTimeout(() => {
                backup.style.opacity = '0';
            }, 4000);
        } else {
            backup.style.opacity = '1';
            backup.innerText = 'Your password was successfully removed';

            let continueBtn = document.createElement('a');
            continueBtn.setAttribute('href', 'index.html');
            continueBtn.className = 'continueBtn';
            continueBtn.innerHTML = 'Continue'
            console.log(continueBtn)
            form.insertBefore(continueBtn, backup)

            localStorage.removeItem('password');
        }
    });
    

    formSaveBtn.addEventListener('click', changePassword);
    function changePassword() {
        if(+current.value !== currentPassword ) {
            console.log(typeof current.value)
            backup.style.opacity = '1';
            backup.innerText = 'Your password was enterted incorrectly';
            setTimeout(() => {
                backup.style.opacity = '0';
            }, 4000);
        } else if (newPassword.value < 4) {
            backup.style.opacity = '1';
            backup.innerText = 'Must be 4 characters';
            setTimeout(() => {
                backup.style.opacity = '0';
            }, 4000);
        }
        else if (newPassword.value !== confirm.value) {
            backup.style.opacity = '1';
            backup.innerText = 'Passwords do not match';
            setTimeout(() => {
                backup.style.opacity = '0';
            }, 4000);
        } else {
            backup.style.opacity = '1';
            backup.innerText = 'Password successfully changed';
            localStorage.password = newPassword.value
            console.log(currentPassword)
        }
    }
}

