// Internal Libraries import
const oxfordService = require("../services");
const dictionaryService = require("./dictionaryService");
const wordOfTheDayService = require("./wordOfTheDayService");
const printingHelper = require("../helpers/printingHelper");

// Function to parse through the documents and determine appropriate service to be used.
let argumentParser = async (numberOfArguments, args) => {
    try {
        if (numberOfArguments == 2) {
            switch (args[0]) {
                case "def":
                    definition = await oxfordService.definitionService.getDefinition(args[1]);
                    await printingHelper.definitionPrinter(definition, args[1]);
                    break;
                case "syn":
                    synonym = await oxfordService.synonymService.getSynonyms(args[1]);
                    await printingHelper.synonymPrinter(synonym);
                    break;
                case "ant":
                    antonym = await oxfordService.antonymService.getAntonyms(args[1]);
                    await printingHelper.antonymPrinter(antonym);
                    break;
                case "ex":
                    example = await oxfordService.exampleService.getExamples(args[1]);
                    await printingHelper.examplePrinter(example);
                    break;
                case "dict":
                    await dictionaryService.getDictionary(args[1]);
                    break;
                default:
                    console.log("Invalid argument passed : " + args[0]);
                    break;
            }
        }
        else if (numberOfArguments == 1){
            switch (args[0]) {
            case "play":
                await oxfordService.gameService.playGame();
                break;
            case "help":
                await printingHelper.helpPrinter();
                break;
            default:
                await dictionaryService.getDictionary(args[0]);
                break;
            }
        }
        else if (numberOfArguments == 0) {
            process.stdout.write("The word of the day is ");
            await wordOfTheDayService.getWordOfTheDay();
        }
        else
            console.log("Invalid number of arguments. Please look through the help section for more details.");
    } catch (error) {
        console.log("Exiting");
    }
}

module.exports = {
    argumentParser
};