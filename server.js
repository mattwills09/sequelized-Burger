
var express = require("express");

var app = express();

var PORT = process.env.PORT || 7000;

var db = require("./models");

app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

//-----------------------------

require("./routes/api-routes.js")(app);
require("./routes/html-routes.js")(app);

db.sequelize.sync().then(function() {
  app.listen(PORT, function() {
    console.log("Burger App Listening on PORT: " + PORT);
  });
});

//=========================================

// app.use(routes);
// var routes = require("./controllers/burgers_controller.js");



