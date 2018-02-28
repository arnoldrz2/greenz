var orm = require('../config/orm.js');

//Create Burger Object
var strain = {
    //Select all burger table entries
    all: function(cb) {
        orm.all("top_strains", function(res) {
            cb(res);
        });
    },

    // The variable cols and cals are arrays
    create: function(cols, vals, cb) {
        orm.create("top_strains", cols, vals, function(res) {
            cb(res);
        });
    },

    update: function(objColVals, condition, cb) {
        orm.update("top_strains", objColVals, condition, function(res) {
          cb(res);
        });
      },

    delete: function(condition, cb) {
        orm.delete("top_strains", condition, function(res) {
          cb(res);
        });
      }
    };

//Export the database functions
module.exports = strain;