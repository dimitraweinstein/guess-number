// import functions and grab DOM elements
    

const userInput = document.getElementById('user-input');
const submitButton = document.getElementById('submit-button');
const resetButton = document.getElementById('reset-button');
const resultsDiv = document.getElementById('results-div');
const guessRemainDiv = document.getElementById('guess-remain-div');

// initialize state
const randomNumber = Math.ceil(Math.random() * 20);
let guessRemain = '3';
const inputValue = userInput.value;





// set event listeners to update state and DOM
submitButton.addEventListener('click', () => {
    
    compareNumbersAndUpdateDom(userInput);

    resultsDiv.value = userInput;

    if (userInput > randomNumber || userInput < randomNumber) {
        return guessRemain--;
    }

    else {
        return;
    }

})

resetButton.addEventListener ('click', () => {
    
    resultsDiv.document.hidden;

});