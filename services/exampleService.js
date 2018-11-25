// External Libraries import
const axios = require("axios");

// Internal Libraries import
const config = require("../config");
const exampleHelper = require("../helpers/exampleHelper");

let getExamples = async (word) => {
    try{
        let example = await axios(config.apiUrl + "/entries/en/" + word, 
            {headers: { "app_id" : config.authorization.appId, "app_key" : config.authorization.appKey }});
        // Helper function to parse through the response and retrieve the definition
        examples = await exampleHelper.exampleParser(example.data);
        if(examples.length != 0)
            return examples;
        else {
            console.log("The word you supplied does not have any examples.\n");
            return undefined;
        }
    } catch (error) {
        throw error;
    }
};

module.exports = {
    getExamples
};