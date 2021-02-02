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
            message: "What is the name of your project?",
            name: "projectName"
        },
        {
            type: "input",
            message: "Please write a short description of your project?",
            name: "projectDescription"
        },
        {
            type: "input",
            message: "Please provide image url if any?",
            name: "imageUrl"
        },
        {
            type: "input",
            message: "Please provide a deploy link if available!",
            name: "deployLink"
        },
        {
            type: "input",
            message: "What is your email address?",
            name: "email"
        },
        {
            type: "input",
            message: "What technologies, programs, and or applications were used in this project?",
            name: "technologies"
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
            message: "Provide the name of this project that the user needs instructions to follow!",
            name: "usingRepo"
        },
        {
            type: "input",
            message: "Please list first and last name of all contributors to this project/repo?",
            name: "contributeRepo"
        },
        {
            type: "input",
            message: "What is your GitHub username",
            name: "gitHubName"
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

## Description

${answer.projectDescription}

## Table of Contents

[License](#license)

[Image](#image)

[Website](#website)

[Installation](#installation)

[Usage](#usage)

[Contributing](#contributing)

[Tests](#tests)

[Technologies](#technologies)

[Questions](#questions)

## License

This project is licensed under the ${answer.license} license

## Image

${answer.imageUrl}

## Website

Deploy Link: ${answer.deployLink}

## Installation

Run the following command "${answer.installDep}" in your terminal to install any dependencies for this application

## Usage

Steps on how to properly use the ${answer.usingRepo} application are provided below.

## Contributing

This project/repo has been contributed by ${answer.contributeRepo}. Anyone can contribute to this project/repo by either reaching out to the owner or using the fork method through GitHub

## Tests

Run the following command "${answer.commandTest}" in your terminal to run tests for this application

## Technologies

Technologies, applications, and programs used in this project are ${answer.technologies}

## Questions

If you have any questions about the project/repo, please open an issue or contact me directly at <${answer.email}>.
You can find more of my work at ${answer.gitHubName} (https://github.com/DevVlady).`
    return(READMEString)
}

questions();