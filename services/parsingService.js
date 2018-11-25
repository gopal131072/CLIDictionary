// Internal Libraries import
const oxfordService = require("../services");
const dictionaryService = require("./dictionaryService");
const wordOfTheDayService = require("./wordOfTheDayService");
const gameService = require("./gameService");
const printingHelper = require("../helpers/printingHelper");

// Function to parse through the documents and determine appropriate service to be used.
let argumentParser = async (numberOfArguments, args) => {
    if (numberOfArguments == 2) {
        switch (args[0]) {
            case "def":
                try {
                    let definition = await oxfordService.definitionService.getDefinition(args[1]);
                    printingHelper.definitionPrinter(definition, args[1]);
                } catch (error) {
                    console.log("The word you supplied does not exist.\n");
                }
                break;
            case "syn":
                try {
                    let synonym = await oxfordService.synonymService.getSynonyms(args[1]);
                    printingHelper.synonymPrinter(synonym);
                } catch (error) {
                    console.log("The word you supplied does not have any synonyms.\n");
                }
                break;
            case "ant":
                try {
                    let antonym = await oxfordService.antonymService.getAntonyms(args[1]);
                    printingHelper.antonymPrinter(antonym);
                } catch (error) {
                    console.log("The word you supplied does not have any antonyms.\n");
                }
                break;
            case "ex":
                try {
                    let example = await oxfordService.exampleService.getExamples(args[1]);
                    printingHelper.examplePrinter(example);
                } catch (error) {
                    console.log("The word you supplied does not have any examples.\n");
                }
                break;
            case "dict":
                try {
                    await dictionaryService.getDictionary(args[1]);
                } catch (error) {
                    console.log("Exiting\n");
                } 
                break;
            default:
                console.log("Invalid argument passed : " + args[0]);
                break;
        }
    }
    else if (numberOfArguments == 1){
        switch (args[0]) {
        case "play":
            try {
                await gameService.playGame();
            } catch (error) {
                console.log("Error initiating the game");
            }
            break;
        case "help":
            printingHelper.helpPrinter();
            break;
        default:
            try {
                await dictionaryService.getDictionary(args[0]);
            } catch (error) {
                console.log("Exiting");
            } 
            break;
        }
    }
    else if (numberOfArguments == 0) {
        process.stdout.write("The word of the day is ");
        await wordOfTheDayService.getWordOfTheDay();
    }
    else
        console.log("Invalid number of arguments. Please refer to the documentation on https://www.github.com/gopal131072/CLIDictionary");
}

module.exports = {
    argumentParser
};