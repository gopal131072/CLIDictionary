// Function to parse through the documents and determine appropriate service to be used.
let argumentParser = (numberOfArguments, args) => {
    if (numberOfArguments == 2) {
        switch (args[0]) {
            case "def":
                console.log(oxfordService.definitionService.getDefinition(args[1]));
                break;
            case "syn":
                console.log(oxfordService.synonymService.getSynonyms(args[1]));
                break;
            case "ant":
                console.log(oxfordService.antonymService.getAntonyms(args[1]));
                break;
            case "ex":
                console.log(oxfordService.exampleService.getExamples(args[1]));
                break;
            case "dict":
                console.log(oxfordService.dictionaryService.getExamples(args[1]));
                break;
            default:
                console.log("Invalid argument passed : " + args[0]);
                break;
        }
    }
    else if (numberOfArguments == 1)
        console.log(oxfordService.dictionaryService.getDictionary(args[0]));
    else if (numberOfArguments == 0)
        console.log(oxfordService.wordOfTheDayService.getWordOfTheDay());
    else
        console.log("Invalid number of arguments. Please look through the help section for more details.")
}

module.exports = {
    argumentParser
};