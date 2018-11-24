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
        // Printing after the GET request to make sure the word exists.
        console.log("The definition of the word " + word + " can be the following : ")
        // Helper function to parse through the response and retrieve the definition
        definitions = await definitionHelper.definitionParser(definition.data);
        // Helper function to format the definitions well
        printingHelper.definitionPrinter(definitions);
    } catch (error) {
        if(error.response.status == 404)
            console.log("I'm sorry the word you supplied was not recognized.");
        else
            console.log(error)
    }
};

module.exports = {
    getDefinition
};