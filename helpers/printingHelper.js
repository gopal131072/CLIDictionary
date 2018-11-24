let definitionPrinter = (definitions) => {
    let count = 1;
    for (let definition of definitions) {
        console.log(count + ". " + definition.lexicalCategory + " - " + definition.definition);
        count++;
    }
}

let examplePrinter = (examples, word) => {
    if (examples.length != 0) {
        // Printing after the examples object is parsed to make sure the examples exist.
        console.log("Examples of the way the word " + word + " can be used are as follows : ")
        let count = 1;
        for (let example of examples) {
            console.log(count + ". " + example.lexicalCategory + " - " + example.example);
            count++;
        }
    }  
    else
        console.log("No examples found");
}
module.exports = {
    definitionPrinter,
    examplePrinter
};