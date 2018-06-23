// Javascript for hangman game
// Initial state --> assign initial global variables

// <--------- GLOBAL VARIABLES --------->

// array for wordBank
var wordBank = ["t0", "t1", "t2", "t3"];

// variable word which is randomly selected from wordBank
var word = wordBank[Math.floor(Math.random()*wordBank.length)];
console.log(word);

// variable wordDisplay to show blanks
var wordDisplay

// variable guess to collect user input
var guess = "";

// variable guessLetters to collect incorrect user guesses for display
var guessLetters = "";

// variable guessCount to show incorrect guesses remaining
var guessCount = 6;

// variable for winCount
var winCount = "";

// <--------- OBJECT + METHODS --------->

// variable hangman to create game object
var hangman = { 
    // create methods for game functions
    checkLetter: function() {
        // add logic to determine course of action

        // if letter is in word display in word
        if ( guess === word ) {
            // display in correct position
            wordDisplay //is updated
            // check for win
            if (wordDisplay === word) {
                // increase winCount
                winCount++
                // activate win activity
                // reset word
            }
        }

        // if letter is not word display in word
        else if ( guess !== word) {
            // display in guessLetters and check for loss
            guessLetters //is updated
            //check for loss
            if (guessCount === 0) {
                // activate loss activity
                // reset word
            }
        }
    } 
    
}

// <--------- LISTENERS --------->

// assign variable guess by using onkeyup
document.onkeyup = function(event) {
    // assign variable guessPlaceholder by using onkeyup
    guessPlaceholder = event.key;

    // if guess is a repeat of last key press, or already guessed, do nothing
    if (guessPlaceholder === guess || guessPlaceholder == guessLetters || guessPlaceholder == wordDisplay ) {
        return false
    }

    // else assign the placeholder to guess and call the method
    else {
        // assign guess to guess
        guess = guessPlaceholder;
        // call method
        hangman.checkLetter();
    }
}
