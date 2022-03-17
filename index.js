const inquirer = require('inquirer');
const fs = require('fs');
const MDCreator = require('./Utils/MDCreator');

const questions = {
    return inquirer.prompt([
    {
        type: 'input',
        name: 'title',
        message: "What is the title of the project?",
      }
      {
        type: 'input',
        name: 'email',
        message: 'What is your email address?',
      },
      {
        type: 'input',
        name: 'github',
        message: "What is the URL of the Github repository?",
      },
      {
        type: 'input',
        name: 'description',
        message: "What is the description of the project?",
      },
      {
        type: 'input',
        name: 'install',
        message: "What steps are necessary for install?",
      },
      {
        type: 'input',
        name: 'operate',
        message: "How does this program operate?",
      },
      {
        type: 'input',
        name: 'credits',
        message: "Credit to contributors:",
      },
      {
        type: 'list',
        name: 'license',
        message: "Choose a license for your project:",
        choices: ['MIT', 'Apache 2.0', 'GNU GPL 3.0']
        }
    ]);
};

    function writetoFile(fileName, data) {
        fs.writeFile(fileName, data, function)
      };

      async function init() {
        try {
          const answers = await askQuestions();
          generateMarkdown(answers);
          writetoFile("README.md", generateMarkdown(answers));
        }
    
init();