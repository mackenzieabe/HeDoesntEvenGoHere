// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicense(license) {

    switch (license) {
      case 'Apache':
        return `[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)
        "This project is licensed under the Apache_2.0 license."`
      case 'Boost':
        return `[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)
        "This project is licensed under the Boost_1.0 license."`
      case 'BSD':
        return `[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)
        "This project is licensed under the BSD_3 license."`
      default:
        return 'No License'
    }
  }