import { useState,useEffect } from 'react'
import { Modal, Title, Text, Button, MantineProvider, Group } from '@mantine/core'
import './App.css'
import Note from '../components/Note'
import NoteForm from '../components/NoteForm'
import '@mantine/core/styles.css';

function App() {

  const [notes, setNotes] = useState(() => {
    try {
      const saved = localStorage.getItem('notes');
      return saved ? JSON.parse(saved) : [];
    } catch (error) {
      console.error("Failed to parse notes:", error);
      return [];
    }
  });
  
  useEffect(() => {
    
    localStorage.setItem('notes', JSON.stringify(notes));
  }, [notes]);


  const [selectedNote, setSelectedNote] = useState(null);
  const [isEditing, setIsEditing] = useState(false); 
  const [searchTerm, setSearchTerm] = useState("")
  const [categoryFilter,setCategoryFilter] = useState("All")


  const searchedNotes = notes.filter(note => {
    const matchesSearch = note.title.includes(searchTerm) || note.content.includes(searchTerm);
    const matchesCategory = categoryFilter === "All" || note.category === categoryFilter;
    return matchesSearch && matchesCategory;
  });



  const handleNewNote = (noteData) => {
    const options = { month: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit', hour12: true };
    const dateWithTime = new Date().toLocaleString('en-US', options);

    const newNote = {
      id : Date.now(),
      title: noteData.title, 
      content: noteData.content,
      category: noteData.category,
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

  const handleUpdateNote = (noteId, title, content ,category) => {
    const options = { month: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit', hour12: true };
    const currentFormattedDate = new Date().toLocaleString('en-US', options);
  
    const updatedNotes = notes.map((item) => {
      if (item.id === noteId) {
        return { 
          ...item, 
          title: title,     
          content: content,
          category: category,
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
      category: category,
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
      <button onClick={() => setCategoryFilter("All")}>All</button>
      <button onClick={() => setCategoryFilter("personal")}>Personal</button>
      <button onClick={() => setCategoryFilter("work")}>Work</button>
      <input 
        value={searchTerm} 
        onChange={(e) => setSearchTerm(e.target.value)} 
      />
        <NoteForm onAddNote={handleNewNote} />
        <div className="notes-container">
          {searchedNotes.map((item)=>(
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




