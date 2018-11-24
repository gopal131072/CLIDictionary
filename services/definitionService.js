// External Libraries import
const axios = require("axios");

// Internal Libraries import
const config = require("../config");
const definitionHelper = require("../helpers/definitionHelper");

var getDefinition = async (word) => {
    try{
        let definition = await axios(config.apiUrl + "/entries/en/" + word, 
            {headers: { "app_id" : config.authorization.appId, "app_key" : config.authorization.appKey }});
        // Helper function to parse through the response and retrieve the definition
        return definition.data;
    } catch (error) {
        console.log(error);
        throw(error);
    }
};

module.exports = {
    getDefinition
};