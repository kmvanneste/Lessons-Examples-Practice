const fs = require("fs");
const axios = require("axios");
const inquirer = require("inquirer");

inquirer
  .prompt({
    message: "Enter your GitHub username",
    name: "username"
  })
  .then(function({ username }) {
    const queryUrl = `https://api.github.com/users/${username}/repos?per_page=100`;
  
  axios 
  .get(queryUrl)
  .then(function (res) {
    console.log(res);
    let repoNames = res.data.map(function (repo) {
      return repo.name;
    });
    console.log(repoNamesArr);
    
    const repoNames = repoNamesArr.join('\n');

    fs.writeFile(username + ".txt", repoNames, function (err) {
      if (err) throw err;
      console.log("Success!!!")
    })



  })
  
  
  });
