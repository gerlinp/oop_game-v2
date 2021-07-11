/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */




class Phrase {
    constructor(phrase) {
        this.phrase = phrase;
    }
    addPhraseToDisplay() {
        this.activePhrase = this.phrase;
        for (let i = 0; i < this.phrase.length; i++) {
            let li = document.createElement('li');
            li.textContent = this.phrase[i];
            document.querySelector('#phrase ul').appendChild(li);
            if (li.textContent !== ' ') {
                li.className = 'letter'; 
            } else {
                li.className = 'space'
            };
        } 
    }
}


