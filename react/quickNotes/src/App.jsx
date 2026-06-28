import { useState } from 'react'
import { Modal, Title, Text, Button, MantineProvider, Group } from '@mantine/core'
import './App.css'
import Note from '../components/Note'
import NoteForm from '../components/NoteForm'
import '@mantine/core/styles.css';

function App() {
  const [notes, setNotes] = useState([]);  
  const [selectedNote, setSelectedNote] = useState(null);
  const [isEditing, setIsEditing] = useState(false); 
  
  const handleNewNote = (noteData) => {
    const options = { month: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit', hour12: true };
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
      handleCloseModal();
    }
  };

  const handleUpdateNote = (noteId, title, content) => {
    const options = { month: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit', hour12: true };
    const currentFormattedDate = new Date().toLocaleString('en-US', options);
  
    const updatedNotes = notes.map((item) => {
      if (item.id === noteId) {
        return { 
          ...item, 
          title: title,     
          content: content,
          updatedAt: currentFormattedDate 
        };
      }
      return item;
    });
  
    setNotes(updatedNotes);
    
    setSelectedNote({ 
      ...selectedNote, 
      title: title, 
      content: content,
      updatedAt: currentFormattedDate
    });

    setIsEditing(false); 
  };

  const handleCloseModal = () => {
    setSelectedNote(null);
    setIsEditing(false);
  };

  return (
    <MantineProvider>
      <div id='app-card'>
        <NoteForm onAddNote={handleNewNote} />
        
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
        onClose={handleCloseModal}
        title={<Title order={3}>{isEditing ? 'Edit Note' : (selectedNote?.title || 'Note')}</Title>}
        centered
      >
        {isEditing ? (
          <NoteForm 
            editingNote={selectedNote} 
            onUpdateNote={handleUpdateNote}
            onAddNote={handleNewNote} 
          />
        ) : (
          <>
            <Text size="xs" color="dimmed" mb="xs">Created at: {selectedNote?.date}</Text>
            
            {selectedNote?.updatedAt && (
              <Text size="xs" color="dimmed" mb="md">Last updated: {selectedNote.updatedAt}</Text>
            )}

            <Text style={{ whiteSpace: 'pre-wrap', wordBreak: 'break-word' }} mb="xl">
              {selectedNote?.content}
            </Text>

            <Group grow>
              <Button variant="light" color="blue" onClick={() => setIsEditing(true)}>
                Edit
              </Button>
              <Button variant="filled" color="gray" onClick={handleCloseModal}>
                Close
              </Button>
            </Group>
          </>
        )}
      </Modal>
    </MantineProvider>
  )
}

export default App