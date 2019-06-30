/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */
let game;
const startButton = document.getElementById('btn__reset');
const keyboard = document.getElementsByClassName('key');
const keysPressed = [];

startButton.addEventListener('click', (event) => {
    game = new Game();
    game.startGame();
});

Array.from(keyboard).forEach((key) =>{
    
    key.addEventListener('click', (event) => {
        let input = event.target.innerText;
        game.handleInteraction(input);
    });
});

document.addEventListener('keyup', (event) => {
    let input = String.fromCharCode(event.which).toLocaleLowerCase();
    // reject all input that is not a letter using regex
    if(/^[A-Za-z]+$/.test(input) && !keysPressed.includes(input)){
        game.handleInteraction(input);
        keysPressed.push(input);
    }
});


