
var db = require("../models");

module.exports = function(app) {
    
//Load index page
    app.get("/", function(req, res) {
        db.Burger.findAll({}).then(function(results) {
            res.render("index", {
                burgers: results
            });
        });
});

    // app.get("*", function(req, res) {
    //     res.render("404");
    // });

};