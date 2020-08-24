// Dependencies
var express = require("express");
var mysql = require("mysql");

// Create express app instance.
var app = express();

// Set the port of our application
// process.env.PORT lets the port be set by Heroku
var PORT = process.env.PORT || 8080;

// MySQL DB Connection Information (remember to change this with our specific credentials)
var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: process.env.MYSQL_KEY,
  database: "seinfeld_db",
});

// Initiate MySQL Connection.
connection.connect(function (err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

// Routes
app.get("/cast", function (req, res) {
  // If the main route is hit, then we initiate a SQL query to grab all records.
  // All of the resulting records are stored in the variable "result."
  connection.query("SELECT * FROM actors ORDER BY ID", function (err, result) {
    if (err) throw err;
    // We then begin building out HTML elements for the page.
    var html = "<h1> Actors </h1>";

    // Here we begin an unordered list.
    html += "<ul>";

    // We then use the retrieved records from the database to populate our HTML file.
    for (var i = 0; i < result.length; i++) {
      html += "<li><p> ID: " + result[i].id + "</p>";
      html += "<p>actor: " + result[i].actor_name + " </p>";
      html += "<p>coolness: " + result[i].coolness + " </p>";
      html += "<p>attitude: " + result[i].attitude + " </p></li>";
    }

    // We close our unordered list.
    html += "</ul>";

    // Finally we send the user the HTML file we dynamically created.
    res.send(html);
  });
});

app.get("/coolness-chart", function (req, res) {
  connection.query("SELECT * FROM actors ORDER BY coolness", function (err, result) {
    if (err) throw err;
    var html = "<h1> Actor Coolness </h1>";
    html += "<ul>";
    for (var i = 0; i < result.length; i++) {
      html += "<li><p> ID: " + result[i].id + "</p>";
      html += "<p>actor: " + result[i].actor_name + " </p>";
      html += "<p>coolness: " + result[i].coolness + " </p>";
      html += "<p>attitude: " + result[i].attitude + " </p></li>";
    }
    html += "</ul>";
    res.send(html);
  });
});

app.get("/attitude-chart/:att", function (req, res) {
    let att = req.params.att;
    console.log("params", req.params);
    connection.query("SELECT * FROM actors WHERE attitude=?", att, function (err, result) {

      if (err) throw err;
      var html = "<h1> Actor Attitude </h1>";
      html += "<ul>";
      for (var i = 0; i < result.length; i++) {
        html += "<li><p> ID: " + result[i].id + "</p>";
        html += "<p>actor: " + result[i].actor_name + " </p>";
        html += "<p>coolness: " + result[i].coolness + " </p>";
        html += "<p>attitude: " + result[i].attitude + " </p></li>";
      }
      html += "</ul>";
      res.send(html);
    });
  });

// Start our server so that it can begin listening to client requests.
app.listen(PORT, function () {
  // Log (server-side) when our server has started
  console.log("Server listening on: http://localhost:" + PORT);
});
