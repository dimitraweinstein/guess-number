export function compareNumbers(userInput, randomNumber) {
    const resultsDiv = document.getElementById('results-div');

    if (userInput === randomNumber) {
        return resultsDiv.textContent = `Correct! You Guessed The Right Number! You have ${3} number guesses remaining.`;
    }

    if (userInput > randomNumber) {
        return resultsDiv.textContent = `Sorry! your guess is higher than the chosen number. Guess again. You have ${3} number guesses remaining.`;
    }

    if (userInput < randomNumber) {
        return resultsDiv.textContent = `Sorry, your guess is lower than the chosen number. Guess again. You have ${3} number guesses remaining.`;
    }

    else {
        return resultsDiv.textContent =  `Try your luck at guessing the secret chosen number! You have ${3} number guesses remaining.`;
    }


};
