// Internal Libraries
const config = require("../config");
const oxfordService = require("../services");
const printingHelper = require("../helpers/printingHelper");
                
let playGame = async () => {
    let word = config.words[Math.floor(Math.random()*(config.words.length))];
    var definition, synonym, antonym;
    try {
        definition = await oxfordService.definitionService.getDefinition(word);
    } catch (error) {
        throw error;
    }
    try {
        synonym = await oxfordService.synonymService.getSynonyms(word);
    } catch (error) {
        synonym = null;
    }
    try {
        antonym = await oxfordService.antonymService.getAntonyms(word);
    } catch (error) {
        antonym = null;
    }
    gameHelper.game(definition, synonym, antonym);
}

module.exports = {
    playGame
};