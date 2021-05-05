export function compareNumbers(userInput, randomNumber) {
    
 

    if (userInput === randomNumber) {
        return 0;
    }

    if (userInput > randomNumber) {
        return 1;
    }

    if (userInput < randomNumber) {
        return -1;
    }

    else {
        return;
    }

}
