export function loadNotesFromStorage() {
    let loadedNotes = window.localStorage.getItem('notes');
    if (loadedNotes) {
        try {
            loadedNotes = JSON.parse(loadedNotes);
            if (loadedNotes) {
                formatNotes(loadedNotes);
                return loadedNotes;
            }
            else return [];
        }
        catch (err) {
            console.error('unable to parse json from local storage, error: ', err);
            return [];
        }
    }
    else return []
}

export function saveNotesToStorage(notes) {
    const notesJson = JSON.stringify(notes);
    console.log(notesJson);
    window.localStorage.setItem('notes', JSON.stringify(notes));

}

function formatNotes(notes) {
    notes.forEach(note => {
        note.date = new Date(note.date);
        if (note.updated) {
            note.updated = new Date(note.updated);
        }
    })
    console.log('finished formatting');
}