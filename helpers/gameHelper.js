let prompt = (question, callback) => {
    var stdin = process.stdin,
        stdout = process.stdout;
    stdin.resume();
    stdout.write(question);
    stdin.once('data', function (data) {
        callback(data.toString().trim());
    });
}

let game = async (definitions, synonyms, antonyms, word) => {
    if(typeof definitions != "undefined")
        console.log(definitions[0]);
    if(typeof synonyms != "undefined")
        console.log(synonyms[0]);
    else
        console.log("No synonyms available");
    if(typeof antonyms != "undefined")
        console.log(antonyms[0]);
    else
        console.log("No antonyms available");
    console.log(synonyms);
    prompt("Guess the word!\n", (input) => {
        if(input == word || synonyms.indexOf(word) != -1){
            console.log("You guessed right!");
        }
        else{
            console.log("You guessed wrong!");
        }
    })
}

module.exports = {
    prompt,
    game
};