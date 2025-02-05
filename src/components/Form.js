import React from "react";
import "./Form.css";

function Form({ title, setTitle, description, setDescription, addNote }) {
  return (
    <div className="form">
      <label htmlFor="note-title">
        <strong>Title:</strong>
      </label>
      <input
        id="note-title"
        type="text"
        placeholder="Enter Your Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <label htmlFor="note-description">
        <strong>Description:</strong>
      </label>
      <textarea
        id="note-description"
        placeholder="Enter Your Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      ></textarea>
      <button className="add-note-btn" onClick={addNote}>
        Add Notes
      </button>
    </div>
  );
}

export default Form;