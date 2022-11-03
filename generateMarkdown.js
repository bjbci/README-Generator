
// TODO: Create a function to generate markdown for README
// function generateMarkdown(data) {
//   return `# ${data.title}
function renderLicenseBadge(license) {
    const licensePicked=license
    let licenseBadge =""
  console.log(licensePicked)
    if(licensePicked==="Apache"){
      licenseBadge="![license](https://img.shields.io/badge/License-Apache_2.0-blue.svg) (https://opensource.org/licenses/Apache-2.0)" 
      return licenseBadge                                 
    }
    if(licensePicked==="Mit"){
      licenseBadge="![license](https://img.shields.io/badge/License-MIT-yellow.svg) (https://opensource.org/licenses/MIT)" 
      return licenseBadge                                 
    }
    if(licensePicked==="Boost"){
      licenseBadge="![license](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg) (https://boost.org/LICENSE_1_0.txt)" 
      return licenseBadge                                 
    }
    if(licensePicked==="Bsd 3-clause"){
      licenseBadge="![license](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg) (https://opensource.org/licenses/BSD-3-Clause)" 
      return licenseBadge                                 
    }
    
  }
  
function generateMarkdown(data) {
  return `# ${data.projectName}


## Table Of Contents
*[Why](#why)
*[WhatFor](#whatFor)
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
${data.install}
## License
${renderLicenseBadge(data.license)}
${data.license}
## Contributors
${data.contributors}
## Github
[${data.Github}](https://github.com/${data.Github})
## Email
[${data.email}](emailme@aol.com)`;
}


export default generateMarkdown
//module.exports = {generateMarkdown}