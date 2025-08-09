import React, { useState } from 'react';

function NoteForm({ addNote }) {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [category, setCategory] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title && !content) return;
    addNote({ title, content, category });
    setTitle('');
    setContent('');
    setCategory('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Title"
        value={title}
        required
        onChange={e => setTitle(e.target.value)}
      />
      <textarea
        placeholder="Your note here..."
        value={content}
        required
        onChange={e => setContent(e.target.value)}
      />
      <input
        type="text"
        placeholder="Category (e.g., Math, CS101, Science)"
        value={category}
        onChange={e => setCategory(e.target.value)}
      />
      <button type="submit">Add Note</button>
    </form>
  );
}

export default NoteForm;
