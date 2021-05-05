
export function compareNumbersAndUpdateDom(userInput) {

    if (userInput === randomNumber) {
        return resultsDiv.textContent = `Correct! You Guessed The Right Number! You have ${guessRemain} number guesses remaining.`;
    }

    if (userInput > randomNumber) {
        return resultsDiv.textContent = `Sorry! your guess is higher than the chosen number. Guess again. You have ${guessRemain} number guesses remaining.`;
    }

    if (userInput < randomNumber) {
        return `Sorry, your guess is lower than the chosen number. Guess again. You have ${guessRemain} number guesses remaining.`;
    }

    else {
        return `Try your luck at guessing the secret chosen number! You have ${guessRemain} number guesses remaining.`;
    }
}