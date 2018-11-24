// External Libraries import
const axios = require("axios");

// Internal Libraries import
const config = require("../config");
const exampleHelper = require("../helpers/exampleHelper");
const printingHelper = require("../helpers/printingHelper");

var getExamples = async (word) => {
    try{
        let example = await axios(config.apiUrl + "/entries/en/" + word, 
            {headers: { "app_id" : config.authorization.appId, "app_key" : config.authorization.appKey }});
        // Helper function to parse through the response and retrieve the definition
        examples = await exampleHelper.exampleParser(example.data);
        printingHelper.examplePrinter(examples);
    } catch (error) {
        if(error.response.status == 404)
            console.log("I'm sorry the word you supplied was not recognized.");
        else
            throw error;
    }
};

module.exports = {
    getExamples
};