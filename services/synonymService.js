// External Libraries import
const axios = require("axios");

// Internal Libraries import
const config = require("../config");
const synonymHelper = require("../helpers/synonymHelper");
const printingHelper = require("../helpers/printingHelper");

var getSynonyms = async (word) => {
    try{
        let synonym = await axios(config.apiUrl + "/entries/en/" + word + "/synonyms", 
            {headers: { "app_id" : config.authorization.appId, "app_key" : config.authorization.appKey }});
        // Helper function to parse through the response and retrieve the synonyms
        synonyms = await synonymHelper.synonymParser(synonym.data);
        printingHelper.synonymPrinter(synonyms);
    } catch (error) {
        if(error.response.status == 404)
            console.log("I'm sorry the word you supplied does not have synonyms.");
        else
            console.log(error)
    }
};

module.exports = {
    getSynonyms
};