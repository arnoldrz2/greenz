var orm = require('../config/orm.js');

//Create Burger Object
var user = {
    //Select all burger table entries
    all: function(cb) {
        orm.all("users", function(res) {
            cb(res);
        });
    },

    // The variable cols and cals are arrays
    create: function(cols, vals, cb) {
        orm.create("users", cols, vals, function(res) {
            cb(res);
        });
    },

    update: function(objColVals, condition, cb) {
        orm.update("users", objColVals, condition, function(res) {
          cb(res);
        });
      },

    delete: function(condition, cb) {
        orm.delete("users", condition, function(res) {
          cb(res);
        });
      }
    };
    

//Export the database functions
module.exports = user;
