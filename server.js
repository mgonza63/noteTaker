const express = require("express");

const path = require("path");

const fs = require("fs");

// Initialize the app and create a port
const app = express();
const PORT = process.env.PORT || 3000;

let noteList = [];

// Set up body parsing, static, and route middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(__dirname + "Develop/public"));

// Start the server on the port
app.listen(PORT, () => console.log(`Listening on PORT: ${PORT}`));

app.get("/", function(req, res) {
    try {
        res.sendFile(path.join(__dirname, "Develop/public/index.html"));

    } catch (err) {
        console.log(err);
    }

  });

app.get("/api/notes", function(err, res) {
    try{
        noteList = fs.readFileSync("Develop/db/db.json", "utf8");
        res.sendFile(path.join(__dirname, "Develop/public/notes.html"));
        noteList = JSON.parse(noteList);

    } catch (err) {
        console.log(err);
    }
});

app.post("/api/notes", function(err, res) {
    try {
        noteList = fs.readFileSync("Develop/db/db.json", "utf8");
        noteList = JSON.parse(noteList);
        require.body.id = noteList.length;
        noteList.push(req.body);
        console.log(noteList);

        fs.writeFile("./Develop/db/db.json", noteList, "utf8", function(err) {
            if (err) throw err;
        });

        res.json(JSON.parse(noteList));


    } catch (err) {

        console.log(err);
    }
})