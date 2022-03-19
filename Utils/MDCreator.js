function badge(license) {
    let licenseIcon;
    switch (license) {
        case "MIT":
        licenseIcon = { name: "MIT", color: "blue"};
        break;
        case "Apache 2.0":
        licenseIcon = { name: "Apache+2.0", color: "green"};
        break;
        case "GNU GPL 3.0":
        licenseIcon = { name: "GNU+GPL+3.0", color: "red"};
        break;
    }
    return `![License](https://img.shields.io/static/v1?label=license&message=${licenseIcon.name}&color=${licenseIcon.color})`;    
  
  };

function generateMarkdown(data) {

return `# ${data.title}
${badge(data.license)}
## Description

${data.description}
## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)
## Installation

${data.install}
## Usage

${data.operate}
## Credit

${data.credits}
## Questions

Contact Details:
- GitHub Username: ${data.github}
- [Link to GitHub Profile](https://github.com/${data.github})
- For additional questions, you can contact me via email: ${data.email}
`;
}
    
    module.exports = generateMarkdown;