import { useState } from 'react'
import { Modal, Title, Text, Button, MantineProvider } from '@mantine/core'
import './App.css'
import Note from '../components/Note'
import NoteForm from '../components/NoteForm'
import '@mantine/core/styles.css';


function App() {
  const [notes, setNotes] = useState([]);  
  const [selectedNote, setSelectedNote] = useState(null);

  const handleNewNote = (noteData) => {
    const options = {
      month: 'short',   
      day: 'numeric',   
      hour: '2-digit', 
      minute: '2-digit',
      hour12: true      
    };
  
    const dateWithTime = new Date().toLocaleString('en-US', options);

    const newNote = {
      id : Date.now(),
      title: noteData.title, 
      content: noteData.content,
      date: dateWithTime
    }

    setNotes([newNote, ...notes]);
  }

  const handleDeleteNote = (noteId) => {
    const updatedNotes = notes.filter((item) => item.id !== noteId);
    setNotes(updatedNotes);
    
    if (selectedNote?.id === noteId) {
      setSelectedNote(null);
    }
  };

  return (
    <MantineProvider>
      <div id='app-card'>
        <NoteForm onAddNote={handleNewNote}></NoteForm>
        
        <div className="notes-container">
          {notes.map((item)=>(
            <div key={item.id} onClick={() => setSelectedNote(item)} style={{ cursor: 'pointer' }}>
              <Note note={item} onDeleteNote={handleDeleteNote}></Note>
            </div>
          ))}
        </div>
      </div>

      <Modal
        opened={selectedNote !== null}
        onClose={() => setSelectedNote(null)}
        title={<Title order={3}>{selectedNote?.title || 'Note'}</Title>}
        centered
      >
        <Text size="xs" color="dimmed" mb="md">Created at: {selectedNote?.date}</Text>
        <Text style={{ whiteSpace: 'pre-wrap', wordBreak: 'break-word' }}>
          {selectedNote?.content}
        </Text>
        <Button fullWidth onClick={() => setSelectedNote(null)} mt="xl">
          Close
        </Button>
      </Modal>
    </MantineProvider>
  )
}

export default App