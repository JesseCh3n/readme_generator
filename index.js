
const inquirer = require('inquirer');
const { writeFile } = require('fs').promises;
const generateMarkdown = require('./utils/generateMarkdown.js');

const questions = [
    "What is your project title?\n",
    "Please write a brief description of your project.\n",
    "What are the steps required to install your project?\n",
    "Provide instructions and examples for use. Include a screenshots as needed. Please save the image as image.jpeg in the same directory as index.js\n",
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
        message: questions[5],
        choices: ["MIT", "GPLv2", "Apache", "GPLv3", "BSD 3-clause", "BSD 2-clause", "LGPLv3", "AGPLv3"],
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

function init() {
    promptUser()
    .then((answers) => {
      console.log(typeof(answers.license[0]));
      console.log(answers.license[0]);
      writeFile('readme.md', generateMarkdown(answers));
    })
    .then(() => {console.log('Successfully wrote to index.html')})
    .catch((err) => console.error(err));
}

init();
