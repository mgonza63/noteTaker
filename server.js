const express = require("express");
const db = require("./Develop/db/db.json");

const path = require("path");

const fs = require("fs");

// Initialize the app and create a port
const app = express();
const PORT = process.env.PORT || 3000;

let noteList = [];

// Set up body parsing, static, and route middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static("Develop/public"));

// Start the server on the port
app.listen(PORT, () => console.log(`Listening on PORT: ${PORT}`));


app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "Develop/public/index.html"));
  });


app.get("/notes", function(req, res) {
    res.sendFile(path.join(__dirname, "Develop/public/notes.html"));
  });

app.get("/api/notes", function(err, res) {
    try{
        // noteList = fs.readFileSync("Develop/db/db.json", "utf8");
        noteList = JSON.parse(fs.readFileSync("Develop/db/db.json", "utf8"));
        // res.sendFile(path.join(__dirname, "Develop/public/notes.html"));
        // console.log(noteList);
        // noteList = JSON.parse(noteList);

    } catch (err) {
        console.log(err);
    }
    res.json(noteList);
});

app.post("/api/notes", function(req, res) {
    try {
        noteList = JSON.parse(fs.readFileSync("Develop/db/db.json", "utf8"));
        // noteList = JSON.parse(noteList);
        req.body.id = noteList.length;
        noteList.push(req.body);
        // console.log(noteList);

        fs.writeFile("./Develop/db/db.json", noteList, "utf8", function(err) {
            if (err) throw err;
        });

        res.json(noteList);


    } catch (err) {

        console.log(err);
    }
});

app.delete("/api/notes/:id", function(req, res) {
    let noteId = req.params.id;

    fs.readFile("./Develop/db/db.json", "utf8", (err, data) => {
      if (err) throw err;

      const allNotes = JSON.parse(data);
      const newAllNotes = allNotes.filter(note => note.id != noteId);

      fs.writeFile("./Develop/db/db.json", JSON.stringify(newAllNotes, null, 2), err => {
        if (err) throw err;
        res.send(db);
        console.log("Note deleted!")
    });
});

});