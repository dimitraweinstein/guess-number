// import functions and grab DOM elements
    import { compareNumbers } from './utils.js';

const userInput = document.getElementById('user-input');
const submitButton = document.getElementById('submit-button');
const resetButton = document.getElementById('reset-button');
const guessRemainDiv = document.getElementById('guess-remain-div');

// initialize state
const randomNumber = Math.ceil(Math.random() * 20);
let guessRemain = '3';





// set event listeners to update state and DOM
submitButton.addEventListener('click', () => {
    
    const inputValue = Number(userInput.value);

    console.log('this button works');

    compareNumbers(inputValue, randomNumber);

    // resultsDiv.textContent = ;

    if (userInput > randomNumber || userInput < randomNumber) {
        return guessRemain--;
    }

    else {
        return;
    }

});



resetButton.addEventListener ('click', () => {
    
    

});