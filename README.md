## Making a plan
1) Make a drawing of your app. Simple "wireframes"
2) Once you have a drawing, name the HTML elements you'll need to realize your vision
3) For each HTML element ask: Why do I need this?
    - This is your pseudocode
4) Once we know _why_ we need each element, think about how to implement the "Why" as a "How"
5) Is there some state we need to initialize?
6) Find all the 'events' (user clicks, form submit, etc) in your app. Ask one by one, "What happens when" for each of these events.
7) Think about how to validate each of your steps
8) Consider your data model. What objects will you be using? What are the key/value pairs? What arrays do you need? What needs to live in local storage?
9) Consider what features _depend_ on what other features. Use this dependency logic to figure out what order to complete tasks.

## HTML Setup
1) Title / Directions
    --Why: Know what it is we're doing

2) Input Box
    --To take in/store data from user input
    --How: use input tags, store in variable `userInput`

3) Submit Button
    --To enter user input
    --How: use button tags, and create event listener `button.addEventListener`, and if/else statement about a function

4) Reset Button
    --To Clear Attempts/Game and start over from 0/scratch
        --How: use button tags, and create event listener `button.addEventListener`. and if/else statement about a function

5)Div
    --For results and feedback
    --How: use div tags and with JS have feedback display for view through function


## Events

    What happens when...

1) When user enters a number and clicks submit button
    --check the number against the randomNumber generated

2) When user clicks reset button
    --clears entire page and begins game at the start with new randomNumber generated for user to guess.

3) When results pop up on page
    --displays if number is either
        -too low
        -too high
        -just right