// External Libraries import
const axios = require("axios");

// Internal Libraries import
const oxfordService = require("../services");
const printingHelper = require("../helpers/printingHelper");

var getDictionary = async (word) => {
        try {
            let definition = await oxfordService.definitionService.getDefinition(word);
            await printingHelper.definitionPrinter(definition, word);
        } catch (error) {
            console.log("The word does not exist.\n");
            throw error;
        }
        try {
            let example = await oxfordService.exampleService.getExamples(word);
            await printingHelper.examplePrinter(example);
        } catch (error) {
            console.log("The word does not have any examples.\n");
        }
        try {
            let synonym = await oxfordService.synonymService.getSynonyms(word);
            await printingHelper.synonymPrinter(synonym);
        } catch (error) {
            console.log("The word does not have any synonyms.\n");
        }
        try {
            let antonym = await oxfordService.antonymService.getAntonyms(word);
            await printingHelper.antonymPrinter(antonym);
        } catch (error) {
            console.log("The word does not have any antonyms.\n");
        }
};

module.exports = {
    getDictionary
};