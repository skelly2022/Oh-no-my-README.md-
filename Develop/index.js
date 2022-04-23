// Steps to solve the problem
// 1. User answers questions
// inquirer prompt
// 2. Pass answers in the .then() function
// import generate markdown
// 3. Hand of to generate markdown to create MD syntax
// 4. pass MD to writeTofile

// TODO: Include packages needed for this application
const fs = require("fs");
const inquirer = require("inquirer");
const { url } = require("inspector");
const generateMarkdown = require("./utils/generateMarkdown");
// TODO: Create an array of questions for user input
const questions = [
  {
    type: "input",
    message: "What is the title?",
    name: "title",
  },
  {
    type: "input",
    message:
      "Provide a short description explaining the what, why, and how of your application. ",
    name: "description",
  },
  {
    type: "input",
    message:
      "What are the steps required to install your project?",
    name: "installation",
  },
  {
    type: "list",
    message: "Which license do you want to apply?",
    name: "license",
    choices: ["MIT", "Apache2.0", "GNU", "None"],
  },
  {
    type: "input",
    message: "Provide instructions on how to run the application",
    name: "usage",
  },
  {
    type: "input",
    message:
      "List your collaborators, if any.",
    name: "contributing",
  },

  {
    type: "input",
    message:
      "Please list any tests your application has?",
    name: "tests",
  },

  {
    type: "input",
    message:
      "Please provide your github username.",
    name: "github",
  }
  ,

  {
    type: "input",
    message:
      "Please provide your email.",
    name: "email",
  },
  // ,

  // {
  //   type: "input",
  //   message:
  //     "Please provide the best email to reach you regarding this application.",
  //   name: "email",
  // }
  
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  fs.writeFileSync(fileName, data);
}

// use fs.writefile here
// How do I use the mardown file here
// maybe a rest operator hereby
// import markdown functions

// TODO: Create a function to initialize app
function init() {
  inquirer.prompt(questions).then((response) => {
    const markdownText = generateMarkdown(response);
    writeToFile("dist/README.md", markdownText);
  });
}

// Function call to initialize app
init();
