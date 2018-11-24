var antonymParser = async (data) => {
    try {
        // An array to hold all the definitons
        let antonyms = [];
        // Parsing through every lexical entry in the results
        for (let lexicalEntries of data.results[0].lexicalEntries) {
            for (let entry of lexicalEntries.entries) {
                for (let sense of entry.senses) {
                    for(let antonym of sense.antonyms)
                        // Push an object consisting of the category and the corresponding definition into the array.
                        antonyms.push(antonym.text);
                }
            }
        }
        return antonyms;
    } catch (error) {
        console.log(error);
        throw error;
    }
}

module.exports = {
    antonymParser
};