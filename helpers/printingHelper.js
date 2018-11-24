let definitionPrinter = (definitions, word) => {
    // Printing after the GET request to make sure the word exists.
    console.log(word);
    console.log("Definition : ")
    let count = 1;
    for (let definition of definitions) {
        console.log(count + ". " + definition.lexicalCategory + " - " + definition.definition);
        count++;
    }
    console.log();
}

let examplePrinter = (examples) => {
    if (examples.length != 0) {
        // Printing after the examples object is parsed to make sure the examples exist.
        console.log("Examples : ")
        let count = 1;
        for (let example of examples) {
            console.log(count + ". " + example.lexicalCategory + " - " + example.example);
            count++;
        }
        console.log();
    }  
    else
        console.log("No examples found");
}

let synonymPrinter = async (synonyms) => {
    console.log("Synonyms : ");
    for(synonym of synonyms) {
        process.stdout.write(synonym + ", ")
    }
    console.log();
    console.log();
}

let antonymPrinter = async (antonyms) => {
    console.log("Antonyms : ");
    for(antonym of antonyms) {
        process.stdout.write(antonym + ", ")
    }
    console.log();
    console.log();
}

module.exports = {
    definitionPrinter,
    examplePrinter,
    synonymPrinter,
    antonymPrinter
};