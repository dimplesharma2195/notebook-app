import React, { useState } from "react";
import Form from "./components/Form";
import Notes from "./components/Notes";
import "./App.css";

function App() {
  const [notes, setNotes] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const addNote = () => {
    if (title && description) {
      setNotes([...notes, { title, description }]);
      setTitle("");
      setDescription("");
    }
  };

  const deleteNote = (index) => {
    setNotes(notes.filter((_, i) => i !== index));
  };

  const filteredNotes = notes.filter(
    (note) =>
      note.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      note.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="app">
      <header className="app-header">
        <h1>Notebook</h1>
      </header>

      <div className="search-bar">
        <i className="search-icon">🔍</i>
        <input
          type="text"
          placeholder="Search your notes"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      <div className="notes-counter">
        <p>Total Notes: {notes.length}</p>
        <p>
          Showing: {searchTerm.trim() ? filteredNotes.length : notes.length}
        </p>
      </div>

      <Form
        title={title}
        setTitle={setTitle}
        description={description}
        setDescription={setDescription}
        addNote={addNote}
      />

      <Notes
        filteredNotes={filteredNotes}
        deleteNote={deleteNote}
        isSearching={!!searchTerm.trim()}
      />
    </div>
  );
}

export default App;
