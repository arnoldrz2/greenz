// Dependencies
var express = require("express");
var router = express.Router();

// Import the model (user.js) to use its database functions.
var user = require("../models/user.js");

// Create the routes
router.get("/", function(req, res) {
    res.render("index");
});
router.get("/strains", function(req, res) {
    res.render("strains");
});
router.get("/topten", function(req, res) {
    res.render("topten");
});
router.get("/account", function(req, res) {
    res.render("account");
});


// router.get("/", function(req, res) {
//     user.all(function(data) {
//         var hbsObject = {
//             users: data
//         };
//         console.log(hbsObject);
//         res.render("index", hbsObject);
//     });
// });

router.post("/users", function(req, res) {
    user.create([
        "user_name",
        "user_email"
    ],[
        req.body.user_name,
        req.body.user_email
    ], function(data) {
        res.render("account");
    });
});

// router.put("/users/:id", function(req, res) {
//     var condition = "id = " + req.params.id;
    
//     user.update({
//         favorite_strain: **(user selected strain name; pulled from api)**
//     }, condition, function(data) {
//         res.redirect("/");
//     });
// });

// Export routes for server.js to use.
module.exports = router;