/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */

class Phrase{

    //add constructor method
    constructor(phrase){
        this.phrase = phrase.toLowerCase();    
    }
/**
 * Display the phrase on the game board
 */
    addPhraseToDisplay(){
        //select the UL that holds the phrase from the DOM
        const phraseDiv = document.getElementsByTagName('UL')[0];
        // break the phrase into an array of characters
        const phraseChars = [...this.phrase];
    
        //iterate through the array of characters
        phraseChars.forEach((letter) => {
            //test if letter or space
            if(letter !== " "){
                //if letter, create the li and append to the dom
                let letterLi = document.createElement('li');
                letterLi.setAttribute('class', `hide letter ${letter}`);
                letterLi.textContent = `${letter}`;
                phraseDiv.appendChild(letterLi);
            } else {
                //if a space, create the spaceLI and append to the DOM
                let spaceLi = document.createElement('li');
                spaceLi.setAttribute('class', 'space');
                phraseDiv.appendChild(spaceLi);
            }
        })
        
        //end addPhraseToDisplayMethod
    }

    /**
     * Checks if passed letter is in the phrase
     * @param {string} letter - Letter to check
     * @returns a boolean value if the letter is in the phrase
     */
    checkLetter(letter){
        if(this.phrase.includes(letter)){
            return true;
        } else {
            return false;
        }

    }

    /**
     * Displays a letter on screen after a match is found
     * @param {string} letter - Letter to display
     */
    showMatchedLetter(letter){
        //break the phrase into an array of characters
      const phraseChars = [...this.phrase];
        //get the ul tag from the dom
      const phraseList = document.getElementsByTagName('UL')[0];
        //get the lis from within the ul tag
      const lis = phraseList.getElementsByTagName('LI'); 
        //iterate through the arrray of letters in the phrase
        phraseChars.forEach((letterInPhrase) => {
            //find the letters in the array
            if(letterInPhrase === letter){
                //iterate through the phrase in the dom
            for(let i = 0; i < lis.length; i++){
                //check the text content of the li for a match
                if(lis[i].textContent === letter){
                    //update the css to show the matched letter
                    lis[i].setAttribute('class', `show letter ${letter}`);
                }
            }   
            }
        });
    }
}