
module.exports = function(sequelize, DataTypes) {
    var Burger = sequelize.define("Burger", {
        burger_name: DataTypes.STRING,
        devoured: DataTypes.BOOLEAN
    });
    
    return Burger;
}



// var orm = require("../config/orm.js");
// var Sequelize = require("sequelize");

// var sequelize = require("../config/connection.js");

// var Burger = sequelize.define("burgers", {
//     burger_name: Sequelize.STRING,
//     devoured: Sequelize.STRING
// });

// Burger.sync();

// module.exports = Burger;


//==========================================


// var burger = {
//     selectAll: function(cb) {
//         orm.selectAll("burgers", function(res) {
//             cb(res);
//         });
//     },
//     insertOne: function(cols, vals, cb) {
//         orm.insertOne("burgers", cols, vals, function(res) {
//             cb(res);
//         });
//     },
//     updateOne: function(objColVals, condition, cb) {
//         orm.updateOne("burgers", objColVals, condition, function(res) {
//             cb(res);
//         });
//     },
//     deleteOne: function(condition, cb) {
//         orm.deleteOne("burgers", condition, function(res) {
//             cb(res);
//         });
//     }
// };

// module.exports = burger;
