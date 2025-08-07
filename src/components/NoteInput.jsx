import { useState } from "react";
import './NoteInput.css'

export default function NoteInput({ addNote }) {
    const [text, setText] = useState('');
    const [title, setTitle] = useState('');
    const [category, setCategory] = useState('general')

    function handleAddNote() {
        addNote({ text, title, category, updated: null });
        setText('');
        setTitle('');
        setCategory('general');
    }

    return (
        <>
            <input type="text" placeholder="Title" value={title} onChange={e => setTitle(e.target.value)} />
            <textarea placeholder="Your Note..." value={text} onChange={e => setText(e.target.value)} />
            <div className="category-row">
                <label htmlFor="category">Category:</label>
                <select className={category} value={category} onChange={e => setCategory(e.target.value)} name="category" id="category">
                    <option className="general" value="General">General</option>
                    <option className="learning" value="learning">Learning</option>
                    <option className="work" value="work">Work</option>
                    <option className="goals" value="goals">Goals</option>
                </select>
            </div>
            <button onClick={handleAddNote}>Add</button>
        </>
    )
}