const inquirer = require("inquirer");
const fs = require("fs");

function askQuestions(){
  inquirer.prompt([
    {
      type: 'input',
      message: 'Enter Up To 3 Char For Your Logo:',
      name: 'logoText'
    },
    {
      type: 'input',
      message: 'Enter A Text Color:',
      name: 'logoTextColor'
    },
    {
      type: 'list',
      message: 'Choose a shape:',
      name: 'logoShape',
      choices: ['Circle', 'Triangle', 'Square']
    },
    {
      type: 'input',
      message: 'Enter A Shape Color:',
      name: 'logoShapeColor'
    },
  ]).then(responses => {
    console.log(responses)
  
    // fs.writeFile('writtenREADME.md', renderLOGO(responses), (err) =>
    // err ? console.error(err) : console.log('Done!')
    // );
  })
}
askQuestions();

function renderLogo(){
  
}
