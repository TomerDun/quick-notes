import { useState } from 'react'
import './NoteCard.css'

export default function DisplayedNoteCard({ note, updateNote, setDisplayedNote }) {
    const [titleInput, setTitleInput] = useState(note.title);
    const [textInput, setTextInput] = useState(note.text);
    const [categoryInput, setCategoryInput] = useState(note.category)

    function handleUpdate() {
        const newNote = {
            title: titleInput,
            text: textInput,
            category: categoryInput,
            updated: new Date(),
            date: note.date,
        }

        updateNote(newNote);
        setDisplayedNote(null);
    }

    return (
        <div className="displayed-note-card" onClick={e => e.stopPropagation()}>
            <input type="text" value={titleInput} onChange={e => setTitleInput(e.target.value)} className="title" />

            <input type="text" value={textInput} onChange={e => setTextInput(e.target.value)} className="text" />


            <div className="category-row">
                <label htmlFor="category">Category:</label>
                <select className={categoryInput} value={categoryInput} onChange={e => setCategoryInput(e.target.value)} name="category" id="category">
                    <option className="general" value="general">General</option>
                    <option className="learning" value="learning">Learning</option>
                    <option className="work" value="work">Work</option>
                    <option className="goals" value="goals">Goals</option>
                </select>
            </div>

            <button onClick={handleUpdate} className="update-btn">Update</button>
        </div>
    )
}