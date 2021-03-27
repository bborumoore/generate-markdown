// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const util = require('util');
const generateMarkdown = require('./utils/generateMarkdown.js');

const licenseChoices = ['MIT', 'GNU GPLv3', 'Apache License 2.0', 'ISC', 'none'];

// TODO: Create an array of questions for user input
const questions = [
    {
        message: 'What is your Project Title?',
        type: 'input',
        name: 'title'
    }, 
    {
        message: 'What would you like displayed as the Description for your project?',
        type: 'input',
        name: 'description'
    },
    {
        message: 'What are the Installation Instructions for your project?',
        type: 'input',
        name: 'instructions'
    },
    {
        message: 'What is the usage information for your project?',
        type: 'input',
        name: 'usageInformation'
    },
    {
        message: 'What are the contribution guidelines for your project?',
        type: 'input',
        name: 'contributionGuidelines'
    },
    {
        message: 'What are the test instructions for your project?',
        type: 'input',
        name: 'testInstructions'
    },
    {
        message: 'What license would you like for your project?',
        type: 'list',
        name: 'license',
        choices: licenseChoices
    },
    {
        message: 'What is your GitHub username?',
        type: 'input',
        name: 'username'
    },
    {
        message: 'What is your email address?',
        type: 'input',
        name: 'email'
    }
];



// TODO: Create a function to write README file
const writeFileAsync = util.promisify(fs.writeFile);

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then((answers) => writeFileAsync('Generated-README.md', generateMarkdown(answers)))
    .then(() => console.log('Successfully wrote to Generated-README.md'))
    .catch((err) => console.error(err));
}

// Function call to initialize app
init();
