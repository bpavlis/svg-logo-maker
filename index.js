const inquirer = require("inquirer");
const fs = require("fs");
const {Triangle, Square, Circle} = require("./shapes/shape-classes")

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
      choices: ["Circle", "Triangle", "Square"]
    },
    {
      type: 'input',
      message: 'Enter A Shape Color:',
      name: 'logoShapeColor'
    },
  ]).then(responses => {
    if (responses.logoText.length > 3) {
      console.log("ERROR: MAX CHAR LIMIT REACHED, TRY AGAIN");
      askQuestions();   //send back to top
    } else {
      renderLogo("logo.svg", responses);
    }
  })
}


function renderLogo(svgFile, responses){
  let svg = "";
  svg = '<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">';
  svg += "<g>";
  svg += `${responses.logoShape}`;
  

  let shape;
  if (responses === "Circle") {
    shape = new Circle();
    svg += `<circle cx="150" cy="100" r="80" fill="${responses.logoShapeColor}" />`
  } else if (responses === "Triangle") {
    shape = new Triangle();
    svg += `<polygon points="150, 18 244, 182 56, 182" fill="${responses.logoShapeColor}"/>`
  } else {
    shape = new Square();
    svg += `<rect x="73" y="40" width="160" height="160" fill="${responses.logoShapeColor}"/>`
  }

  svg += `<text x="150" y="130" text-anchor="middle" font-size="60" fill="${responses.logoTextColor}">${responses.logoText}</text>`;
  svg += "</g>";
  svg += "</svg>";

  fs.writeFile(svgFile, svg, (err) => {
    err ? console.log(err) : console.log("Done!");
  });
}






askQuestions();
/*
<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

  <circle cx="150" cy="100" r="80" fill="green" />

  <text x="150" y="125" font-size="60" text-anchor="middle" fill="white">SVG</text>

</svg>
*/