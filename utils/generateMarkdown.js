// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === "None") {
    return "";
  } else if (license === "Apache License 2.0") {
    return "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)]";
  } else if (license === "GNU General Public License v3.0") {
    return "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)]";
  } else if (license === "MIT License") {
    return "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)]";
  } else if (license === 'BSD 2-Clause "Simplified" License') {
    return "[![License](https://img.shields.io/badge/License-BSD_2--Clause-orange.svg)]";
  } else if (license === 'BSD 3-Clause "New" or "Revised" License') {
    return "[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)]";
  } else if (license === "Boost Software License 1.0") {
    return "[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)]";
  } else if (license === "Creative Commons Zero v1.0 Universal") {
    return "[![License: CC0-1.0](https://img.shields.io/badge/License-CC0_1.0-lightgrey.svg)]";
  } else if (license === "Eclipse Public License 2.0") {
    return "[![License](https://img.shields.io/badge/License-EPL_2.0-red.svg)]";
  } else if (license === "GNU Affero General Public License v3.0") {
    return "[![License: AGPL v3](https://img.shields.io/badge/License-AGPL_v3-blue.svg)]";
  } else if (license === "GNU General Public License v2.0") {
    return "[![License: GPL v2](https://img.shields.io/badge/License-GPL_v2-blue.svg)]";
  } else if (license === "GNU Lesser General Public License v2.1") {
    return "[![License: LGPL v2.1](https://img.shields.io/badge/License-LGPL_v2.1-blue.svg)]";
  }
};

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === "None") {
    return "";
  } else if (license === "Apache License 2.0") {
    return "(https://opensource.org/licenses/Apache-2.0)";
  } else if (license === "GNU General Public License v3.0") {
    return "(https://www.gnu.org/licenses/gpl-3.0)";
  } else if (license === "MIT License") {
    return "(https://opensource.org/licenses/MIT)";
  } else if (license === 'BSD 2-Clause "Simplified" License') {
    return "(https://opensource.org/licenses/BSD-2-Clause)";
  } else if (license === 'BSD 3-Clause "New" or "Revised" License') {
    return "(https://opensource.org/licenses/BSD-3-Clause)";
  } else if (license === "Boost Software License 1.0") {
    return "(https://www.boost.org/LICENSE_1_0.txt)";
  } else if (license === "Creative Commons Zero v1.0 Universal") {
    return "(http://creativecommons.org/publicdomain/zero/1.0/)";
  } else if (license === "Eclipse Public License 2.0") {
    return "(https://opensource.org/licenses/EPL-2.0)";
  } else if (license === "GNU Affero General Public License v3.0") {
    return "(https://www.gnu.org/licenses/agpl-3.0)";
  } else if (license === "GNU General Public License v2.0") {
    return "(https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html)";
  } else if (license === "GNU Lesser General Public License v2.1") {
    return "(https://www.gnu.org/licenses/lgpl-2.1)";
  }
};

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license === "None") {
    return "";
  } else {
    return `This project has a ${license} license. For details about its restrictions and rules, please follow the link below:  
    ${renderLicenseBadge(data.license)}${renderLicenseLink(license)}  
    `;
  }
};

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ${renderLicenseBadge(data.license)}${renderLicenseLink(data.license)}

  ## Description
  ${data.description}
  
  ## Table of Contents
  1. [Installation](#installation)
  2. [Usage Information](#usage)
  3. [License](#license)
  4. [Contributing](#contributing)
  5. [Tests](#tests)
  6. [Questions](#questions)

  ## Installation
  ${data.istallation}

  ## Usage Information
  ${data.usage}

  ## License
  ${renderLicenseSection(data.license)}

  ## Contributing
  ${data.contribution}

  ## Tests
  ${data.testInstruction}

  ## Questions
  If you have any questions, please find the repository for this application in GitHub from the username: ${data.gitHub}.  
  Alternatively, you can click this link: [${data.gitHub}'s GitHub](https://github.com/${data.gitHub}).

  If you have any additional questions, you can reach me by sending an email to ${data.email}. Thank you and look forward to hearing from you! 
`;
};

module.exports = generateMarkdown;
