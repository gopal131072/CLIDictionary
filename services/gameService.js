// External Libraries
const axios = require("axios");

// Internal Libraries
const config = require("../config");
const definitionHelper = require("../helpers/definitionHelper");
const synonymHelper = require("../helpers/synonymHelper");
const antonymHelper = require("../helpers/antonymHelper");
const gameHelper = require("../helpers/gameHelper");

// List of random words generated over at randomlists.org
const words = [ "egg", "crate", "remind", "vast", "snore", "rude", "harm", "ant", "stay", "green", "unnatural", 
                "ripe","attractive", "few", "level", "obedient", "request", "queue", "premium", "sweltering", "general", 
                "fashion", "walk", "fancy", "coast", "design", "goose", "circle", "import", 'dead', "noise", 
                "care", "scream", "dime", "tie", "grandiose", "tent", "dress", "stupendous", "spike" ];
                
let playGame = async () => {
    var word = words[Math.floor(Math.random()*40)];
    try {
        var definition = await axios(config.apiUrl + "/entries/en/" + word, 
        {headers: { "app_id" : config.authorization.appId, "app_key" : config.authorization.appKey }});
    } catch (error) {
        if(error.response.status != 404)
            throw error;
    }
    try {
        var definitions = await definitionHelper.definitionParser(definition.data);
    } catch (error) {
        console.log("No definitions available");
    }
    try {
        var synonym = await axios(config.apiUrl + "/entries/en/" + word + "/synonyms", 
        {headers: { "app_id" : config.authorization.appId, "app_key" : config.authorization.appKey }});
    } catch (error) {
        if(error.response.status != 404)
            throw error;
    }
    try {
        var synonyms = await synonymHelper.synonymParser(synonym.data);
    } catch (error) {
        //console.log("No synonyms available");
    }
    try {
        var antonym = await axios(config.apiUrl + "/entries/en/" + word + "/antonyms", 
        {headers: { "app_id" : config.authorization.appId, "app_key" : config.authorization.appKey }});
    } catch (error) {
        if(error.response.status != 404)
            throw error;
    }
    try {
        var antonyms = await antonymHelper.antonymParser(antonym.data);
    } catch (error) {
        //console.log("No antonyms available");
    }
    gameHelper.game(definitions, synonyms, antonyms, word);
}

module.exports = {
    playGame
};