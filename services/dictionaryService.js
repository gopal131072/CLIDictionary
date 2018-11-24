// External Libraries import
const axios = require("axios");

// Internal Libraries import
const oxfordService = require("../services");

var getDictionary = async (word) => {
    try {
        definition = await oxfordService.definitionService.getDefinition(word);
        example = await oxfordService.exampleService.getExamples(word);
        synonym = await oxfordService.synonymService.getSynonyms(word);
        antonym = await oxfordService.antonymService.getAntonyms(word);
    } catch (error) {
        console.log(error);
    }
};

module.exports = {
    getDictionary
};