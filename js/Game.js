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

    getRandomPhrase(){
        const randomNum = Math.floor(Math.random() * Math.floor(5));
        return this.phrases[randomNum];
        //end getRandomPhrase method
    }

    startGame(){
        const overlay = document.getElementById('overlay');
        overlay.style.display = "none";
        const randomPhrase = game.getRandomPhrase();
        this.activePhrase = new Phrase (randomPhrase.phrase);
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
         //loop through lis
         for(let i = 0; i < lis.length; i++){
             //test to see if any lis class name still includes 'hide'
            if (lis[i].className.includes('hide')) {
                //game is not won, return false
                return false;
            } else {
                //no hidden letters left on the board, game is won
                return true;
            }
        }
    }

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
            this.gameOver(this.checkForWin());
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

    handleInteraction(button){
        console.log(button);
    }
//close class
}   