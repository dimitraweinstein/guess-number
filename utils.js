
function compareNumbersAndUpdateDom(userInput) {
    if (userInput === randomNumber) {
        return `Correct! You Guessed The Right Number! You have ${guess-remain} number guesses remaining.`;
    }

    if (userInput > randomNumber) {
        return `Sorry, your guess is higher than the chosen number. Guess again. You have ${guess-remain} number guesses remaining.`;
    }

    if (userInput < randomNumber) {
        return `Sorry, your guess is lower than the chosen number. Guess again. You have ${guess-remain} number guesses remaining.`;
    }

    else {
        return `Try your luck at guessing the computer's chosen number! You have ${guess-remain} number guesses remaining.`;
    }
}




//Need to write a function that tracks how many guesses remain