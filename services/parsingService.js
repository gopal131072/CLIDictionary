// Internal Libraries import
const oxfordService = require("../services");
const dictionaryService = require("./dictionaryService");
const wordOfTheDayService = require("./wordOfTheDayService");

// Function to parse through the documents and determine appropriate service to be used.
let argumentParser = async (numberOfArguments, args) => {
    try {
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
                    await dictionaryService.getDictionary(args[1]);
                    break;
                default:
                    console.log("Invalid argument passed : " + args[0]);
                    break;
            }
        }
        else if (numberOfArguments == 1)
            await dictionaryService.getDictionary(args[0]);
        else if (numberOfArguments == 0) {
            process.stdout.write("The word of the day is ");
            await wordOfTheDayService.getWordOfTheDay();
        }
        else
            console.log("Invalid number of arguments. Please look through the help section for more details.");
    } catch (error) {
        if(error.response.status == 404)
            console.log("I'm sorry the word you supplied was not recognized.");
        else
            console.log(error);
    }
}

module.exports = {
    argumentParser
};