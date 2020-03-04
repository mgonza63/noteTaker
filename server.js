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
app.use(express.static("public"));

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
        res.sendFile(path.join(__dirname, "Develop/public/notes.html"));

    } catch (err) {
        console.log(err)
    }
});