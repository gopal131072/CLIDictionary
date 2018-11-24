// External Libraries import
const axios = require("axios");

// Internal Libraries import
const config = require("../config");
const dictionaryHelper = require("../helpers/dictionaryHelper");

var getDictionary = async (word) => {
    try{
        let dictionary = await axios(config.apiUrl + "/entries/en/" + word, 
            {headers: { "app_id" : config.authorization.appId, "app_key" : config.authorization.appKey }});
        // Helper function to parse through the response and retrieve the antonyms
        return dictionary.data;
    } catch (error) {
        console.log(error);
        throw(error);
    }
};

module.exports = {
    getDictionary
};