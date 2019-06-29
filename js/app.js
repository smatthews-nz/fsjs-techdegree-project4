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
//iterate through each key in the keyboard
Array.from(keyboard).forEach((key) => {
    //add event listener to each key
    key.addEventListener('click keyup', (event) => {
        //capture the input
        const input = event.target;
        ga
    })

});
