let exampleParser = async (data) => {
    try {
        // An array to hold all the examples
        let examples = [];
        // Parsing through every lexical entry in the results
        for (let lexicalEntries of data.results[0].lexicalEntries) {
            // Get the category of the example
            let lexicalCategory = lexicalEntries.lexicalCategory;
            for (let entry of lexicalEntries.entries) {
                for (let sense of entry.senses) {
                    if (sense.examples) {
                        for(let example of sense.examples)
                            // Push an object consisting of the category and the corresponding example into the array.
                            examples.push({"lexicalCategory" : lexicalCategory, "example" : example.text});
                    }
                }
            }
        }
        return examples;
    } catch (error) {
        throw error;
    }
};

module.exports = {
    exampleParser
};