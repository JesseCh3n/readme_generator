// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const { writeFile } = require('fs').promises;
const generateMarkdown = require('./utils/generateMarkdown.js');

// TODO: Create an array of questions for user input
const questions = [
    "What is your project title?\n",
    "Please write a brief description of your project.\n",
    "What are the steps required to install your project?\n",
    "Provide instructions and examples for use. Include screenshots as needed.\n",
    "List your collaborators, if any, with links to their GitHub profiles.\n",
    "Pick your license\n",
    "How to contribute to your project?\n",
    "How to test your project?\n"
];

const promptUser = () => {
    return inquirer.prompt([
      {
        type: 'input',
        name: 'title',
        message: questions[0],
      },
      {
        type: 'input',
        name: 'description',
        message: questions[1],
      },
      {
        type: 'input',
        name: 'installation',
        message: questions[2],
      },
      {
        type: 'input',
        name: 'usage',
        message: questions[3],
      },
      {
        type: 'input',
        name: 'credits',
        message: questions[4],
      },
      {
        type: 'checkbox',
        name: 'license',
        choices: ["MIT", "GPLv2", "Apache", "GPLv3", "BSD 3-clause", "BSD 2-clause", "LGPLv3", "AGPLv3"],
        message: questions[5],
      },
      {
        type: 'input',
        name: 'contribution',
        message: questions[6],
      },
      {
        type: 'input',
        name: 'test',
        message: questions[7],
      },
    ]);
  };

// TODO: Create a function to initialize app
function init() {
    promptUser()
    .then((answers) => writeFile('readme.md', generateMarkdown(answers)))
    .then(() => console.log('Successfully wrote to index.html'))
    .catch((err) => console.error(err));
}

// Function call to initialize app
init();
