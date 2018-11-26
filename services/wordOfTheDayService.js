// Internal Libraries
const config = require("../config");
const dictionaryService = require("./dictionaryService");

// Generating dictionary for the word of the day
let getWordOfTheDay = () => {
    // Picks a random word from the words array in config and displays its entire dictionary.
    dictionaryService.getDictionary(config.words[Math.floor(Math.random()*(config.words.length))]);
};

module.exports = {
    getWordOfTheDay
};