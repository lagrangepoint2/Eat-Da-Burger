var mysql = require("mysql");

var connection = mysql.createConnection({
  host: "qbct6vwi8q648mrn.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
  user: "uv6ip0foj5h7oong",
  password: "uesywsuhvywd0wkz",
  database: "x0vhcig5xba9tn4u"
});

connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

module.exports = connection;
