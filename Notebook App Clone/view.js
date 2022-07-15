   function renderNotes(note) {
    
    let date = new Date(note.date)
    let dateContainer = document.createElement('div');
    dateContainer.className = 'date'
    let noteElement = document.createElement('div');
    noteElement.setAttribute('class', 'note primary');
    let day = document.createElement('span');
    let month = document.createElement('span');
    let year = document.createElement('span');
    day.textContent = date.getDate();
    month.textContent = date.toLocaleString('default',{month: 'long'});
    year.textContent = date.getFullYear();
    dateContainer.appendChild(day)
    dateContainer.appendChild(month)
    dateContainer.appendChild(year)
    
    let noteOverview = document.createElement('div');
    let title = document.createElement('p');
    title.textContent = note.title;
    let small = document.createElement('p');
    small.textContent = note.content;
    
    noteOverview.appendChild(title)
    noteOverview.appendChild(small)
    
    noteElement.appendChild(dateContainer);
    noteElement.appendChild(noteOverview);

    // notes.appendChild(noteElement);
    notes.innerHTML = noteElement.innerHTML;
   }

   function init () { boxBurger.addEventListener('click', () => {
    listBurger.style.display = 'block';
    boxBurger.style.display = 'none';
    
    const nt = document.querySelectorAll('.note')
    for (i = 0; i < nt.length; i++) {
        nt[i].classList.remove('primary');
    }

    notes.classList.remove('primary');
    notes.classList.add('secondary');
})

listBurger.addEventListener('click', () => {

    const nt = document.querySelectorAll('.note')
    for (i = 0; i < nt.length; i++) {
        nt[i].classList.add('primary');
    }
    notes.classList.add('primary');
    notes.classList.remove('secondary');



    boxBurger.style.display = 'grid';
    listBurger.style.display = 'none';
   
})
   }

sortBtn.addEventListener('click', () => {
    if (sortContainer.style.display === 'block') {
        sortContainer.style.display = 'none';
    } else {
        sortContainer.style.display = 'block';
    }
})
window.onload = function () {
    if (localStorage['savedNotes']) {
        let savedNotes = JSON.parse(localStorage['savedNotes']);
        console.log(savedNotes);
        savedNotes.forEach(note => {
            let date = new Date(note.date)
            let dateContainer = document.createElement('div');
            dateContainer.className = 'date'
            let noteElement = document.createElement('div');
            noteElement.setAttribute('class', 'note primary');
            let day = document.createElement('span');
            let month = document.createElement('span');
            let year = document.createElement('span');
            day.textContent = date.getDate();
            month.textContent = date.toLocaleString('default',{month: 'long'});
            year.textContent = date.getFullYear();
            dateContainer.appendChild(day)
            dateContainer.appendChild(month)
            dateContainer.appendChild(year)
            
            let noteOverview = document.createElement('div');
            let title = document.createElement('p');
            title.textContent = note.title;
            let small = document.createElement('p');
            small.textContent = note.content;
            
            noteOverview.appendChild(title)
            noteOverview.appendChild(small)
            
            noteElement.appendChild(dateContainer);
            noteElement.appendChild(noteOverview);

            notes.appendChild(noteElement)
        });
        
    } else {
        notes.textContent = 'No notes Found'
    }
   
    init()
}

function searchNotes() {
    if (searchInput.value != '') {
        if (localStorage['savedNotes']) {
            let savedNotes = JSON.parse(localStorage['savedNotes']);
            console.log(savedNotes)
            let seachedNotes = [];
            savedNotes.forEach(note => {
                if (searchInput.value == note.title) {
                        // seachedNotes.push(note);
                        renderNotes(note);
                } 
            })
            if (seachedNotes.length > 0) {
                console.log(seachedNotes)
            }
        } 
    }
}