/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */

let overlay = document.querySelector('#overlay');
let gameOver =  document.querySelector('#game-over-message');

class Game {
    constructor() {
        this.missed = 0;
        this.phrases = [
            new Phrase('life is like a box of chocolates'),
            new Phrase('there is no trying'),
            new Phrase('May the force be with you'),
            new Phrase('you have to see the matrix yourself'),
            new Phrase('you talking to me'),
        ];
        this.activePhrase = null;
    }
    
    // Selects a random phrase from this.phrases array
    getRandomPhrase() {
        return this.phrases[Math.floor(Math.random() * this.phrases.length)];
    }

    // Removes overlay, selects a random phrase from array, and adds it to be displayed.
    startGame() {
        overlay.style.display = 'none';
        let randomPhrase = game.getRandomPhrase();
        this.activePhrase = randomPhrase;
        randomPhrase.addPhraseToDisplay();
    }


    checkForWin() {
        let letters = document.querySelectorAll('.letter');
        let show = document.querySelectorAll('.show');
        if (letters.length === show.length) {
               return true;
           } else {
               return false;
           }
    } 
    removeLife() {
        document.querySelector('ol').removeChild(document.querySelector('.tries'));
        if (document.querySelectorAll('.tries').length === 0) {
            overlay.style.display = 'flex';
            overlay.classList.add('lose')
            gameOver.style.display = 'block'
            gameOver.innerHTML = 'Sorry, better luck next time!'
        }
    }

    gameOver() {
        if (this.checkForWin()) {
            overlay.style.display = 'flex';
            overlay.classList.add('win');
            gameOver.style.display = 'block'
            gameOver.innerHTML = 'Great Job!'
        }
    }

    handleInteraction(button) {
        if((button.tagName === 'BUTTON')) {        
            if (game.activePhrase.checkLetter(button.innerHTML)) {
                game.activePhrase.showMatchedLetter(button.innerHTML);
                button.classList.add('chosen')
                game.gameOver();
            }   else  {
                button.classList.add('wrong')
                game.removeLife()
            } 
        }
    }


}


