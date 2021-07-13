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
            new Phrase('may the force be with you'),
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
        game.restartGame()
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
        let tries = document.querySelectorAll('.tries')
        tries[this.missed].innerHTML = `<img src=\"images/lostHeart.png\" alt=\"Heart Icon\" height=\"35\" width=\"30\">`
        this.missed++;
        if ( this.missed === 5) {
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
        button.classList.add('chosen')          
        if (game.activePhrase.checkLetter(button.innerHTML)) {
            game.activePhrase.showMatchedLetter(button.innerHTML);
            game.gameOver();
        }   else  {
            button.classList.add('wrong')
            game.removeLife()
        } 

    }

    restartGame() {
        document.querySelectorAll("#phrase li").innerHTML = "";
        let buttons = document.querySelectorAll('.chosen')
        buttons.forEach(button => {
            button.className = '';
            button.classList.add('key')
        });
    }




}


