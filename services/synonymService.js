// External Libraries import
const axios = require("axios");

// Internal Libraries import
const config = require("../config");
const synonymHelper = require("../helpers/synonymHelper");

var getSynonyms = async (word) => {
    try{
        let synonyms = await axios(config.apiUrl + "/entries/en/" + word + "/synonyms", 
            {headers: { "app_id" : config.authorization.appId, "app_key" : config.authorization.appKey }});
        // Helper function to parse through the response and retrieve the synonyms
        return synonyms.data;
    } catch (error) {
        console.log(error);
        throw(error);
    }
};

module.exports = {
    getSynonyms
};