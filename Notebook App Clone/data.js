dataBackup.addEventListener('click', showPopup);
dataImport.addEventListener('click', showPopup);

const noOption = document.querySelectorAll('#noOption');
const yesOption = document.querySelectorAll('#yesOption');

noOption[0].addEventListener ('click', () => {
    popup1.style.display = 'none'
    dataBackup.addEventListener('click', showPopup);
    dataImport.addEventListener('click', showPopup);
})
noOption[1].addEventListener ('click', () => {
    popup2.style.display = 'none'
    dataBackup.addEventListener('click', showPopup);
    dataImport.addEventListener('click', showPopup);
})

yesOption[0].addEventListener ('click', () => {
    popup1.style.display = 'none'
    const backUp = document.getElementById('backUp');
    backUp.style.opacity = '1';
    backUp.innerText = 'Data successfully backed up'
    setTimeout(() => {
        backUp.style.opacity = '0';
    }, 4000);
    dataBackup.addEventListener('click', showPopup);
    dataImport.addEventListener('click', showPopup);
})
yesOption[1].addEventListener ('click', () => {
    popup2.style.display = 'none'
    const backUp = document.getElementById('backUp');
    backUp.style.opacity = '1';
    backUp.innerText = 'Import completed Successfully'
    setTimeout(() => {
        backUp.style.opacity = '0';
    }, 4000);
    dataBackup.addEventListener('click', showPopup);
    dataImport.addEventListener('click', showPopup);
})

function showPopup(e) {
    if(e.target === dataBackup) {
            popup1.style.display = 'block'
            dataBackup.removeEventListener('click', showPopup);
            dataImport.removeEventListener('click', showPopup);
    } else {
            popup2.style.display = 'block'
            dataBackup.removeEventListener('click', showPopup);
            dataImport.removeEventListener('click', showPopup);
    }
}

auto.addEventListener('click', () => {
    if(selector.style.left === '0px') {
        selector.style.left = '42%';
        auto.style.backgroundColor = 'rgba(225, 225, 225, 0.3)'
    } else {
        selector.style.left = '0px';
        auto.style.backgroundColor = 'rgba(0, 0, 0, 0.3)'
    }
})
