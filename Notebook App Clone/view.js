    boxBurger.addEventListener('click', () => {
    listBurger.style.display = 'block';
    boxBurger.style.display = 'none';

    notes.classList.remove('primary');
    note[0].classList.remove('primary');
    note[1].classList.remove('primary');
    notes.classList.add('secondary');

    noteOverview[0].removeChild(small[0]);
    noteOverview[1].removeChild(small[1]);

    note[0].insertBefore(noteOverview[0], date[0])
    note[1].insertBefore(noteOverview[1], date[1])
})
listBurger.addEventListener('click', () => {
    boxBurger.style.display = 'grid';
    listBurger.style.display = 'none';
    
    notes.classList.add('primary');
    note[0].classList.add('primary');
    note[1].classList.add('primary');
    notes.classList.remove('secondary');

    noteOverview[0].appendChild(small[0]);
    noteOverview[1].appendChild(small[1]);
    
    note[0].insertBefore(date[0], noteOverview[0])
    note[1].insertBefore(date[1], noteOverview[1])
   
})

sortBtn.addEventListener('click', () => {
    if (sortContainer.style.display === 'block') {
        sortContainer.style.display = 'none';
    } else {
        sortContainer.style.display = 'block';
    }
})
