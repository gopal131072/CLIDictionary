let synonymParser = async (data) => {
    try {
        // An array to hold all the definitons
        let synonyms = [];
        // Parsing through every lexical entry in the results
        for (let lexicalEntries of data.results[0].lexicalEntries) {
            for (let entry of lexicalEntries.entries) {
                for (let sense of entry.senses) {
                    for(let synonym of sense.synonyms)
                        // Push an object consisting of the category and the corresponding definition into the array.
                        synonyms.push(synonym.text);
                }
            }
        }
        return synonyms;
    } catch (error) {
        throw error;
    }
};

module.exports = {
    synonymParser
};