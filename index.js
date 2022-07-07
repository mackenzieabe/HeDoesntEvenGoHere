// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs')
const generateReadme = require('./utils/generateMarkdown')  

const promptUser = () => {
    return inquirer
        .prompt([
            {
                type: 'input',
                name: 'name',
                message: 'What is the name of your project?(Required)',
                validate: nameInput => {
                    if (nameInput) {
                        return true;
                    } else {
                        console.log('Please enter your project name!');
                        return false;
                    }
                }
            },
            {
                type: 'input',
                name: 'username',
                message: 'Please enter your GitHub username.'
            },
            {
                type: 'input',
                name: 'description',
                message: 'Please provide a project description.'
            },
            {
                type: 'input',
                name: 'instruction',
                message: 'Please provide installation instructions.'
            },
            {
                type: 'input',
                name: 'usage',
                message: 'Please provide important usage information.'
            },
            {
                type: 'input',
                name: 'guidelines',
                message: 'Please provide contribution guidelines for other developers.'

            },
            {
                type: 'input',
                name: 'credits',
                message: 'Please provide a list of collaborators that should recieve credit for this project.'
            },
            {
                type: 'list',
                name: 'license',
                message: 'Choose a license:',
                choices: ['Apache', 'Boost', 'BSD', 'None']
            },
            {
                type: 'input',
                name: 'test',
                message: 'Please provide tests for your application and examples on how to run them.'
            },
            {
                type: 'input',
                name: 'questions',
                message: 'Please provide your e-mail for users if they questions about your project and instructions on how to do so.'
            }

        ])
}
promptUser().then(answers => {
    fs.writeFile('README.md', generateReadme(answers), err => {
        if (err) throw err;
        console.log('README file has been created');
    })
});