// Import the ORM to create functions that will interact with the database.
var orm = require("../config/orm.js");

var burger = {
  all: function(bur) {
    orm.all("burgers", function(res) {
      bur(res);
    });
  },
  // The variables cols and vals are arrays.
  create: function(cols, vals, bur) {
    orm.create("burgers", cols, vals, function(res) {
      bur(res);
    });
  },
  update: function(objColVals, condition, bur) {
    orm.update("burgers", objColVals, condition, function(res) {
      bur(res);
    });
  },
  delete: function(condition, bur) {
    orm.delete("burgers", condition, function(res) {
      bur(res);
    });
  }
};

// Export the database functions for the controller
module.exports = burger;
