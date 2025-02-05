# notebook-app
A simple React-based notebook app that allows users to create, view, search, and delete notes. The application features a responsive design, search functionality, and a clean, user-friendly interface.

# Features
Add Notes: Add a new note with a title and description.
View Notes: View a list of all notes you’ve added.
Search Notes: Search notes by title or description in real-time.
Delete Notes: Delete individual notes with a single click.
Responsive UI: Clean design with user-friendly elements.

# Project Structure:
notebook-app/
│
├── public/
│   └── index.html        # HTML template for the app
│
├── src/
│   ├── components/       # React components
│   │   ├── Form.js       # Note creation form
│   │   ├── Form.css      # Styling for Form component
│   │   ├── Notes.js      # Notes display and search functionality
│   │   └── Notes.css     # Styling for Notes component
│   ├── App.js            # Main application logic
│   ├── App.css           # Styling for App component
│   ├── index.css         # Global styles
│   └── index.js          # App entry point
│
├── package.json          # Project dependencies and scripts
├── README.md             # Documentation (you are here!)
└── .gitignore            # Ignored files for Git
