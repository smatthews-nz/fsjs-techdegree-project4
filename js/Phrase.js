/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */

class Phrase{

    //add constructor method
    constructor(phrase){
        this.phrase = phrase.toLowerCase();    
    }

    addPhraseToDisplay(){
        const phraseDiv = document.getElementById('phrase');
        const phraseChars = [...this.phrase];
    

        phraseChars.forEach((letter) => {
            
            if(letter !== " "){
                let letterLi = document.createElement('li');
                letterLi.setAttribute('class', `hide letter ${letter}`);
                letterLi.textContent = `${letter}`;
                phraseDiv.appendChild(letterLi);
            } else {
                let spaceLi = document.createElement('li');
                spaceLi.setAttribute('class', 'space');
                phraseDiv.appendChild(spaceLi);

            }
        })
        
        //end addPhraseToDisplayMethod
    }
}