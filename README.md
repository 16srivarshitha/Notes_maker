# Notes Maker – MERN Stack Web App

A full-stack note-taking web application built with React, Node.js, Express, and MongoDB, designed to create, categorize, and manage notes with a modern, responsive user interface.

---

## Features

- Create, view, and delete notes with persistent storage in MongoDB
- Category-based filtering to organize notes by subject or topic
- Responsive and modern UI with CSS animations, shadows, and smooth transitions
- Expandable note previews with "Read More"/"Show Less" for better readability
- Animated note deletion for a polished user experience
- Sidebar with dynamic categories for quick filtering
- Mobile-friendly design optimized for all screen sizes
- Full CRUD functionality demonstrating end-to-end full-stack skills

---

## Getting Started

### Prerequisites

- Node.js and npm installed
- MongoDB running locally or remotely

### Installation

1. Clone the repository:
```
git clone https://github.com/16srivarshitha/notes-maker.git
cd notes-maker
```
2. Backend setup:
  ```
cd backend
npm install
npm start
```
Ensure your MongoDB server is running.
3. Frontend setup:
```
cd ../frontend
npm install # Installs dependencies, recreating node_modules
npm start # Starts the React development server
```
4. Open your browser and visit:
```
http://localhost:3000
```

---

## Usage

1. Add a note using the form (title, content, optional category)
2. Use the sidebar to filter notes by category
3. Expand or collapse note previews with the "Read More" button
4. Delete notes with smooth fade-out animations
5. Responsive design for mobile and desktop use

---

## Project Structure
```
notes-maker/
├── backend/ # Express server and MongoDB connection
│ ├── models/ # Mongoose models (Note schema)
│ └── routes/ # RESTful API routes
├── frontend/ # React app
│ ├── components/ # NoteForm, NotesList, Sidebar
│ └── App.js
├── README.md
```
---

## Tech Stack

- Frontend: React.js, CSS3
- Backend: Node.js, Express.js
- Database: MongoDB with Mongoose
- Additional: Responsive design, CSS animations

---

## Future Enhancements

- Edit existing notes
- Tagging system for multi-category and keyword filtering
- User authentication for personalized note management
- Dark mode and additional themes
- Sharing notes between users

---


This project demonstrates the ability to design, build, and deploy a full-stack MERN application with clean UI, responsive design, and interactive features.

