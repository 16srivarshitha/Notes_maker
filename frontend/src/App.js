import React, { useEffect, useState } from 'react';
import NoteForm from './components/NoteForm';
import NotesList from './components/NotesList';
import Sidebar from './components/Sidebar';
import './App.css';

function App() {
  const [allNotes, setAllNotes] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);

  // Fetch all notes once at startup and whenever a note changes
  const fetchAllNotes = async () => {
    const res = await fetch("http://localhost:5000/api/notes");
    const data = await res.json();
    setAllNotes(data);
  };
  

  useEffect(() => {
    fetchAllNotes();
  }, []);
  
  const addNote = async (note) => {
    await fetch("http://localhost:5000/api/notes", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(note),
    });
    fetchAllNotes();
    console.log(allNotes);
  };

  const deleteNote = async (id) => {
    await fetch(`http://localhost:5000/api/notes/${id}`, { method: "DELETE" });
    fetchAllNotes();
  };

  // ALL categories for sidebar come from allNotes
  const categories = Array.from(new Set(allNotes.map(n => n.category).filter(Boolean)));

  // Filtered notes: what to show based on sidebar selection
  const notesToShow = selectedCategory
    ? allNotes.filter(n => n.category === selectedCategory)
    : allNotes;
  console.log(allNotes);
  console.log('Categories:', categories);


  return (
    <div style={{ display: "flex", minHeight: "100vh" }}>
      <Sidebar
        categories={categories}
        selectedCategory={selectedCategory}
        onSelect={setSelectedCategory}
      />
      <main className="app-container" style={{ flex: 1 }}>
        <h1>Notes Maker</h1>
        <NoteForm addNote={addNote} />
        <NotesList notes={notesToShow} deleteNote={deleteNote} />
      </main>
    </div>
  );
}

export default App;
