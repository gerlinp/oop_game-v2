/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */


class Phrase {
    constructor(phrase) {
        this.phrase = phrase;
    }

    // Checks selected randomprase to see if it's a letter or space.
    addPhraseToDisplay() { 
        document.querySelector('#phrase ul').innerHTML = '';
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
    // Checks if selected letter is included in phrase
    checkLetter(letter) {
        return this.phrase.includes(letter)
    }

    // 
    showMatchedLetter(letter) {
        let letters = document.querySelectorAll('.letter')
        letters.forEach(element => {
            if (element.textContent == letter) {
                element.classList.add('show')
            }   
        });
    }
}


