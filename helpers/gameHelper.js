// External libraries
const prompt = require("prompt");

let promptAnswer = async (word, synonym) => {
    prompt.message = "Guess the word";
    prompt.get("Answer", (error, result) => {
        if (synonym != null)
            synonymExists = synonym.indexOf(result["Answer"]);
        if (word == result["Answer"] || synonymExists != -1) {
            console.log("That's the right answer!");
        }
        else {
            console.log("Wrong answer");
        }
    })
}

let generateHints = async () => {
    
}

let validateAnswer = () => {

}

let rejectAnswer = () => {

}

let getHints = () => {

}

let displayHints = () => {

}

module.exports = {
    promptAnswer
}