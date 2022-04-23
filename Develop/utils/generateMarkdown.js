const licenseLink = ["MIT","Apache2.0","GNU","None"]

function renderLicenseLink(license) {
  if (license===licenseLink[0]){
    return `(https://opensource.org/licenses/MIT)` }
    else if (license===licenseLink[1]){
      return `(https://opensource.org/licenses/Apache-2.0)` }
      else if (license===licenseLink[2]){
        return `(https://opensource.org/licenses/gpl-license)` }
        else if (license===licenseLink[3]){
          return `No license selected.` }
}

function renderGithubLink(github) {
  return '(https://github.com/'+`${github})`}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  console.log("in genmarkdown", data);
  return `![](https://img.shields.io/badge/license-${data.license}-blue)
  
# ${data.title}

## Description

${data.description}

## Table of Contents

- [License](#license)
- [Installation](#installation)
- [Usage](#usage)
- [Contributers](#contributers)
- [Tests](#tests)
- [Questions](#questions)

## License

This application is covered under the ${data.license} license, to learn more about this license, check out: ${renderLicenseLink(data.license)}.

## Installation

Please see below if there are any specific instructions to run this application. 

${data.installation}

## Usage

${data.usage}

## Contributers

${data.contributing}

## Tests

${data.tests}

## Questions

If you would like to learn more about ${data.title}. Check out my github here: ${renderGithubLink(data.github)}

Feel free to reach me via email if you have any additional questions! ${data.email}`;
}

module.exports = generateMarkdown;
