
// TODO: Create a function to generate markdown for README
// function generateMarkdown(data) {
//   return `# ${data.title}

function generateMarkdown(data){
    return `# ${data.title}


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
[${data.Github}](https://github.com/${sata.github})
##Email
[${data.email}](emailme@aol.com)`
}



module.exports=generateMarkdown