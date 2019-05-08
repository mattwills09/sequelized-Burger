
// var Burger = require("../models/burger.js");
var db = require("../models");

module.exports = function(app) {

    app.get("/api/burgers", function(req, res) {
        db.Burger.findAll({}).then(function(results) {
            res.json(results);
        });
    });

    app.post("/api/bugers", function(req, res) {
        console.log("Burger Data: ");
        console.log(req.body);

        db.Burger.create({
            burger_name: req.body.burger_name,
            devoured: req.body.devoured
        }).then(function(results) {
            res.json(results);
        });
    });

    app.put("/api/burgers/:id", function(req, res) {
        console.log("Updating Burger: ");
        console.log(req.body.id);

        db.Burger.update({
            burger_name: req.body.burger_name,
            devoured: req.body.devoured
        }, {
            where: {
                id: req.body.id
            }
        }).then(function(results) {
            res.json(results);
        });
    });

    app.delete("/api/burgers/:id", function(req, res) {
        db.Burger.destroy({
            where: {
                id: req.params.id
            }
        }).then(function(results) {
            res.json(results);
        });
    });

};

//==========================================

// var express = require("express");

// var router = express.Router();

// var Character = require("../models/burger.js");

// //===== GET ALL =======================
// router.get("/", function(req, res) {
//     burger.all(function(data) {
//         var newBurger = {
//             burgers: data
//         };
//         console.log(newBurger);
//         res.render("index", newBurger);
//     });
// });

// //===== ADD BURGER ==================
// router.post("/api/burgers", function(req, res) {
//     burger.create([
//         "burger_name", "devoured"
//     ], [
//         req.body.burger_name, req.body.devoured
//     ], function(result) {
//         res.json({ id: result.insertId });
//     });
// });

// //===== UPDATE BURGER ===============
// router.put("/api/burgers/:id", function(req, res) {
//     var condition = "id = " + req.params.id;

//     console.log("Condition: ", condition);
//     console.log(req.body.devoured);
    
//     burger.update({
//         devoured: req.body.devoured
//     }, condition, function(result) {
//         if (result.changedRows == 0) {
//             return res.status(404).end();
//         } else {
//             res.status(200).end();
//         }
//     });
// });

// //===== DELETE BURGER ===============
// router.delete("/api/burgers/:id", function(req, res) {
//     var condition = "id = " + req.params.id;

//     console.log("Condition: ", condition);
//     console.log(req.body.id);

//     burger.delete(condition, function(result) {
//         if (result.affectedRows == 0) {
//             return res.status(404).end();
//         } else {
//             res.status(200).end();
//         }
//     });
// });

// module.exports = router;