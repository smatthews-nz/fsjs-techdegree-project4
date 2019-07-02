/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */
let game;
//get start button from the DOM
const startButton = document.getElementById('btn__reset');
//get keyboard elements from the DOM
const keyboard = document.getElementsByClassName('key');
//declare an array to store user input from the keyboard, so keys cannot be pressed multiple times
let keysPressed = [];

//add event listener for the start button to start a new game
startButton.addEventListener('click', (event) => {
    game = new Game();
    game.startGame();
});

//iterate through all keys in the keyboard
Array.from(keyboard).forEach((key) =>{
   //add an event listener to each key to handle keypresses on the onscreen keyboard 
    key.addEventListener('click', (event) => {
        let input = event.target.innerText;
        game.handleInteraction(input);
    });
});

//add keyup listener to handle user input from the keyboard
document.addEventListener('keyup', (event) => {
    let input = String.fromCharCode(event.which).toLocaleLowerCase();
    // reject all input that is not a letter using regex
    if(/^[A-Za-z]+$/.test(input) && !keysPressed.includes(input)){
        game.handleInteraction(input);
        keysPressed.push(input);
    }
});


