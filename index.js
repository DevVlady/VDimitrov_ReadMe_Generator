//Varables to grab the required info from node_modules
const inquirer = require ('inquirer');
const fs = require ('fs');
const util = require ('util');

//Write fileASYNC variable
const writeFileAsync = util.promisify(fs.writeFile());

//Ask user for user input in an array of questions
const questions = () => {
    inquirer.prompt([
        {
            type: "input",
            message: "What is your GitHub username",
            name: "gitHubName"
        },
        {
            type: "input",
            message: "What is your email address?",
            name: "email"
        },
        {
            type: "input",
            message: "What is your project's name?",
            name: "projectName"
        },
        {
            type: "input",
            message: "Please write a short description of your project?",
            name: "projectDescription"
        },
        {
            type: "list",
            message: "What kind of license should your project have?",
            choices: [
                "MIT",
                "APACHE 2.0",
                "GPL 3.0",
                "BSD 3",
            ],
            name: "license"
        },
        {
            type: "command",
            message: "What command should be run to install dependencies?",
            name: ""
        },
        {
            type: "command",
            message: "What command should be run to run tests?",
            name: ""
        },
        {
            type: "input",
            message: "What does the user need to know about using the repo?",
            name: "usingRepo"
        },
        {
            type: "input",
            message: "What does the user need to know about contributing to the repo?",
            name: "contributeRepo"
        }
    ]).then(function(answer) {
        console.log(answer)
    })
}


// function to write README file
function writeToFile(fileName, data) {
}

// function to initialize program
function init() {

}

// function call to initialize program
init();
