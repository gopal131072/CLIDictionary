// API URL for oxford dictionary API
const apiUrl = "https://od-api.oxforddictionaries.com:443/api/v1";

// Authorization object used for API calls. Replace the properties with your own ID and key.
const authorization = {
    "appId" : "Your appId here",
    "appKey" : "Your appKey here"
};

// List of random words generated over at randomlists.org
const words = [ "egg", "crate", "remind", "vast", "snore", "rude", "harm", "ant", "stay", "green", "unnatural", 
                "ripe","attractive", "few", "level", "obedient", "request", "queue", "premium", "sweltering", "general", 
                "fashion", "walk", "fancy", "coast", "design", "goose", "circle", "import", 'dead', "noise", 
                "care", "scream", "dime", "tie", "grandiose", "tent", "dress", "stupendous", "spike" ];
                
module.exports = {
    apiUrl,
    authorization,
    words
};