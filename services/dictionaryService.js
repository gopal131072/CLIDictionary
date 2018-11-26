// External Libraries import
const axios = require("axios");

// Internal Libraries import
const oxfordService = require("../services");
const printingHelper = require("../helpers/printingHelper");

// Combines services for definitions, synonyms/antonyms and examples, with modular error handling.
let getDictionary = async (word) => {
        try {
            let definition = await oxfordService.definitionService.getDefinition(word);
            printingHelper.definitionPrinter(definition, word);
        } catch (error) {
            console.log("The word does not exist.\n");
            throw error;
        }
        try {
            let example = await oxfordService.exampleService.getExamples(word);
            printingHelper.examplePrinter(example);
        } catch (error) {
            console.log("The word does not have any examples.\n");
        }
        try {
            let synonym = await oxfordService.synonymService.getSynonyms(word);
            printingHelper.synonymPrinter(synonym);
        } catch (error) {
            console.log("The word does not have any synonyms.\n");
        }
        try {
            let antonym = await oxfordService.antonymService.getAntonyms(word);
            printingHelper.antonymPrinter(antonym);
        } catch (error) {
            console.log("The word does not have any antonyms.\n");
        }
};

module.exports = {
    getDictionary
};