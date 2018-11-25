# Command Line Dictionary

## Dependencies
This project depends on two libraries, namely :
* **Axios** - For async GET requests to the Oxford Dictionaries API
* **Prompt** - For the prompts in the game section

## Pre-requisites and Instructions
### Pre-requisites
---
* NodeJS - The project was built with node and will as such require the runtime to run it. The version used as of this README update is the 10.13.0 LTS version. 
### Instructions
---
* Clone the project with 

    `git clone https://github.com/gopal131072/CLIDictionary`
* The packages mentioned above can be installed through npm using the command 

    `npm install`
    
    or can be manually installed with 
    
    `npm install --save axios prompt`
* Get your appId and apiKey from [oxford dictionaries developer documentation](https://developer.oxforddictionaries.com/documentation/getting_started).
* Plug in your appId and apiKey in config.js in the authorization object.
* Run the app with 

	`node app` or `npm start`
## Usage and CLI Arguments
* The ***def*** argument defines a word supplied after it.

	for example `node app def random` defines the word "random".
* The ***ex*** argument gives examples of a word's usage in sentences.
	
    for example `node app ex arcane` gives example of the word "arcane".
* The ***syn/ant*** arguments give the synonyms/antonyms of a word respectively.

	for example `node app syn/ant ace` gives the synonyms/antonyms of the word ace.
* The ***dict*** argument gives all of the above for a word specified after it.
	
    for example `node app dict fire` gives the definition, examples, synonyms and antonyms of the word "fire".
* The ***play*** argument starts a game where definitions, synonyms and antonyms are given and you're asked to guess the word. There's provisions for retries and hints.
* If the argument specified matches none of the above then it is assumed to be a dict command .
* If there are no arguments then the application provides you with the summary of a random word.