"use strict";

// Internal Libraries import
const parsingService = require('./services/parsingService')

// The two static arguments passed into node by default are disregarded.
const numberOfArguments = process.argv.length - 2;
const args = process.argv.slice(2, numberOfArguments + 3);

// Using the argument parser to determine what services to call.
let parser = async () => {
    await parsingService.argumentParser(numberOfArguments, args);
}

// Runs the built parser
parser();