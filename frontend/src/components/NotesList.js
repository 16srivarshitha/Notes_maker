import React, { useState } from 'react';

const MAX_PREVIEW = 150;

function NotesList({ notes, deleteNote }) {
  const [expanded, setExpanded] = useState(null);
  const [removingId, setRemovingId] = useState(null);

  const handleDelete = (id) => {
    setRemovingId(id);
    setTimeout(() => {
      deleteNote(id);
      setRemovingId(null);
    }, 300);
  };

  if (!notes.length)
    return (
      <div className="empty-state">
        <h3>📝 No notes found</h3>
        <p>Start by creating your first note above!</p>
      </div>
    );

  return (
    <div className="notes-container">
      <ul style={{ listStyle: 'none', padding: 0 }}>
        {notes.map(note => (
          <li 
            key={note._id} 
            className={`note-card${removingId === note._id ? " removing" : ""}`}
          >
            {/* Category Badge */}
            {note.category && (
              <div className="note-category-badge">
                {note.category}
              </div>
            )}

            {/* Optional Date */}
            <div className="note-date">
              {note.updatedAt 
                ? `Last edited: ${new Date(note.updatedAt).toLocaleDateString()}`
                : `Created: ${new Date().toLocaleDateString()}`
              }
            </div>

            <h3>{note.title || "Untitled Note"}</h3>

            <p>
              {expanded === note._id
                ? note.content
                : (note.content.length > MAX_PREVIEW
                  ? note.content.slice(0, MAX_PREVIEW).trim() + "..." 
                  : note.content)
              }
            </p>

            <div className="note-actions">
              {note.content.length > MAX_PREVIEW && (
                <button
                  type="button"
                  onClick={() => setExpanded(expanded === note._id ? null : note._id)}
                >
                  {expanded === note._id ? "Show Less" : "Read More"}
                </button>
              )}
              <button onClick={() => handleDelete(note._id)}>
                🗑️ Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default NotesList;
