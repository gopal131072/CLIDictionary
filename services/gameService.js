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
                "fashion", "walk", "fancy", "coast", "design", "goose", "circle", "imported", 'dead', "violet", 
                "care", "scream", "dime", "tie", "grandiose", "tent", "dress", "stupendous", "spiky" ];
                
let playGame = async () => {
        var word = words[Math.floor(Math.random()*40)];
        try {
        var definition = await axios(config.apiUrl + "/entries/en/" + word, 
            {headers: { "app_id" : config.authorization.appId, "app_key" : config.authorization.appKey }});
        } catch (error) {
            if(error.response.status == 404)
                console.log("I'm sorry the word you supplied was not recognized.");
            else
                throw error;
        }
        try {
            definitions = await definitionHelper.definitionParser(definition.data);
        } catch (error) {
            console.log("No definitions available");
        }
        try {
        var synonym = await axios(config.apiUrl + "/entries/en/" + word + "/synonyms", 
            {headers: { "app_id" : config.authorization.appId, "app_key" : config.authorization.appKey }});
        } catch (error) {
            if(error.response.status == 404)
                console.log("I'm sorry the word you supplied was not recognized.");
            else
                throw error;
        }
        try {
            synonyms = await synonymHelper.synonymParser(synonym.data);
        } catch (error) {
            console.log("No synonyms available");
        }
        try {
            var antonym = await axios(config.apiUrl + "/entries/en/" + word + "/antonyms", 
            {headers: { "app_id" : config.authorization.appId, "app_key" : config.authorization.appKey }});
        } catch (error) {
            if(error.response.status == 404)
                console.log("I'm sorry the word you supplied was not recognized.");
            else
                throw error;
        }
        try {
            antonyms = await antonymHelper.antonymParser(antonym.data);
        } catch (error) {
            console.log("No antonyms available");
        }
        console.log(definitions[0]);
        console.log(synonyms[0]);
        console.log(antonyms[0]);
        gameHelper.prompt("What's the word? \n", (input) => {
            if(input == word || synonyms.indexOf(word) != -1)
                console.log("That's right!");
            else
                console.log("That's wrong!");
        });
}

module.exports = {
    playGame
};