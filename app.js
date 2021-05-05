// import functions and grab DOM elements
import { compareNumbers } from './utils.js';

const userInput = document.getElementById('user-input');
const submitButton = document.getElementById('submit-button');
const resetButton = document.getElementById('reset-button');
const guessRemainDiv = document.getElementById('guess-remain-div');
const resultsDiv = document.getElementById('results-div');

// initialize state
const randomNumber = Math.ceil(Math.random() * 20);
let guessRemain = 3;


// set event listeners to update state and DOM
submitButton.addEventListener('click', () => {
    guessRemain--;
    
    const inputValue = Number(userInput.value);

    console.log('this button works');

    const results = compareNumbers(inputValue, randomNumber);

    if (results === 0) {
        return guessRemainDiv.textContent = `Correct! You Guessed The Right Number! Try your luck and guess again!`;
    }
    
    else if (results === 1) {
        return guessRemainDiv.textContent = `Sorry! your guess is higher than the chosen number. Guess again. You have ${guessRemain} number guesses remaining.`;
    }
    
    else if (results === -1) {
        return guessRemainDiv.textContent = `Sorry! your guess is lower than the chosen number. Guess again. You have ${guessRemain} number guesses remaining.`;
    }
    


});



// resetButton.addEventListener ('click', () => {
    
    

// });