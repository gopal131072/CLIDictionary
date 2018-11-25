let definitionPrinter = (definitions, word) => {
    if(typeof definitions != "undefined"){
        console.log(word);
        console.log("Definition : ")
        let count = 1;
        for (let definition of definitions) {
            console.log(count + ". " + definition.lexicalCategory + " - " + definition.definition);
            count++;
        }
        console.log();
    }
}

let examplePrinter = (examples) => {
    if (typeof examples != "undefined") {
        // Printing after the examples object is parsed to make sure the examples exist.
        console.log("Examples : ")
        let count = 1;
        for (let example of examples) {
            console.log(count + ". " + example.lexicalCategory + " - " + example.example);
            count++;
        }
        console.log();
    }  
}

let synonymPrinter = async (synonyms) => {
    if (typeof synonyms != "undefined") {
        console.log("Synonyms : ");
        for(index in synonyms) {
            if(index != synonyms.length-1)
                process.stdout.write(synonyms[index] + ", ");
            else
                process.stdout.write(synonyms[index]);
        }
        console.log();
        console.log();
    }
}

let antonymPrinter = async (antonyms) => {
    if (typeof antonyms != "undefined") {
        console.log("Antonyms : ");
        for(index in antonyms) {
            if(index != antonyms.length-1)
                process.stdout.write(antonyms[index] + ", ");
            else
                process.stdout.write(antonyms[index]);
        }
        console.log();
    }
}

let gamePrinter = (word, definitions, synonyms, antonyms) => {
    console.log(word);
}

let helpPrinter = () => {
    console.log("Use valid arguments");
}

module.exports = {
    definitionPrinter,
    examplePrinter,
    synonymPrinter,
    antonymPrinter,
    gamePrinter,
    helpPrinter
};