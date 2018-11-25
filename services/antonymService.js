// External Libraries import
const axios = require("axios");

// Internal Libraries import
const config = require("../config");
const antonymHelper = require("../helpers/antonymHelper");

let getAntonyms = async (word) => {
    try{
        let antonym = await axios(config.apiUrl + "/entries/en/" + word + "/antonyms", 
            {headers: { "app_id" : config.authorization.appId, "app_key" : config.authorization.appKey }});
        // Helper function to parse through the response and retrieve the antonyms
        antonyms = await antonymHelper.antonymParser(antonym.data);
        return antonyms;
    } catch (error) {
        throw error;
    }
};

module.exports = {
    getAntonyms
};