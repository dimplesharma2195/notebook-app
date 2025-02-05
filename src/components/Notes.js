import React from "react";
import "./Notes.css";

function Notes({ filteredNotes, deleteNote, searchTermActive }) {
  return (
    <div className="notes-section">
      {!searchTermActive && <h2>Your Notes</h2>}
      {filteredNotes.length === 0 ? (
        <div className="no-notes-message">
          <p>
            {searchTermActive
              ? "No notes available with the searched name"
              : "No notes are available"}
          </p>
        </div>
      ) : (
        filteredNotes.map((note, index) => (
          <div key={index} className="note">
            <h3>{note.title}</h3>
            <p>{note.description}</p>
            <button className="delete-btn" onClick={() => deleteNote(index)}>
              Delete
            </button>
          </div>
        ))
      )}
    </div>
  );
}

export default Notes;