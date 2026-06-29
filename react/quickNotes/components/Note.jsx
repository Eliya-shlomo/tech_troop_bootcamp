import React from 'react';

const Note = ({ note, onDeleteNote }) => {

    const deleteNote = (e, idNote) => {
        e.stopPropagation(); 
        
        const isConfirmed = window.confirm("Are you sure you want to delete this note?");
        
        if (isConfirmed) {
            onDeleteNote(idNote); 
        }
    };


    const categoryColors = {
        personal: "#d6e9ff",  
        work: "#ffe0c2",      
      };

    return (
        <div className='note-card' style={{ backgroundColor: categoryColors[note.category] }}>
            {note.title && <h3 className="note-title">{note.title}</h3>}
            
            <p className="note-content">{note.content}</p>
            <small className="note-date">{note.date}</small> 
            
            <button id='button-delete' onClick={(e) => deleteNote(e, note.id)}>
                Delete Note
            </button>
        </div>
    );
};

export default Note;