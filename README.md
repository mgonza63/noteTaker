# Note Taker

##    
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## Description 
    
This application made with Express allows you to take notes and it saves them when you create them. Heroku link https://note-tkr.herokuapp.com/

I thought this was the post request was the best part of this project
```
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
```

    
## Table of Contents
    
    
* [Installation](#installation)
* [Usage](#usage)
* [Credits](#credits)
* [License](#license)
    
    
## Installation
    
npm i
    
## Usage 
    
It is pretty self explanatory click the "get started" button and start taking notes
    
## Credits
    
Express, Bootstrap, Util, Axios
    
## License
    
MIT

## Tests

npm test

## Contributing



![My Avatar](https://avatars2.githubusercontent.com/u/57790156?v=4)

