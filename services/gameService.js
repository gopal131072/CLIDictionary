// Internal Libraries
const config = require("../config");
const oxfordService = require("../services");
const gameHelper = require("../helpers/gameHelper");

let playGame = async () => {
    let hints = {"definitions" : [], "synonyms" : [], "antonyms" : []};
    let word = config.words[Math.floor(Math.random()*(config.words.length))];
    var definition, synonym, antonym;
    try {
        definition = await oxfordService.definitionService.getDefinition(word);
        hints.definitions.push(definition[0].definition);
    } catch (error) {
        throw error;
    }
    try {
        synonym = await oxfordService.synonymService.getSynonyms(word);
        delete synonym[0];
        hints.synonyms.push(synonym[0]);
    } catch (error) {
        synonym = null;
    }
    try {
        antonym = await oxfordService.antonymService.getAntonyms(word);
        hints.antonyms.push(antonym[0]);
    } catch (error) {
        antonym = null;
    }
    try {
        console.log("Let's play Guess That Word!");
        prompt = await gameHelper.promptAnswer();
        console.log(prompt);
    } catch (error) {
        console.log(error)
        console.log("Error initializing game");
    }
}

module.exports = {
    playGame
};