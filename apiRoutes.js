var Data = require("./data.js");


module.exports = function(app) {

    app.get("/api/tables", function(req, res) {
        res.json(Data);
    });
}