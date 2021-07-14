/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */

let overlay = document.querySelector('#overlay');
let gameOver =  document.querySelector('#game-over-message');
let gameComplete = false


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
        let tries = document.querySelectorAll('.tries img')
        tries[this.missed].src = 'images/lostHeart.png';
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
            overlay.className = 'win';
            gameOver.style.display = 'block'
            gameOver.innerHTML = 'Great Job!'
            gameComplete = true;
        } else if (this.missed === 5) {
            overlay.style.display = 'flex';
            overlay.className = 'lose';
            gameOver.style.display = 'block';
            gameOver.innerHTML = 'Sorry, better luck next time!';
            gameComplete = true;
        }
  
    }

    handleInteraction(button) {    
        button.classList.add('chosen')          
        if (game.activePhrase.checkLetter(button.innerHTML)) {
            game.activePhrase.showMatchedLetter(button.innerHTML);
        }   else  {
            button.classList.add('wrong')
            game.removeLife()
        } 
        game.gameOver();
    }

    restartGame() {
        gameComplete = false;
        document.querySelectorAll("#phrase li").innerHTML = "";
        let buttons = document.querySelectorAll('.chosen');
        this.missed = 0;
        buttons.forEach(button => {
            button.className = '';
            button.classList.add('key')
        });
        let hearts = document.querySelectorAll('.tries img')
        hearts.forEach(heart => {
            heart.src = 'images/liveHeart.png'
        });
    }
}
