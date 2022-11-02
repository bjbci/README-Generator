// TODO: Include packages needed for this application

import fs from "fs";
import inquirer from "inquirer";
// import { generateMarkdown } from  "./generateMarkdown.js"
// const generateMarkdown=require('./generateMarkdown')

// TODO: Create an array of questions for user input
//const questions = [];

const questions = [{
    type: 'input',
    message: 'What is the name of this project?',
    name: 'projectName'
  },
  {
    type: "input",
    message: "Why did you make this app?",
    name: "why",
  },
  {
    type: "input",
    message: "What is this app for?",
    name: "whatFor",
  },
  {
    type: "input",
    message: "What problem does this app solve?",
    name: "solve",
  },
  {
    type: "input",
    message: "What did you learn making this app?",
    name: "learn",
  },
  {
    type: "input",
    message: "What makes this project different from other apps?",
    name: "difference",
  },
  {
    type: "input",
    message: "How do you use this app?",
    name: "use",
  },
  {
    type: "input",
    message: "How do you install this app?",
    name: "install",
  },
  {
    type: "input",
    message: "How do you report issues with this app?",
    name: "issues", //
  },
  {
    type: "input",
    message: "What is your github URL?",
    name: "Github",
  },
  {
    type: "input",
    message: "What is your email address?",
    name: "email",
  },
  {
    type: "input",
    message: "Enter the Screencastifylink to your project",
    name: "screencastify",
  },
  {
    type: "list",
    message: "Select a license",
    name: "license",
    choices: ["Apache", "Mit", "Boost","Bds 3-Clause", "none"],
  
  },
];

// .then (({
//       projectName,
//        why,      //these are all now
//        whatFor,      //variables i can use
//        solve,    //in the HTML
//        learn,
//        difference,
//        use,
//        install,
//       Github,
//       email,
//       license
//        })=>{
  // ---------------------------------------------------------------------
function generateMarkdown(data) {
  return `# ${data.projectName}


## Table Of Contents
*[Why](#why)
*[whatFor](#whatFor)
*[solve](#solve)
*[learn](#learn)
*[difference](#difference)
*[License](#license)
*[Install ](#install )
*[Use](#use)
*[Contributors](#contributors )
*[Github](#Github)
*[email](#email)

## Why
${data.why}
## What For
${data.whatFor}
## What does it solve
${data.solve}
## What did I learn
${data.learn}
## How is it different
${data.difference}
## how do you use it
${data.use}
## How do you install it
${data.instal}
## License
${data.license}
## Contributors
${data.contributors}
## Github
[${data.Github}](https://github.com/${data.github})
## Email
[${data.email}](emailme@aol.com)`;
}
// ----------------------------------------------------------------------------
// TODO: Create a function to write README file
//function writeToFile(fileName, data) {}

// --------------------------------------------------------------------------
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, (err) => {
    if (err) {
      return console.log(err);
    }
    console.log("The ReadMe has been saved");
  });
}
// ----------------------------------------------------------------------------
// TODO: Create a function to initialize app
//function init() {}

function init() {
  inquirer.prompt(questions)
  .then(function(userInput) {
    console.log(userInput);
    writeToFile("README.md", generateMarkdown(userInput));
  });
}

// Function call to initialize app
//init();
init();

//////////////////////////////////////////////

// TODO: Create a function that returns a license badge based on which license is passed in

// If there is no license, return an empty string
//function renderLicenseBadge(license) {}

function renderLicenseBadge(data) {
  const licensePicked=data.license
  let licenseBadge =""

  if(licensePicked==="Apache"){
    licenseBadge="[![license](https://img.shields.io/badge/License-Apache_2.0-blue.svg)] (https://opensource.org/licenses/Apache-2.0)" 
    return licenseBadge                                 
  }
  if(licensePicked==="Mit"){
    licenseBadge="[![license](https://img.shields.io/badge/License-MIT-yellow.svg)] (https://opensource.org/licenses/MIT)" 
    return licenseBadge                                 
  }
  if(licensePicked==="Boost"){
    licenseBadge="[![license](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)] (https://boost.org/LICENSE_1_0.txt)" 
    return licenseBadge                                 
  }
  if(licensePicked==="Bsd 3-clause"){
    licenseBadge="[![license](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)] (https://opensource.org/licenses/BSD-3-Clause)" 
    return licenseBadge                                 
  }
  
}


// TODO: Create a function that returns the license link
// If there is no license, return an empty string
//function renderLicenseLink(license) {}

function renderLicenseLink(data) {
  const licensePicked=data.license
if (licensedPicked==="none"){
  return ""
}else{
  return `# License ${renderLicenseBadge(data)}`
 
}

}

  // TODO: Create a function that returns the license section of README
  // If there is no license, return an empty string
  //function renderLicenseSection(license) {}

  function renderLicenseSection(license) {
const licensePicked=data.license

if (licensePicked==="none"){
  return ""
}else{
  return `# License ${renderLicenseBadge(data)}`
  
}
}

module.exports = generateMarkdown;
