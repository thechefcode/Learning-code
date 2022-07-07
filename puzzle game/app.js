// HTML Elements
const pieceContainers = Array.from(document.querySelectorAll('.piece_container'))
const emptyContainer = document.querySelector('.empty')
const pieces = Array.from(document.querySelectorAll('.piece'))
const restartBtn = document.querySelector('.restart')
let winScreen = document.querySelector('.win_screen');

window.addEventListener('load', generateRandomInterface)
restartBtn.addEventListener('click', generateRandomInterface)


function generateRandomInterface() {
    if (winScreen.style.display == 'flex') {
        winScreen.style.display = 'none'
    }
    let randomNumbers = []
    while (randomNumbers.length < 8) { 
        let r = Math.floor(Math.random() * 8) + 1
        if (randomNumbers.indexOf(r) === -1) randomNumbers.push(r)
    }
    
    for (let i = 0; i < pieces.length; i++) {
        pieces[i].innerText = randomNumbers[i]    
    }
    window.addEventListener('keydown', controls)
}


function controls(e) {

    const topRow = [pieceContainers[0], pieceContainers[1], pieceContainers[2]];
    const middleRow = [pieceContainers[3], pieceContainers[4], pieceContainers[5]];
    const bottomRow = [pieceContainers[6], pieceContainers[7], emptyContainer];

    switch(e.key)  {
        case 'ArrowLeft': 
            moviePiece(topRow[0], topRow[1], topRow[2]);
            moviePiece(middleRow[0], middleRow[1], middleRow[2]);
            moviePiece(bottomRow[0], bottomRow[1], bottomRow[2]);
            checkWin()
            break;
        case 'ArrowRight':
            moviePiece(topRow[2], topRow[1], topRow[0]);
            moviePiece(middleRow[2], middleRow[1], middleRow[0]);
            moviePiece(bottomRow[2], bottomRow[1], bottomRow[0]);
            checkWin()
            break;

        case 'ArrowUp':
            moviePiece(topRow[2], middleRow[2], bottomRow[2])
            moviePiece(topRow[1], middleRow[1], bottomRow[1])
            moviePiece(topRow[0], middleRow[0], bottomRow[0])
            checkWin()
            break;
            
        case 'ArrowDown':
            moviePiece(bottomRow[2], middleRow[2], topRow[2])
            moviePiece(bottomRow[1], middleRow[1], topRow[1])
            moviePiece(bottomRow[0], middleRow[0], topRow[0])
            checkWin()
            break;
    }


    function moviePiece(firstBox, secondBox, thirdBox) {
        if (firstBox.innerHTML == '') {
            firstBox.innerHTML = secondBox.innerHTML;
            secondBox.innerHTML = '';
        } else if (secondBox.innerHTML  == '') {
            secondBox.innerHTML = thirdBox.innerHTML;
            thirdBox.innerHTML = '';
    }
}
}
    
function checkWin() {
    if (pieceContainers[0].innerText == 1 && pieceContainers[1].innerText == 2 &&
        pieceContainers[2].innerText == 3 && pieceContainers[3].innerText == 4 && 
        pieceContainers[4].innerText == 5 && pieceContainers[5].innerText == 6 && 
        pieceContainers[6].innerText == 7 && pieceContainers[7].innerText == 8) {
       
        window.removeEventListener('keydown',controls)
        setTimeout(() => {
            winScreen.style.display = 'flex'
        }, 1000);
    }
    
}