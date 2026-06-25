import { useState } from 'react'
import './App.css'
import Note from '../components/Note'
import NoteForm from '../components/NoteForm'

function App() {
  
  const [notes, setNotes] = useState([]);  

  const handleNewNote = (newContent) => {
    
    const options = {
      month: 'short',   
      day: 'numeric',   
      minute: '2-digit',
      hour12: true      
  };
  
    const dateWithTime = new Date().toLocaleString('en-US', options);

    const newNote = {
      id : Date.now(),
      content: newContent,
      date: dateWithTime
    }

    setNotes([newNote, ...notes]);
  }


  const handleDeleteNote = (noteId) => {
    
    const updatedNotes = notes.filter((item) => item.id !== noteId);
    
    setNotes(updatedNotes);
  };


  return (
    <>
      <div id='app-card'>
        <NoteForm onAddNote={handleNewNote}></NoteForm>
        <div className="notes-container">
          {notes.map((item)=>(
            <Note key={item.id} note={item} onDeleteNote={handleDeleteNote}></Note>
          ))}
        </div>
      </div>
    </>
  )
}

export default App
