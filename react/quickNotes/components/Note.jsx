import React from 'react';

const Note = ({note}) => {
    return (
        <>
            <div className='note-card'>
                <p>{note.content}</p>
            </div>
        </>
    );
};

export default Note;