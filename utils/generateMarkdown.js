// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if(license === 'none') {
    return ''
  } else {
    return `[![${license} license](https://img.shields.io/badge/License-${license}-blue.svg)`
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if(license === 'none') {
    ''
  } else {
    return `- [${license} License](#license)` 
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if(license === 'none') {
    ''
  } else {
    return `#### License ####
    The ${license} license is used for this project.`
  }
}



// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ${renderLicenseBadge(data.license)}

  ---
  ### Table of Contents
  - [Descritption](#description)
  - [Installation Instructions](#installation-instructions)
  - [How To Use](#how-to-use)  
  - [Contribution Guidelines](#contribution-guidelines)
  - [Test Instructions](#test-instructions)
  ${renderLicenseLink(data.license)} 
  
  ---
  ## Description
  ${data.description}
  #### Installation Instructions
  ${data.instructions}  
    
  [Back to Top](#table-of-contents)
  
  ---
  ## How to Use
  ${data.usageInformation}  
  [Back to Top](#table-of-contents)
  
  ---
  ## Contribution Guidelines
  ${data.contributionGuidelines}  
    
  [Back to Top](#table-of-contents)
  
  ---
  ## Test Instructions
  \`${data.testInstructions}\`  
    
  ${renderLicenseSection(data.license)}
     
  [Back to Top](#table-of-contents)
  
  ---
  Questions? Reach out to me!
  Github: [${data.username}](github.com/${data.username})
  Email: ${data.email}
  
`;
}

module.exports = generateMarkdown;
