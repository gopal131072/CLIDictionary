let definitionPrinter = (definitions, word) => {
    // Printing after the GET request to make sure the word exists.
    console.log(word);
    console.log("Definition : ")
    let count = 1;
    for (let definition of definitions) {
        console.log(count + ". " + definition.lexicalCategory + " - " + definition.definition);
        count++;
    }
}

let examplePrinter = (examples, word) => {
    if (examples.length != 0) {
        // Printing after the examples object is parsed to make sure the examples exist.
        console.log("Examples : ")
        let count = 1;
        for (let example of examples) {
            console.log(count + ". " + example.lexicalCategory + " - " + example.example);
            count++;
        }
    }  
    else
        console.log("No examples found");
}

let synonymPrinter = async (synonyms) => {
    console.log("Synonyms : ");
    for(synonym of synonyms) {
        console.log(synonym)
    }
}

let antonymPrinter = async (antonyms) => {
    console.log("Antonyms : ");
    for(antonym of antonyms) {
        console.log(antonym)
    }
}

module.exports = {
    definitionPrinter,
    examplePrinter,
    synonymPrinter,
    antonymPrinter
};