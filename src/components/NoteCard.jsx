import './NoteCard.css'

export default function NoteCard({ note, removeNote, displayNote }) {

    function handleRemoveClick(e) {
        e.stopPropagation();
        removeNote()
    }


    return (
        <div className={`note-card ${note.category}`} onClick={displayNote}>
            <div className="header">
                {/* <span className="date">{note.date.toDateString()}</span> */}
                <button className='remove-button' onClick={e => handleRemoveClick(e)}>X</button>
            </div>
            <div className="content">
                <h3>{note.title}</h3>
                <p>{note.text}</p>
            </div>

            <div className="date">
                Created: {note.date.toDateString()}
            </div>

            {note.updated &&
                <div className='date'>Updated: {note.updated.toDateString()}</div>
            }

            <div className={`category-block`}>{note.category}</div>

        </div>
    )
}