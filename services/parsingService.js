// Internal Libraries import
const oxfordService = require('../services')

// Function to parse through the documents and determine appropriate service to be used.
let argumentParser = async (numberOfArguments, args) => {
    if (numberOfArguments == 2) {
        switch (args[0]) {
            case "def":
                await oxfordService.definitionService.getDefinition(args[1]);
                break;
            case "syn":
                await oxfordService.synonymService.getSynonyms(args[1]);
                break;
            case "ant":
                await oxfordService.antonymService.getAntonyms(args[1]);
                break;
            case "ex":
                await oxfordService.exampleService.getExamples(args[1]);
                break;
            case "dict":
                await oxfordService.dictionaryService.getExamples(args[1]);
                break;
            default:
                console.log("Invalid argument passed : " + args[0]);
                break;
        }
    }
    else if (numberOfArguments == 1)
        await oxfordService.dictionaryService.getDictionary(args[0]);
    else if (numberOfArguments == 0)
        await oxfordService.wordOfTheDayService.getWordOfTheDay();
    else
        console.log("Invalid number of arguments. Please look through the help section for more details.");
}

module.exports = {
    argumentParser
};