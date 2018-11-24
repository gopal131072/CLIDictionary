"use strict";

// Internal Libraries import
const oxfordService = require('./services')

// The two static arguments passed into node by default are disregarded.
const numberOfArguments = process.argv.length - 2;
const args = process.argv.slice(2, numberOfArguments + 3);

// Calling the function and executing appropriate services.
oxfordService.parsingService.argumentParser(numberOfArguments, args);