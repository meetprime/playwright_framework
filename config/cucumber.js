const moment = require('moment');
const os = require('os');
module.exports = {
    "default": {
        "require": ["src/steps/*.ts"],
        "format": ["progress", "json:reports/cucumber-report.json", "html:reports/cucumber-report.html"],
        "publishQuiet": true,
        "tags": ["@workspace"]
    },

    paths: [
        "src/features",
        "src/steps",
        "src/features/*.feature",
        "src/steps/*.ts"
    ],
    //dryRun; false,

    parallel: 1
  }

    

