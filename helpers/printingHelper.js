let definitionPrinter = (definitions, word) => {
    if(typeof definitions != "undefined"){
        console.log();
        console.log(word.toUpperCase());
        console.log("--------------------------------------------------------------------------------------");
        console.log("Definition : ");
        console.log("--------------------------------------------------------------------------------------");
        let count = 1;
        for (let definition of definitions) {
            console.log(count + ". " + definition.lexicalCategory + " - " + definition.definition);
            count++;
        }
        console.log();
    }
};

let examplePrinter = (examples) => {
    if (typeof examples != "undefined") {
        console.log("--------------------------------------------------------------------------------------");
        console.log("Examples : ");
        console.log("--------------------------------------------------------------------------------------");
        let count = 1;
        for (let example of examples) {
            console.log(count + ". " + example.lexicalCategory + " - " + example.example);
            count++;
        }
        console.log();
    }  
};

let synonymPrinter = (synonyms) => {
    if (typeof synonyms != "undefined") {
        console.log("--------------------------------------------------------------------------------------");
        console.log("Synonyms : ");
        console.log("--------------------------------------------------------------------------------------");
        for(index in synonyms) {
            if(index != synonyms.length-1)
                process.stdout.write(synonyms[index] + ", ");
            else
                process.stdout.write(synonyms[index]);
        }
        console.log();
        console.log();
    }
};

let antonymPrinter = (antonyms) => {
    if (typeof antonyms != "undefined") {
        console.log("--------------------------------------------------------------------------------------");
        console.log("Antonyms : ");
        console.log("--------------------------------------------------------------------------------------");
        for(index in antonyms) {
            if(index != antonyms.length-1)
                process.stdout.write(antonyms[index] + ", ");
            else
                process.stdout.write(antonyms[index]);
        }
        console.log();
        console.log();
    }
};

let gamePrinter = (hints) => {
    console.log("--------------------------------------------------------------------------------------");
    console.log("Definitions : ");
    for (definition of hints.definitions) {
        console.log("\u25CF " + definition.definition);
    }
    console.log("--------------------------------------------------------------------------------------");
    console.log("Synonyms : ");
    for (synonym of hints.synonyms) {
        if(synonym)
            console.log("\u25CF " + synonym.synonym);
    }
    console.log("--------------------------------------------------------------------------------------");
    console.log("Antonyms : ");
    for (antonym of hints.antonyms) {
        if(antonym)
            console.log("\u25CF " + antonym.antonym);
    }
    console.log("--------------------------------------------------------------------------------------");
};

let choicePrinter = () => {
    console.log("--------------------------------------------------------------------------------------");
    console.log("I'm afraid that's not right. Would you like to keep trying?");
    console.log("Please choose one of the following options");
    console.log("1. Try again");
    console.log("2. Get a hint");
    console.log("3. Quit");
    console.log("--------------------------------------------------------------------------------------");
};

let helpPrinter = () => {
    console.log("Please refer to the documentation on https://www.github.com/gopal131072/CLIDictionary");
};

module.exports = {
    definitionPrinter,
    examplePrinter,
    synonymPrinter,
    antonymPrinter,
    gamePrinter,
    choicePrinter,
    helpPrinter
};