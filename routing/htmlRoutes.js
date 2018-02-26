var path = require("path");

module.exports = function(app){

    app.get("/", function (req,res) {
        res.sendFile(path.join(__dirname,"/../public/index.html"))
    })

    app.get("/greenz",function(req,res){
        res.sendFile(path.join(__dirname,"/../public/greenz.html"));
    })

    app.get("/topten",function(req,res){
        res.sendFile(path.join(__dirname,"/../public/topten.html"));
    })

    app.get("/account",function(req,res){
        res.sendFile(path.join(__dirname,"/../public/account.html"));
    })
}
