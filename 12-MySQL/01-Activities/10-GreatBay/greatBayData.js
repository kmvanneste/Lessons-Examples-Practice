var mysql = require("mysql");
var inquirer = require("inquirer");

var connection = mysql.createConnection({
  host: "localhost",

  // Your port; if not 3306
  port: 3306,

  // Your username
  user: "root",

  // Your password
  password: process.env.MYSQL_KEY,
  database: "greatBay_db"
});

connection.connect(function(err) {
    if (err) throw err;
    console.log("connected as id " + connection.threadId + "\n");
    userPrompt();
  });

  function userPrompt () {
        inquirer
          .prompt([
            {
              type: "list",
              choices: ["post an item?", "bid on an item?", "Exit"],
              message: "Would you like to:",
              name: "question",
            }
        ])
        .then(function(response) {
            let choice = response.question;
            if (choice === "post an item?") {
                postItem();
                userPrompt();
            }
            else if (choice === "bid on an item?") {
                bidItem();
                userPrompt();
            } else {
                connection.end();
                console.log("Thank you, have a nice day!");
                process.exit(0);
            }
        })
    }

    function postItem () {
        console.log("Posting a new item....\n");
        inquirer
          .prompt([
            {
              type: "input",
              message: "What is your item name",
              name: "item",
            },
            {
             type: "input",
             message: "What category does your item belong in?",
             name: "item",
            },
            {
             type: "input",
             message: "What is your starting bid?",
             name: "item",
            }
        ])
        .then(function(response) {
            


        let query = connection.query(

        )
    })
}