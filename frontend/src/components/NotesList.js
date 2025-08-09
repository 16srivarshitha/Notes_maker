function NotesList({ notes, deleteNote }) {
  if (!notes.length) return <p>No notes yet.</p>;

  return (
    <ul style={{ listStyle: 'none', padding: 0 }}>
      {notes.map(note => (
        <li key={note._id} style={{ border: '1px solid #ccc', marginBottom: 12, padding: 16 }}>
          <h3>{note.title}</h3>
          <p>{note.content}</p>
          <button onClick={() => deleteNote(note._id)}>Delete</button>
        </li>
      ))}
    </ul>
  );
}

export default NotesList;
