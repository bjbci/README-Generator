import fs from "fs"
import inquirer from 'inquirer';
import generateHTML from "./generateHTML.js"

inquirer.prompt([
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


])

.then((answers) => {
 console.log(answers)

//generate HTML string
const html= generateHTML(answers)
console.log(html)


////write and ave to file system FS
fs.writeFile('./readmeProject.html',html,error=>{
  if (error) throw error

  console.log('HTML Saved')
})


})
 .catch(error => console.log(error))//{
//   if (error.isTtyError) {
//     // Prompt couldn't be rendered in the current environment
//   } else {
//     // Something else went wrong
//   }
// });





/////////////////////////////////////////////
// TODO: Include packages needed for this application

// TODO: Create an array of questions for user input
//const questions = [];

// TODO: Create a function to write README file
//function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
//function init() {}

// Function call to initialize app
//init();

//////////////////////////////////////////////


// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
//function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
//function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
//function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
// function generateMarkdown(data) {
//   return `# ${data.title}

// `;
// }

// module.exports = generateMarkdown;