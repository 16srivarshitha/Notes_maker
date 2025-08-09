const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB connection
mongoose.connect('mongodb://localhost:27017/notesapp', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => console.log('MongoDB connected!'));

// Routes
const notesRouter = require('./routes/notes');
app.use('/api/notes', notesRouter);

// Listen
const PORT = 5000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
