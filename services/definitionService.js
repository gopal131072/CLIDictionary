// External Libraries import
const axios = require("axios");

// Internal Libraries import
const config = require("../config");
const definitionHelper = require("../helpers/definitionHelper");

let getDefinition = async (word) => {
    try{
        let definition = await axios(config.apiUrl + "/entries/en/" + word, 
            {headers: { "app_id" : config.authorization.appId, "app_key" : config.authorization.appKey }});
        // Helper function to parse through the response and retrieve the definition
        definitions = await definitionHelper.definitionParser(definition.data);
        return definitions;
    } catch (error) {
        throw error;
    }
};

module.exports = {
    getDefinition
};