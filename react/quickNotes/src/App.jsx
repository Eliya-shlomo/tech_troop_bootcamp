import { useState } from 'react'
import './App.css'
import Note from '../components/Note'
import NoteForm from '../components/NoteForm'

function App() {
  
  const [notes, setNotes] = useState([]);  

  const handleNewNote = (newContent) => {
    
    const newNote = {
      id : Date.now(),
      content: newContent,
      date: new Date().toLocaleDateString('he-IL')
    }

    setNotes([newNote, ...notes]);
  }


  return (
    <>
      <div id='app-card'>
        <NoteForm onAddNote={handleNewNote}></NoteForm>
        <div className="notes-container">
          {notes.map((item)=>(
            <Note key={item.id} note={item}></Note>
          ))}
        </div>
      </div>
    </>
  )
}

export default App
