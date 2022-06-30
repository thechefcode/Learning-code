const progress = document.querySelector('.progress')
const previous = document.querySelector('.prev')
const next = document.querySelector('.next')
const two = document.querySelector('.two')
const three = document.querySelector('.three')
const four = document.querySelector('.four')
let counter = 0;

next.addEventListener('click', nextEvent) 
previous.addEventListener('click', previousEvent) 

function nextEvent() {
    counter += 65;
    if (progress.style.width === '195px') {
        progress.style.width = '195px'
    } else {
        progress.style.width = `${counter.toString()}px`
    }

    if (progress.style.width === '65px') {
        two.style.border = '2px solid red'
        two.style.color = 'red'
        previous.removeAttribute('disabled', '')

    } else if (  progress.style.width === '130px') {
        three.style.border = '2px solid red'
        three.style.color = 'red'
    } else if (progress.style.width === '195px') {
        four.style.border = '2px solid red'
        four.style.color = 'red'
        next.setAttribute('disabled', '')
        
    }
}

function previousEvent() {
    counter -= 65;
    if (progress.style.width === '0px') {
        progress.style.width = '0px'
    } else {
        progress.style.width = `${counter.toString()}px`
    }

    if (progress.style.width === '130px') {
        four.style.border = 'none'
        four.style.color = '#000'
        next.removeAttribute('disabled', '')

    } else if (  progress.style.width === '65px') {
        three.style.border = 'none'
        three.style.color = '#000'
    } else if (progress.style.width === '0px') {
        two.style.border = 'none'
        two.style.color = '#000'
        previous.setAttribute('disabled', '')
        
    }
}