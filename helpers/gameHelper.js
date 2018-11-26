// External libraries
const prompt = require("prompt");

// Internal Libraries
const dictionaryService = require("../services/dictionaryService");
const printingHelper = require("../helpers/printingHelper");

// Starts off the entire game chain
let startGame = async (word, definition, synonym, antonym, hints) => {
    printingHelper.gamePrinter(hints);
    await promptAnswer(word, definition, synonym, antonym, hints);
};

// Prompts the user to enter a guess.
let promptAnswer = async (word, definition, synonym, antonym, hints) => {
    // The promise wrapper lets us await this entire function.
    let answer = await new Promise ((resolve, reject) => {
        prompt.message = "Guess the word";
        prompt.get("Answer", (error, result) => {
            if (synonym != null)
                synonymExists = synonym.indexOf(result["Answer"]);
            else
                synonymExists = -1;
            if (word == result["Answer"] || synonymExists != -1) {
                resolve(true);
            }
            else {
                resolve(false);
            }
        })
    });
    if (answer) {
        console.log("That's right!");
    }
    else {
        await promptChoice(word, definition, synonym, antonym, hints);
    }
};

// Final prompt for guess
let promptFinalAnswer = async (word, definition, synonym, antonym, hints) => {
    // The promise wrapper lets us await this entire function.
    let answer = await new Promise ((resolve, reject) => {
        prompt.message = "This is your final chance!";
        prompt.get("Guess", (error, result) => {
            if (synonym != null)
                synonymExists = synonym.indexOf(result["Guess"]);
            else
                synonymExists = -1;
            if (word == result["Guess"] || synonymExists != -1) {
                resolve(true);
            }
            else {
                resolve(false);
            }
        })
    });
    if (answer) {
        console.log("That's right!");
    }
    else {
        console.log("Here's the word : ");
        await dictionaryService.getDictionary(word);
    }
};

// Failiure scenario, user is given choices on what to do.
let promptChoice = async (word, definition, synonym, antonym, hints) => {
    printingHelper.choicePrinter();
    choice = await new Promise ((resolve, reject) => {
        prompt.message = "Choose an option";
        prompt.get("Choice", (error, result) => {
            resolve(result["Choice"]);
        })
    });
    switch (choice) {
        case "1": {
            promptAnswer(word, definition, synonym, antonym, hints);
            break;
        }
        case "2": {
            await generateHints(word, definition, synonym, antonym, hints);
            break;
        }
        case "3": {
            console.log("Before you leave, here's the word : ");
            await dictionaryService.getDictionary(word);
            break;
        }
        default: {
            console.log("Invalid choice");
            promptChoice(word, definition, synonym, antonym, hints);
        }
    }
};

// A random hint is generated based on how many definitions/synonyms/antonyms the word has.
// If the hint is the word itself scrambled then the user will not be given any more hints.
let generateHints = async (word, definition, synonym, antonym, hints) => {
    // Ensure that only hints that are available are generated.
    if (typeof synonym != "undefined" && typeof antonym != "undefined" && typeof definition != "undefined" && synonym != null && antonym != null && definition != null) {
        if (antonym.length > hints.antonyms.length && synonym.length > hints.synonyms.length && definition.length > hints.definitions.length)
            emptyHandler = 4;
        else if (synonym.length > hints.synonyms.length && definition.length > hints.definitions.length)
            emptyHandler = 3;
        else if(definition.length > hints.definitions.length)
            emptyHandler = 2;
        else
            emptyHandler = 1;
    }
    else if (typeof definition != "undefined" && definition != null) {
        if(definition.length > hints.definitions.length)
            emptyHandler = 2;
        else
            emptyHandler = 1;
    }
    else {
        emptyHandler = -1;
    }
    switch (Math.floor(Math.random()*emptyHandler)) {
        case 0: {
            console.log("--------------------------------------------------------------------------------------");
            console.log("Here's the word all jumbled up " + jumbleWord(word));
            console.log("--------------------------------------------------------------------------------------");
            promptFinalAnswer(word, definition, synonym, antonym, hints);
            break;
        }
        case 1: {
            hints.definitions.push({"id" : hints.definitions.length, "definition" : definition[hints.definitions.length].definition});
            printingHelper.gamePrinter(hints);
            promptAnswer(word, definition, synonym, antonym, hints);
            break;
        }
        case 2: {
            hints.synonyms.push({"id" : hints.synonyms.length, "synonym" : synonym[hints.synonyms.length]});
            delete synonym[hints.synonyms.length];
            printingHelper.gamePrinter(hints);
            promptAnswer(word, definition, synonym, antonym, hints);
            break;
        }
        case 3: {
            hints.antonyms.push({"id" : hints.antonyms.length, "antonym" : antonym[hints.antonyms.length]});
            printingHelper.gamePrinter(hints);
            promptAnswer(word, definition, synonym, antonym, hints);
            break;
        }
        default: {
            console.log("Maximum hints given");
            printingHelper.gamePrinter(hints);
            promptAnswer(word, definition, synonym, antonym, hints);
        }
    }
};

// Helper function to scramble the word.
let jumbleWord = (word) => {
    let temp = word.split(""),
        len = temp.length;

    for(let index = len - 1; index > 0; index--) {
        let rand = Math.floor(Math.random() * (index + 1));
        let tmp = temp[index];
        temp[index] = temp[rand];
        temp[rand] = tmp;
    }

    return temp.join("");
};

module.exports = {
    startGame
};