var reserved = require("./data.js");
var waiting = require("./waiting.js")


module.exports = function(app) {

    app.get("/api/tables", function(req, res) {
        res.json(reserved);
    });

    app.get("/api/waiting", function(req, res) {
        res.json(waiting);
    });

    // Create New Characters - takes in JSON input
    app.post("/reserve", function(req, res) {
        // req.body hosts is equal to the JSON post sent from the user
        // This works because of our body parsing middleware
        var newCharacter = req.body;

        // Using a RegEx Pattern to remove spaces from newCharacter
        // You can read more about RegEx Patterns later https://www.regexbuddy.com/regex.html
        // newCharacter.routeName = newCharacter.name.replace(/\s+/g, "").toLowerCase();

        console.log(newCharacter);

        if (reserved.length < 5) {
            reserved.push(newCharacter);
        } else {
            waiting.push(newCharacter);
        }

    });
}