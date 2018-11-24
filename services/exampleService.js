// External Libraries import
const axios = require("axios");

// Internal Libraries import
const config = require("../config");
const exampleHelper = require("../helpers/exampleHelper");

var getExamples = async (word) => {
    try{
        let examples = await axios(config.apiUrl + "/entries/en/" + word, 
            {headers: { "app_id" : config.authorization.appId, "app_key" : config.authorization.appKey }});
        // Helper function to parse through the response and retrieve the definition
        definitionHelper.definitionParser(examples.data);
    } catch (error) {
        console.log(error);
        throw(error);
    }
};

module.exports = {
    getExamples
};