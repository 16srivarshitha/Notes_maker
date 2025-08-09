const express = require('express');
const Note = require('../models/Note');
const router = express.Router();

// Get all notes
router.get('/', async (req, res) => {
  const notes = await Note.find().sort({ createdAt: -1 });
  res.json(notes);
});

// Create a note
router.post('/', async (req, res) => {
  try {
    const { title, content, category } = req.body;
    const newNote = new Note({ title, content, category });
    await newNote.save();
    res.json(newNote);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Delete a note
router.delete('/:id', async (req, res) => {
  await Note.findByIdAndDelete(req.params.id);
  res.json({ success: true });
});

module.exports = router;
