// Internal Libraries
const dictionaryService = require("./dictionaryService");

// List of random words generated over at randomlists.org
const words = [ "egg", "crate", "remind", "vast", "snore", "rude", "harm", "ant", "stay", "green", "unnatural", 
                "ripe","attractive", "few", "level", "obedient", "request", "queue", "premium", "sweltering", "general", 
                "fashion", "walk", "fancy", "coast", "design", "goose", "circle", "imported", 'dead', "violet", 
                "care", "scream", "dime", "tie", "grandiose", "tent", "dress", "stupendous", "spiky" ];

// Generating dictionary for the word of the day
let getWordOfTheDay = () => {
    dictionaryService.getDictionary(words[Math.floor(Math.random()*40)]);
}

module.exports = {
    getWordOfTheDay
}