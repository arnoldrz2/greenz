// Dependencies 
var express = require("express");
var bodyParser = require("body-parser");
var methodOverride = require("method-override");

var PORT = process.env.PORT || 8080;

var app  = express();

// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static("public"));

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json, text, api json(?)
app.use(bodyParser.json());
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

//Set MethodOverride
app.use(methodOverride("_method"));

// Set Handlebars.
var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Import routes and give the server access to them.
var routes = require("./controllers/greenzrouter.js");

app.use(routes);

app.listen(PORT, function(){
    console.log("Listening to port:" + PORT);
});