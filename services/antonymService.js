// External Libraries import
const axios = require("axios");

// Internal Libraries import
const config = require("../config");
const antonymHelper = require("../helpers/antonymHelper");

var getAntonyms = async (word) => {
    try{
        let antonyms = await axios(config.apiUrl + "/entries/en/" + word + "/antonyms", 
            {headers: { "app_id" : config.authorization.appId, "app_key" : config.authorization.appKey }});
        // Helper function to parse through the response and retrieve the antonyms
        return antonyms.data;
    } catch (error) {
        console.log(error);
    }
};

module.exports = {
    getAntonyms
};