const ourForm = document.querySelector('.our-form');
const timer = document.querySelector('.timer');
const ourField = document.querySelector('.our-field');
const progressBar = document.querySelector('.progress-bar');
const endMessage = document.querySelector('.end-message');
const resetBtn = document.querySelector('.reset-btn');
let pointsNeeded = document.querySelector('.points');
let mistakesAllowed = document.querySelector('.mistakes');
let problemElement = document.querySelector('.problem');
let state = {
    score: 0,
    wrongAnswers: 0
}
function updateProblem() {
    state.currentProblem = generateProblem();
    problemElement.innerHTML = `${state.currentProblem.numberOne} ${state.currentProblem.operator} ${state.currentProblem.numberTwo} `
    ourField.value = '';
    ourField.focus();
}

updateProblem();

function generateNumber(max) {
    return Math.floor(Math.random() * (max + 1))
}

function generateProblem() {
    return {
        numberOne: generateNumber(10),
        numberTwo: generateNumber(10),
        operator: ["+", "-", "x"] [generateNumber(2)]

    }
}

ourForm.addEventListener('submit', handleSubmit);

function handleSubmit(e) {
    e.preventDefault()

    let correctAnswer;
    const p = state.currentProblem;
    if (p.operator == "+") correctAnswer = p.numberOne + p.numberTwo;
    if (p.operator == "-") correctAnswer = p.numberOne - p.numberTwo;
    if (p.operator == "x") correctAnswer = p.numberOne * p.numberTwo;

    if (parseInt(ourField.value) === correctAnswer) {
        state.score++
        pointsNeeded.textContent = 10 - state.score;
        updateProblem();
        progressBar.style.transform = `scaleX(${state.score / 10})`;
        console.log(progressBar.style.transform)
    } else {
        state.wrongAnswers++ 
        mistakesAllowed.textContent = 3 - state.wrongAnswers;
        updateProblem()

    }
    checkLogic()
}

function checkLogic() {
    if (state.score === 10) {
        timer.style.visibility = 'hidden'
       setTimeout(() => {
        endMessage.innerHTML = 'Congrats, You won';
        document.body.classList.add('overlay-is-open')
        setTimeout(() => resetBtn.focus(), 331);
       }, 2000);
    } 

    if(state.wrongAnswers === 3) {
        endMessage.innerHTML = 'Sorry you lost';
        document.body.classList.add('overlay-is-open')
        setTimeout(() => resetBtn.focus(), 331);
    } 
}

resetBtn.addEventListener('click', resetGame)

function resetGame() {
    document.body.classList.remove('overlay-is-open')
    updateProblem()
    state.score = 0;
    state.wrongAnswers = 0;
    pointsNeeded.textContent = 10;
    mistakesAllowed.textContent = 3;
    progressBar.style.transform = `scaleX(${state.score / 10})`;
}

