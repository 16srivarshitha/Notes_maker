import React, { useState } from 'react';

function NoteForm({ addNote }) {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title && !content) return;
    addNote({ title, content });
    setTitle('');
    setContent('');
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: 24 }}>
      <input
        type="text"
        placeholder="Title"
        value={title}
        required
        onChange={e => setTitle(e.target.value)}
        style={{ width: '100%', marginBottom: 8 }}
      />
      <textarea
        placeholder="Content"
        value={content}
        required
        onChange={e => setContent(e.target.value)}
        style={{ width: '100%', marginBottom: 8, minHeight: 60 }}
      />
      <button type="submit">Add Note</button>
    </form>
  );
}

export default NoteForm;
