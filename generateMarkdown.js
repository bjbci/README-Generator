const generateMarkdown =(data)=>{

    console.log(data)

    let content=`#${data.ProjectName}


## Table of Contents 
*[Why](#Why did you make this app
    *[WhatFor] (#What is this app for)
    *[solve](#What problem does this solve)
    *[learn](#What did you learn making this app)
    *[difference](#Why is this app different)
    *[use](#how do you use this app)
    *[install](#how do you install this app)
    *[issues](#how to report issues)
    *[github](#what is your githum link${data.Github})
    *[email](#what is your email${data.email})`



    // const {
    //     projectName,
    //      why,      //these are all now      
    //      whatFor,      //variables i can use
    //      solve,    //in the HTML
    //      learn, 
    //      difference, 
    //      use, 
    //      install,
    //     issues,
    //     Github,
    //     email
    //      }=data

    // return data`
    //     }
    module.exports= generateMarkdown


    <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-Zenh87qX5JnK2Jl0vWa8Ck2rdkQ2Bzep5IDxbcnCeuOxjzrPF/et3URy9Bv1WTRi" crossorigin="anonymous">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.9.1/font/bootstrap-icons.css">
    <title>${projectName}</title>
</head>
<body>
    <div class="container">
        <div class=row>
           <div class="col-md-6" >
            img
           </div>
           <div class="col-md-6" >
            <h1>README GENERATOR</h1>

            <h2 id="table">TABLE OF CONTENTS</h2>
            <h3> THIS NEEDS TO BE CLICKABLE</h3>
            <ul>
                <li>Why did you make this app?${why} </li>
                <li>What is this app for?${whatFor}</li>
                <li>What problem does this app solve?${solve}</li>
                <li>What did you learn making this app?${learn} </li>
                <li>What makes this project different from other apps?${difference} </li
                <li>How do you use this app??${use} </li>
                <li>How do you install this app?${install}</li>How do you report issues </li>
                <li>How do you make contributions to this app ?${issues}</li>
                
                <li>Enter Github username: Github link </li>
                <a href="${Github}">
                <i class="bi bi-github fs-2"></i>
                </a>

                <li>Enter email: email will be added to the README under Questions </li>
                <a href="${email}">
                <i class="bi bi-envelope fs-2" ></i>
                </a>

                <li>Are there any collaborators or contributors?</li>

                <li>ADD A LICENSE</li>
                <li>ADD A CONTRIBUTOR</li>

            </ul>
           </div>
        </div>
    </div>
</body>
</html>
    `;
        
}


 //export default generateMarkdown  //export to generateHTML



module.exports= generateMarkdown

