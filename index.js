const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./generateMarkdown')

function writeToFile(fileName, data) {
    fs.writeFile(fileName, generateMarkdown(data), (err) => {
        if (err){
            console.error(err)
        } else console.log('sucsess')
    })
}


inquirer.prompt([{
    type: 'input',
    message: 'What is your Project Title?',
    name: 'title'
},
{
    type: 'input',
    message: 'What is your email address?',
    name: 'email'
},
{
    type: 'input',
    message: 'What is your Github username?',
    name: 'github'
},
{
    type: 'input',
    message: 'Provide a brief description of your project.',
    name: 'description'
},
{
    type: 'list',
    message: 'Choose license',
    name: 'license',
    choices: ['Apache License 2.0', 'MIT License', 'Boost Software License 1.0', 'None']
},
{
    type: 'input',
    message: 'Contribution Guidelines',
    name: 'contribution'
},
{
    type: 'input',
    message: 'Test Instructions',
    name: 'instructions'
},
{
    type: 'input',
    message: 'Installation Instructions',
    name: 'install'
},
{
    type: 'input',
    message: 'Usage Information',
    name: 'usage'
}

])

     .then(answers => {
         console.log(answers)
         writeToFile('README.md', answers);
     })

