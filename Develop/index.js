// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const util = require('util');
// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        message: 'Enter valid github username.(Required)',
        name: 'github-username',
        default: 'joshuatvn',
        validate: function (answer) {
            if (answer.length < 1) {
                return console.log("Must enter a valid github username.");
            }
            return true;
        }
    },
    {
        type: 'input',
        message: 'Enter a valid github repo name.(Required)',
        name: 'github-repo',
        default: 'readme-generator',
        validate: function (answer) {
            if (answer.length < 1) {
                return console.log("A github repo is required for a badge.");
            }
            return true;
        }
    },
    {
        type: 'input',
        message: 'Enter project title.(Required)',
        name: 'project-title',
        default: 'Project-title',
        validate: function (answer) {
            if (answer.length < 1) {
                return console.log("Project title is required.");
            }
            return true;
        }
    },
    {
        type: 'input',
        message: 'Write a description for you project.(Required)',
        name: 'description',
        default: 'Project-description',
        validate: function (answer) {
            if (answer.length < 1) {
                return console.log("Project description is required.");
            }
            return true;
        }
    },
    {
        type: 'input',
        message: 'Describe the steps required to install your project.',
        name: 'install',
    },
    {
        type: 'input',
        message: 'Provide examples and instruction on the projects usage.',
        name: 'usage',
    },
    {
        type: 'input',
        message: 'Provide detailed instructions on how other devs can contribute to your project.',
        name: 'contribution',
    },
    {
        type: 'input',
        message: 'Provide tests information and examples for your application.',
        name: 'tests',
    },
    {
        type: 'list',
        message: 'Select a license for you project.',
        choices: ['Academic Free License v3.0', 'Artistic license 2.0', 'MIT License', 'Mozella Public License 2.0', 'Apache License 2.0', 'ISC License', 'Open Software License 3.0', 'Microsoft Public License'],
        name: 'license'
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) { }

// TODO: Create a function to initialize app
function init() { }

// Function call to initialize app
init();
