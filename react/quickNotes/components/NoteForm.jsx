import { useState, useEffect } from "react";

const NoteForm = ({ onAddNote, onUpdateNote, editingNote }) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  useEffect(() => {
    if (editingNote) {
      setTitle(editingNote.title);
      setContent(editingNote.content);
    } else {
      setTitle("");
      setContent("");
    }
  }, [editingNote]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!content.trim()) return; 

    if (editingNote) {
      onUpdateNote(editingNote.id, title, content);
    } else {
      onAddNote({ title, content });
      
      setTitle("");
      setContent("");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="note-form">
      <input
        type="text"
        placeholder="Note Title (Optional)..."
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="title-input"
      />
      
      <textarea
        placeholder="Take a note..."
        value={content}
        onChange={(e) => setContent(e.target.value)}
        required
      />
      <button type="submit">
        {editingNote ? "Save Changes" : "Add Note"}
      </button>
    </form>
  );
};

export default NoteForm;