// External Libraries import
const axios = require("axios");

// Internal Libraries import
const config = require("../config");
const definitionHelper = require("../helpers/definitionHelper");
const printingHelper = require("../helpers/printingHelper");

var getDefinition = async (word) => {
    try{
        let definition = await axios(config.apiUrl + "/entries/en/" + word, 
            {headers: { "app_id" : config.authorization.appId, "app_key" : config.authorization.appKey }});
        // Helper function to parse through the response and retrieve the definition
        definitions = await definitionHelper.definitionParser(definition.data);
        // Helper function to format the definitions well
        printingHelper.definitionPrinter(definitions, word);
    } catch (error) {
        if(error.response.status == 404)
            console.log("I'm sorry the word you supplied was not recognized.");
        else
            throw error;
    }
};

module.exports = {
    getDefinition
};