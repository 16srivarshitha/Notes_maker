import React, { useEffect, useState } from 'react';
import NoteForm from './components/NoteForm';
import NotesList from './components/NotesList';

function App() {
  const [notes, setNotes] = useState([]);

  // Fetch notes from the backend
  const fetchNotes = async () => {
    const res = await fetch('http://localhost:5000/api/notes');
    const data = await res.json();
    setNotes(data);
  };

  useEffect(() => {
    fetchNotes();
  }, []);

  // Add a new note
  const addNote = async (note) => {
    await fetch('http://localhost:5000/api/notes', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(note),
    });
    fetchNotes();
  };

  // Delete a note
  const deleteNote = async (id) => {
    await fetch(`http://localhost:5000/api/notes/${id}`, {
      method: 'DELETE',
    });
    fetchNotes();
  };

  return (
    <div style={{ maxWidth: 600, margin: 'auto', padding: 32 }}>
      <h1>Notes Maker</h1>
      <NoteForm addNote={addNote} />
      <NotesList notes={notes} deleteNote={deleteNote} />
    </div>
  );
}

export default App;
