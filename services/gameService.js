// Internal Libraries
const config = require("../config");
const oxfordService = require("../services");
const gameHelper = require("../helpers/gameHelper");
const printingHelper = require("../helpers/printingHelper");

let playGame = async () => {
    let hints = {"definitions" : [], "synonyms" : [], "antonyms" : []};
    let word = config.words[Math.floor(Math.random()*(config.words.length))];
    var definition, synonym, antonym;
    try {
        definition = await oxfordService.definitionService.getDefinition(word);
        hints.definitions.push({"id" : 0, "definition" : definition[0].definition});
    } catch (error) {
        throw error;
    }
    try {
        synonym = await oxfordService.synonymService.getSynonyms(word);
        hints.synonyms.push({"id" : 0, "synonym" : synonym[0]});
        delete synonym[0];
    } catch (error) {
        synonym = null;
    }
    try {
        antonym = await oxfordService.antonymService.getAntonyms(word);
        hints.antonyms.push({"id" : 0, "antonym" : antonym[0]});
    } catch (error) {
        antonym = null;
    }
    try {
        printingHelper.gamePrinter(hints);
        gameHelper.promptAnswer(word, synonym);
    } catch (error) {
        console.log("Error initializing game");
    }
}

module.exports = {
    playGame
};