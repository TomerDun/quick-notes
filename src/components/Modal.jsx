import NoteCard from "./NoteCard";
import './Modal.css'
import DisplayedNoteCard from "./DisplayedNoteCard";

export default function Modal({note, setDisplayedNote, updateNote}) {
    return (
        <div onClick={() => setDisplayedNote(null)} className="modal">
            <DisplayedNoteCard setDisplayedNote={setDisplayedNote} updateNote={updateNote} note={note}/>
        </div>
    )
}