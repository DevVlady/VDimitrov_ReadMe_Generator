//Varables to grab the required info from node_modules
const inquirer = require ('inquirer');
const fs = require ('fs');
const util = require ('util');

//Write fileASYNC variable
const writeFileAsync = util.promisify(fs.writeFile);

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
                "none"
            ],
            name: "license"
        },
        {
            type: "command",
            message: "What command should be run to install dependencies?",
            name: "installDep"
        },
        {
            type: "command",
            message: "What command should be run to run tests?",
            name: "commandTest"
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
        },
    ]).then(function(answer) {
        console.log(answer);
        let README = generateMarkdown(answer);
        writeFileAsync("README.md", README).then(
            err => console.log("Successfully wrote to file README.")
        );
    })
}


// function to write README file
function generateMarkdown (answer) {
    let READMEString =
`# ${answer.projectName}
[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)

## Description

${answer.projectDescription}

## Table of Contents

* [Video](#video)

* [Installation](#installation)

* [Usage](#usage)

* [License](#license)

* [Contributing](#contributing)

* [Tests](#tests)

* [Questions](#questions)

## Video

Link: https://drive.google.com/file/d/11Sg4hl2hFFHeQS-NjahUN3XiV9bood3p/view

## Installation

${answer.installDep}

## Usage

![image](https://user-images.githubusercontent.com/71519918/99868688-494a0100-2b8a-11eb-9b47-3d3e9c3afb22.png)

${answer.usingRepo}

## License

${answer.license}

![image](https://user-images.githubusercontent.com/71519918/99868729-a80f7a80-2b8a-11eb-9742-53c2264f0cf3.png)

## Contributing

${answer.contributeRepo}

## Tests

${answer.commandTest}

## Questions

If you have any questions about the repo, please open an issue or contact me directly at <${answer.email}>.
You can find more of my work at ${answer.gitHubName} (https://github.com/Vlady14).`
    return(READMEString)
}

questions();