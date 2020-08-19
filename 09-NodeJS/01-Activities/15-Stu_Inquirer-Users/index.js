var inquirer = require("inquirer");

var fs = require("fs");

inquirer
  .prompt([
    {
      type: "input",
      message: "What is your user name?",
      name: "username"
    },
    {
      type: "checkbox",
      choices: ["html", "css", "JS", "node.js"],
      message: "What coding languages do you know?",
      name: "languages"
    },
    {
      type: "list",
      choices: ["email", "cell", "telegraph"],
      message: "What is your preferred method of communication?",
      name: "communication"
    }
  ])
  
  .then(function(response) {
      console.log(response);
      fs.writeFile(response.name + ".txt",  JSON.stringify(response), function(error) {
            if (error) {
                console.log(error);
                return;
            }
            console.log("Success!")
      })
  })
  
    
