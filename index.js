const fs = require('fs');
const inquirer = require('inquirer');

inquirer.prompt([{
    type: 'input',
    message: 'What is your Project Title?',
    name: 'title'
},
{
    type: 'input',
    message: 'Where are you from?',
    name: 'location'
},
{
    type: 'input',
    message: 'What is your Github username?',
    name: 'github'
},
{
    type: 'input',
    message: 'What is your Linkedin url?',
    name: 'linkedin'
},
{
    type: 'checkbox',
    message: 'Choose license',
    name: 'license',
    choices: ['Apache License 2.0', 'MIT License', 'GNU Public License v3.0']
}
])
    .then(answers => {
        console.log(answers)
        const content = html(answers)
        console.log(content)
        fs.writeFile('README.md', content, function (err) {
            if (err) {
                console.log(err)
            }
        })
    })

 const html = answers => {
     return `README.md`
 }