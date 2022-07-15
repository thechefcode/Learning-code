
function saveNote() {
    if((noteInput.value != '') && (title.value != '')) {
//    delete localStorage.savedNotes;
    let tempArray = []
    //notes.appendChild(notesArray[notesArray.length-1]);
    let notesObject = {title: title.value,content:noteInput.value,'date':new Date()}
    console.log(notesObject);
    if(localStorage['savedNotes']){
        console.log('raw data',localStorage['savedNotes'])
        let getObjectArray = JSON.parse(localStorage['savedNotes']);
        console.log(getObjectArray);
        getObjectArray.push(notesObject);
        localStorage.setItem('savedNotes',JSON.stringify(getObjectArray.reverse()));
        console.log('Updated notes', getObjectArray);
    } else {

        tempArray.push(notesObject);
        let finalData = JSON.stringify(tempArray);
        localStorage.setItem('savedNotes',finalData);
    }
}
}

