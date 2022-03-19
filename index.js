const inquirer = require("inquirer");
const fs = require("fs");
const MDCreator = require("./Utils/MDCreator");

const questions = [
  {
    type: "input",
    name: "title",
    message: "What is the title of the project?",
  },
  {
    type: "input",
    name: "email",
    message: "What is your email address?",
  },
  {
    type: "input",
    name: "github",
    message: "What is the URL of the Github repository?",
  },
  {
    type: "input",
    name: "description",
    message: "What is the description of the project?",
  },
  {
    type: "input",
    name: "install",
    message: "What steps are necessary for install?",
  },
  {
    type: "input",
    name: "operate",
    message: "How does this program operate?",
  },
  {
    type: "input",
    name: "credits",
    message: "Credit to contributors:",
  },
  {
    type: "list",
    name: "license",
    message: "Choose a license for your project:",
    choices: ["MIT", "Apache 2.0", "GNU GPL 3.0"],
  },
];

function writetoFile(fileName, data) {
  fs.writeFile(fileName, data, function (err, results) {
    if (err) throw err;
    console.log("Success!");
  });
}

async function init() {
  inquirer
    .prompt(questions)
    .then((answers) => {
      writetoFile("README.md", MDCreator(answers));
    })
    .catch((err) => {
      throw err;
    });
}

init();
