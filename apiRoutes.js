var Data = require("./data.js");


module.exports = function(app) {

    app.get("/api/tables", function(req, res) {
        res.json(Data);
        for(i = 0; i < reserved.length; i++){
            $(`<div class="card" id="reservedGuy">`);
            $(`<h5 id="reserveName">`).attr(reserved[i].name);
            $("#reserveName").appendTo("#reservedGuy");
            $("#reservedGuy").appendTo("#ReservationRegion");
        }  
    });
}