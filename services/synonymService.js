// External Libraries import
const axios = require("axios");

// Internal Libraries import
const config = require("../config");
const synonymHelper = require("../helpers/synonymHelper");

let getSynonyms = async (word) => {
    try{
        let synonym = await axios(config.apiUrl + "/entries/en/" + word + "/synonyms", 
            {headers: { "app_id" : config.authorization.appId, "app_key" : config.authorization.appKey }});
        // Helper function to parse through the response and retrieve the synonyms
        synonyms = await synonymHelper.synonymParser(synonym.data);
        return synonyms;
    } catch (error) {
        throw error;
    }
};

module.exports = {
    getSynonyms
};