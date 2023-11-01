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
  return ``
}
/*
<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

  <circle cx="150" cy="100" r="80" fill="green" />

  <text x="150" y="125" font-size="60" text-anchor="middle" fill="white">SVG</text>

</svg>
*/