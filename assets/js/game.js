// Javascript for hangman game
// Initial state --> assign initial global variables

// <--------- GLOBAL VARIABLES --------->

// alphabet array
var alphabet = ["a", "A", "b", "B", "c", "C", "d", "D", "e", "E", "f", "F", "g", "G", "h", "H", "i", "I", "j", "J", "k", "K", "l", "L", "m", "M", "n", "N", "o", "O", "p", "P", "q", "Q", "r", "R", "s", "S", "t", "T", "u", "U", "v", "V", "w", "W", "x", "X", "y", "Y", "z", "Z"];

// array for wordBank
var wordBank = ["RUSSIA", "URUGUAY", "EGYPT", "SAUDI ARABIA"];

// variable word which is randomly selected from wordBank
var word = wordBank[Math.floor(Math.random() * wordBank.length)];
console.log(word);

// variable wordDisplay to show blanks
var wordDisplay = ""

for (i = 0; i < word.length; i++) {
    if (alphabet.includes(word[i])) {
        wordDisplay += "_ ";
        console.log(wordDisplay);
    }
    else {
        wordDisplay += " ";
        console.log(wordDisplay);
    }
}

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
    checkLetter: function () {
        // add logic to determine course of action

        // if letter is in word display in word
        if (word.includes(guess)) {
            // display in correct position
            wordDisplay; //is updated
            // check for win

            if (wordDisplay === word) {
                // increase winCount
                winCount++;
                // activate win activity
                // reset word
            }
            else {
                return false;
            }
        }

        // if letter is not word display in word
        else {
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
document.onkeyup = function (event) {
    // assign variable guessPlaceholder by using onkeyup
    guessPlaceholder = event.key;
    // capitalize
    guessPlaceholder = guessPlaceholder.toUpperCase();

    // if guess is a repeat of last key press, or already guessed, do nothing
    if (guessPlaceholder === guess || guessLetters.includes(guessPlaceholder) === true || wordDisplay.includes(guessPlaceholder) === true) {
        console.log("duplicate is working")
        return false
    }

    // else if keypress is a letter assign the placeholder to guess and call the method
    else if (alphabet.includes(guessPlaceholder)) {
        // assign guess to guess
        guess = guessPlaceholder;
        console.log(guess);
        // call method
        hangman.checkLetter();
    }

    // else return false because guess is not a letter
    else {
        console.log("not a letter is working");
        return false;
    }
}
