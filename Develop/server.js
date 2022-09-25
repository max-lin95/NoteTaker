const PORT = process.env.PORT || 3000;
const fs = require('fs');
const path = require('parth');
const express = require('express');
const app = express();
const noteReq = require('./db/db.json');

app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(express.static('public'));

app.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, './develop/public/notes.html'));
});

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, './develop/public/index.html'));
});

app.get('/api/notes', (req, res) => {
    res.json(noteReq.slice(1));
});

function enterNewNote(body, notesArray) {
    const newNote = body;
    if (!Array.isArray(notesArray))
        notesArray = [];
    if (notesArray.length === 0)
        notesArray.push(0);

    body.id = notesArray[0];
    notesArray[0]++;

    notesArray.push(newNote);
    fs.writeFileSync(
        path.join(__dirname, './develop/db/db.json'),
        JSON.stringify(notesArray, null, 2)
    );

    return newNote;
};