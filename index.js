// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown");

// TODO: Create an array of questions for user input
const questions = [
  "What is your project title?",
  "Please give a decription for your project",
  "What are the installation instructions for the project?",
  "Please give some usage information",
  "What are the project contribution guidelines?",
  "What are the test instructions?",
  "Which license would you like to add?",
  "What is your GitHub username",
  "What is your email address?",
  "What would you like to call your file?",
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  const content = generateMarkdown(data);
  fs.writeFile(fileName, content, (err) => {
    if (err) {
      return console.log(err);
    }

    console.log("Success!");
  });
};

// TODO: Create a function to initialize app
function init() {
  inquirer
    .prompt([
      {
        name: "title",
        message: questions[0],
        type: "input",
      },
      {
        name: "description",
        message: questions[1],
        type: "input",
      },
      {
        name: "istallation",
        message: questions[2],
        type: "input",
      },
      {
        name: "usage",
        message: questions[3],
        type: "input",
      },
      {
        name: "contribution",
        message: questions[4],
        type: "input",
      },
      {
        name: "testInstruction",
        message: questions[5],
        type: "input",
      },
      {
        name: "license",
        message: questions[6],
        type: "rawlist",
        choices: [
          'Apache License 2.0',
          'GNU General Public License v3.0',
          'MIT License',
          'BSD 2-Clause "Simplified" License',
          'BSD 3-Clause "New" or "Revised" License',
          'Boost Software License 1.0',
          'Creative Commons Zero v1.0 Universal',
          'Eclipse Public License 2.0',
          'GNU Affero General Public License v3.0',
          'GNU General Public License v2.0',
          'GNU Lesser General Public License v2.1',
          'None',
        ],
      },
      {
        name: "gitHub",
        message: questions[7],
        type: "input",
      },
      {
        name: "email",
        message: questions[8],
        type: "input",
      },
    ])
    .then((answers) => {
      writeToFile('README.md', answers);
    });
}

// Function call to initialize app
init();
