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
    
//close class
}   