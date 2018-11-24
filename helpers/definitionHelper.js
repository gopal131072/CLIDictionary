let definitionParser = async (data) => {
    try {
        // An array to hold all the definitons
        let definitions = [];
        // Parsing through every lexical entry in the results
        for (let lexicalEntries of data.results[0].lexicalEntries) {
            // Get the category of the definition
            let lexicalCategory = lexicalEntries.lexicalCategory;
            for (let entry of lexicalEntries.entries) {
                for (let sense of entry.senses) {
                    for(let definition of sense.definitions)
                        // Push an object consisting of the category and the corresponding definition into the array.
                        definitions.push({"lexicalCategory" : lexicalCategory, "definition" : definition});
                }
            }
        }
        return definitions;
    } catch (error) {
        throw error;
    }
}

module.exports = {
    definitionParser
};