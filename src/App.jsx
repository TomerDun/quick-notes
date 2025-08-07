import { useEffect, useState } from 'react';
import './App.css'
import NoteInput from './components/NoteInput'
import NoteCard from './components/NoteCard';
import Modal from './components/Modal';
import { loadNotesFromStorage, saveNotesToStorage } from '../utils/storageHandler';
import SearchBar from './components/SearchBar';

function App() {

  const [notes, setNotes] = useState([]);
  const [displayedNote, setDisplayedNote] = useState(null); //index / null
  const [loadedFromStorage, setLoadedFromStorage] = useState(false);

  const [filterQuery, setFitlerQuery] = useState('');
  const [filterCategory, setFilterCategory] = useState('');


  useEffect(() => {

    // First mount
    if (!loadedFromStorage) {
      let loadedNotes = loadNotesFromStorage();
      console.log('Loaded notes: ', loadedNotes);
      setNotes(loadedNotes)

      setLoadedFromStorage(true);
    }

    else { // other mounts
      console.log('saving notes to storage--');
      
      saveNotesToStorage(notes);
    }
  }, [notes])
  

  function addNote(note) {
    const newNote = { ...note };
    newNote.date = new Date();    
    setNotes(notes.concat(newNote));
  }

  function removeNote(index) {
    setNotes(notes.filter((note, i) => i !== index));
  }

  function updateNote(newNote,) {
    const newNotes = [...notes];
    newNotes[displayedNote] = newNote;
    setNotes(newNotes);
  }

  return (
    <>
        {displayedNote !== null && <Modal updateNote={updateNote} setDisplayedNote={setDisplayedNote} note={notes[displayedNote]} />}
      <div className="outside-container">

        <div className="input-container">
          <NoteInput addNote={addNote} />
        </div>

        <SearchBar filterCategory={filterCategory} setFilterCategory={setFilterCategory} filterQuery={filterQuery} setFilterQuery={setFitlerQuery}/>

        <div className="notes-container">
          {
            notes.filter(note => {
              if (filterCategory && note.category !== filterCategory) return false;
              return (note.title.includes(filterQuery) || note.text.includes(filterQuery))
            }).map((note, i) => <NoteCard displayNote={() => setDisplayedNote(i)} key={i} removeNote={() => removeNote(i)} note={note} />)
          }          
        </div>
      </div>
    </>
  )
}

export default App
