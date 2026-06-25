import React from 'react';

const Note = ({ note, onDeleteNote }) => {

    const deleteNote = (idNote) => {
        const isConfirmed = window.confirm("Are you sure you want to delete this note?");
        
        if (isConfirmed) {
            onDeleteNote(idNote); 
        }
    };

    return (
        <div className='note-card'>
            <p>{note.content}</p>
            <small>{note.date}</small> 
            
            <button id='button-delete' onClick={() => deleteNote(note.id)}>
                Delete Note
            </button>
        </div>
    );
};

export default Note;