/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */

class Game{


//add a constructor method
    constructor(){
        this.missed = 0;
        this.phrases = this.createPhrases();
        this.activePhrase = null;
        //end constructor
    }
/**
 * Creates phrases for use in game
 * @returns {Array} An array of phrases that could be used in the game
 */
    createPhrases(){
        let phrases = [
            new Phrase("Life is like a box of chocolates"),
            new Phrase("May the force be with you"),
            new Phrase("You talking to me"),
            new Phrase("Show me the money"),
            new Phrase("Theres no place like home")
        ];

        return phrases;
        //end createPhrases method
    }
/**
 * Selects a random phrase from phrases property
 * @returns {Object} Phrase object chosed to be used
 */
    getRandomPhrase(){ 
        //genereate a random number between 0 and length of the array
        const randomNum = Math.floor(Math.random() * Math.floor(this.phrases.length));
        //selects the random element from the phrases array
        return this.phrases[randomNum];
        //end getRandomPhrase method
    }

    /**
     * Begins the game by selecting a random phrase and displaying it to user
     */
    startGame(){
        //if theres an existing game in place, reset the game
        this.resetGame();
        //get the overlay from the DOM
        const overlay = document.getElementById('overlay');
        //hide the intro overlay
        overlay.style.display = "none";
        // get a random phrase and set it to the active phrase
        const randomPhrase = game.getRandomPhrase();
        this.activePhrase = new Phrase (randomPhrase.phrase);
        //add the active phrase to the display
        this.activePhrase.addPhraseToDisplay();
        //end startGame method
    }

    
    /**
     * Checks for winning move
     * @returns {boolean} True if the game has been won, false if game wasn't won.
     */
    checkForWin(){
         //get the ul tag from the dom
         const phraseList = document.getElementsByTagName('UL')[0];
         //get the lis from within the ul tag
         const lis = phraseList.getElementsByTagName('LI');
         //declare gameWon variable to track state of game
         let gameWon = false;
         //get lis by class name, and search for hide
         let hiddenLetters = document.getElementsByClassName('hide');

         //check if hidden letters.length is === 0
         if(hiddenLetters.length === 0){
             gameWon = true;
         } else {
             gameWon = false;
         }


        return gameWon;
    }

    /**
     * Increases the value of the missed property
     * Removes a life from the scoreboard
     * Checks if the player has remaining lives, and ends the game if player is out
     */
    removeLife(){
        //get the tries elements from the DOM
        const tries = document.getElementsByClassName('tries');
        //get the image tag from within the tries element, starting from the last element, and working forwards using the this.missed counter
        const life = tries[tries.length - this.missed - 1].getElementsByTagName('IMG')[0];
        //update the image to show a life has been lost
        life.setAttribute('src', 'images/lostHeart.png');
        //increment the missed counter
        this.missed++;

        if(this.missed === 5){
            this.gameOver(false);
        }
    }

    /**
     * Displays game over message
     * @param {boolean} gameWon whether the game was won or lost
     */
    gameOver(gameWon){
        //select the overlay from the DOM
        const overlay = document.getElementById('overlay');
        //create the h1 from the DOM
        const h1 = document.getElementById('game-over-message');
        //display the original screen overlay
        overlay.style.display = "block";

        //check if game was won or lost
        if(gameWon){
            h1.textContent = "Great job, you guessed the phrase!";
            overlay.className = "win";
        } else {
            h1.textContent = "Sorry, better luck next time!";
            overlay.className = 'lose';
        }
    }
/**
 * Handles onscreen keyboard clicks, and keyboard input
 * @param {HTMLButtonElement/Keyboard input} button - The clicked or pressed button element
 */
    handleInteraction(button){
         //get the keyboard from the DOM
         const keyboard = document.getElementsByClassName('key');
         //loop through keyboard
         for(let i = 0; i < keyboard.length; i++){
             //check the text content === button input
             if(keyboard[i].textContent === button){
                 //disable the onscreen keyboard
                 keyboard[i].setAttribute('disabled', 'true');
                 if (this.activePhrase.checkLetter(button)) {
                    keyboard[i].className = 'key chosen';
                    this.activePhrase.showMatchedLetter(button);
                 } else {
                     //if phrase does not contain the letter, add 'wrong' css class
                    keyboard[i].className = 'key wrong';
                    this.removeLife();
                 }
             }
         }
         
         if(this.checkForWin()){
             this.gameOver(true);
         }
         
    }

/**
 * Resets the scoreboard
 * Resets the missed count
 * Removes all phrase LI elements
 * Resets the keyboard both on screen and input
 */
    resetGame(){
        //get the UL that holds the phrase from the DOM
        const phraseList = document.getElementsByTagName('UL')[0];
        //remove all LIs by setting inner html to zero
        phraseList.innerHTML = "";
        //reset the missed count to zero
        this.missed = 0;
        //get heart images from the DOM
        const tries = document.getElementsByClassName('tries');
        //loop through and reset life.pngs
        for(let i = 0; i < tries.length; i++){
            let life = tries[i].getElementsByTagName('IMG')[0];
            life.setAttribute('src', 'images/liveHeart.png')
        }
        //enable all keys
        keysPressed = [];
        //get keyboard from the DOM
        const keyboard = document.getElementsByClassName('key');
        //loop through keys and re-enable, and remove the chosen class
        for(let j = 0; j < keyboard.length; j++){
            keyboard[j].removeAttribute('disabled');
            keyboard[j].className = 'key';
        }
    }
//close class
}   