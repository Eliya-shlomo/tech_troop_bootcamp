import { useState, useEffect } from "react";

const NoteForm = ({ onAddNote, onUpdateNote, editingNote }) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [category, setCategory] = useState("personal")



  useEffect(() => {
    if (editingNote) {
      setTitle(editingNote.title);
      setContent(editingNote.content);
      setCategory(editingNote.category)
    } else {
      setTitle("");
      setContent("");
      setCategory("personal")
    }
  }, [editingNote]);



  const handleSubmit = (e) => {
    e.preventDefault();
    if (!content.trim()) return; 

    if (editingNote) {
      onUpdateNote(editingNote.id, title, content,category);
    } else {
      onAddNote({ title, content, category });
      
      setTitle("");
      setContent("");
      setCategory("personal")
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
      <select
        id="select-input"
        onChange={(e) => setCategory(e.target.value)}
        value={category}
      >
        <option value="work">work</option>
        <option value="personal">personal</option>
      </select>
      <button type="submit">
        {editingNote ? "Save Changes" : "Add Note"}
      </button>
    </form>
  );
};

export default NoteForm;