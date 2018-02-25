var express = require("express");
var bodyParser = require("body-parser");
var app  = express();
var exphbs = require("express-handlebars");

var PORT = process.env.PORT || 8080;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

app.engine("handlebars", exphbs({ defaultLayout: "main" }));

app.set("view engine", "handlebars");

app.listen(PORT, function(){
    console.log("I am on the port " +PORT);
});
