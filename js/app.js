/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */
let game;
const startButton = document.getElementById('btn__reset');
const keyboard = document.getElementsByClassName('key');

startButton.addEventListener('click', (event) => {
    game = new Game();
    game.startGame();
    const letter = game.activePhrase.checkLetter('a'); 
    if(letter){
        game.activePhrase.showMatchedLetter('a');
    }

    
});

Array.from(keyboard).forEach((key) =>{
    
    key.addEventListener('click', (event) => {
        let input = event.target.innerText;
        game.handleInteraction(input);
    });
});

document.addEventListener('keypress', (event) => {
    let input = String.fromCharCode(event.which).toLocaleLowerCase();
    // reject all input that is not a letter using regex
    if(/^[A-Za-z]+$/.test(input)){
        game.handleInteraction(input);
    }
});


