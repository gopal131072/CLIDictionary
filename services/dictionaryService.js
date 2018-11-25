// External Libraries import
const axios = require("axios");

// Internal Libraries import
const oxfordService = require("../services");
const printingHelper = require("../helpers/printingHelper");

var getDictionary = async (word) => {
    try {
        definition = await oxfordService.definitionService.getDefinition(word);
        printingHelper.definitionPrinter(definition, word);
        example = await oxfordService.exampleService.getExamples(word);
        printingHelper.examplePrinter(example);
        synonym = await oxfordService.synonymService.getSynonyms(word);
        printingHelper.synonymPrinter(synonym);
        antonym = await oxfordService.antonymService.getAntonyms(word);
        printingHelper.antonymPrinter(antonym);
    } catch (error) {
        console.log("Exiting");
    }
};

module.exports = {
    getDictionary
};