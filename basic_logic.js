var inquirer = require('inquirer');
var cards = require('./basic_data.js');
var constructor = require('./BasicCard.js');

inquirer.prompt([
    {
        type:"list",
        name: "playGame",
        message: "Would you like to play a game of flashcards?",
        choices: ["Yes, that sounds like fun!", "No, not right now."],
    }
    
]).then(function(resp){
    if (selector === "Yes, that sounds like fun!") {
        console.log(cardOne.front);
} else {
        console.log("You're a party pooper!")
}
})