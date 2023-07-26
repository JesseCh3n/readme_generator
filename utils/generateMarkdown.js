
function renderLicenseBadge(license) {
  let theBadge = ''
  if(license === 'MIT') {
    theBadge = `![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)`;
    return theBadge;
  } else if (license === 'GPLv2') {
    theBadge = `![License: GPL v2](https://img.shields.io/badge/License-GPL_v2-blue.svg)`;
    return theBadge;
  } else if (license === 'Apache') {
    theBadge = `![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)`;
    return theBadge;
  } else if (license === 'GPLv3') {
    theBadge = `![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)`;
    return theBadge;
  } else if (license === 'BSD 3-clause') {
    theBadge = `![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)`;
    return theBadge;
  } else if (license === 'BSD 2-clause') {
    theBadge = `![License](https://img.shields.io/badge/License-BSD_2--Clause-orange.svg)`;
    return theBadge;
  } else if (license === 'LGPLv3') {
    theBadge = `![License: LGPL v3](https://img.shields.io/badge/License-LGPL_v3-blue.svg)`;
    return theBadge;
  } else if (license === 'AGPLv3') {
    theBadge = `![License: AGPL v3](https://img.shields.io/badge/License-AGPL_v3-blue.svg)`;
    return theBadge;
  } else {
    return theBadge;
  }
}

function renderLicenseLink(license) {
  let theLink = ''
  if(license === 'MIT') {
    theLink = `[${license}](https://opensource.org/licenses/MIT)`;
    return theLink;
  } else if (license === 'GPLv2') {
    theLink = `[${license}](https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html)`;
    return theLink;
  } else if (license === 'Apache') {
    theLink = `[${license}](https://opensource.org/licenses/Apache-2.0)`;
    return theLink;
  } else if (license === 'GPLv3') {
    theLink = `[${license}](https://www.gnu.org/licenses/gpl-3.0)`;
    return theLink;
  } else if (license === 'BSD 3-clause') {
    theLink = `[${license}](https://opensource.org/licenses/BSD-3-Clause)`;
    return theLink;
  } else if (license === 'BSD 2-clause') {
    theLink = `[${license}](https://opensource.org/licenses/BSD-2-Clause)`;
    return theLink;
  } else if (license === 'LGPLv3') {
    theLink = `[${license}](https://www.gnu.org/licenses/lgpl-3.0)`;
    return theLink;
  } else if (license === 'AGPLv3') {
    theLink = `[${license}](https://www.gnu.org/licenses/agpl-3.0)`;
    return theLink;
  } else {
    return theLink;
  }
}

function renderLicenseSection(license) {
  return `## License
  ${renderLicenseLink(license)}`;
}

function generateMarkdown(data) {
  return `# ${data.title}
  ${renderLicenseBadge(data.license[0])}

  ## Description

  ${data.description}

  ## Table of Contents

  - [Installation](#installation)
  - [Usage](#usage)
  - [Credits](#credits)
  - [License](#license)
  - [How to Contribute](#how%20to%20contribute)
  - [Tests](#tests)

  ## Installation

  ${data.installation}

  ## Usage

  ${data.usage}
  ![alt screenshot](https://drive.google.com/file/d/1QW2T-aOM2wpDsxHjtRumQ8y3kHKNUBL6/view)

  ## Credits

  ${data.credits}

  ${renderLicenseSection(data.license[0])}

  ## How to Contribute

  ${data.contribution}

  ## Tests

  ${data.test}
`;
}

module.exports = generateMarkdown;
