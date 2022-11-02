// TODO: Include packages needed for this application

import fs from "fs"
import inquirer from "inquirer"


// TODO: Create an array of questions for user input
//const questions = [];

const questions=[
  {
    type:"input",
    message:"What is the name of this project?",
    name:"projectName"
  },
  {
  type:"input",
  message:"Why did you make this app?",
  name:"why"
},
{
  type:"input",
  message:"What is this app for?",
  name:"whatFor"
},
{
  type:"input",
  message:"What problem does this app solve?",
  name:"solve"
},
{
  type:"input",
  message:"What did you learn making this app?",
  name:"learn"
},
{
  type:"input",
  message:"What makes this project different from other apps?",
  name:"difference"
},
{
  type:"input",
  message:"How do you use this app?",
  name:"use"
},
{
  type:"input",
  message:"How do you install this app?",
  name:"install"
},
{
  type:"input",
  message:"How do you report issues with this app?",
  name:"issues"//
},
{
  type:"input",
  message:"What is your github URL?",
  name:"Github "
},
{
  type:"input",
  message:"What is your email address?",
  name:"email "
},
{
  type:"input",
  message:"Enter the Screencastifylink to your project",
  name:"screencastify"
},
{
  type:"list",
  message:"Select a license",
  name:"license",
  choices:["apache","mit","none"]
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

// TODO: Create a function to write README file
//function writeToFile(fileName, data) {}
function writeToFile(input){
  var readMeText =` #${input.projectName}

##Table Of Contents
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

##Why
${data.why}
##What For
${data.whatFor}
##What does it solve
${data.solve}
##What did I learn
${data.learn}
##How is it different
${data.difference}
##how do you use it
${data.use}
##How do you install it
${data.instal}
##License
${data.license}
##Contributors
${data.contributors}
##Github
${data.Github}`

  // TODO: Create a function to write README file
  fs.writeFile("./readme.md", readMeText, error=>{
  
  if (error){
    console.log(error)
return
  } 
 
  })
}

// TODO: Create a function to initialize app
//function init() {}
function init() {
  inquirer.prompt(questions)
  .then((answers)=>{
    writeToFile(answers)
  })
}

// Function call to initialize app
//init();
init();

//////////////////////////////////////////////


// TODO: Create a function that returns a license badge based on which license is passed in

// If there is no license, return an empty string
//function renderLicenseBadge(license) {}

function renderLicenseBadge(license) {}
  or=""




// TODO: Create a function that returns the license link
// If there is no license, return an empty string
//function renderLicenseLink(license) {}

function renderLicenseLink(license) {}
or=""


// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
//function renderLicenseSection(license) {}

/function renderLicenseSection(license) {}
or=""

// TODO: Create a function to generate markdown for README
// function generateMarkdown(data) {
//   return `# ${data.title}

// `;
// }

// function generateMarkdown(data) {
//      return `# ${data.title}
//   `;
   
//    }

// TODO: Create a function to generate markdown for README
 function generateMarkdown(data) {
   return `# ${data.title}

 module.exports = generateMarkdown;

 