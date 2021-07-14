/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */

let game;
const qwerty = document.querySelector('#qwerty');


// start game event listener
document.querySelector('#btn__reset').addEventListener('click', () => {
    game = new Game()
    game.startGame()
});

// On screen keyboard event listener
qwerty.addEventListener('click', e => {
    if (e.target.tagName === 'BUTTON') {   
        if (!e.target.classList.contains('chosen')) {
            game.handleInteraction(e.target)
        }; 
    }
});

// Physical keyboard even listener
document.addEventListener('keydown', function(e) {
    let keyboard = e.code.substring(3).toLocaleLowerCase();
    let btns = document.querySelectorAll('.key');
    if (/^[a-zA-Z]$/.test(keyboard)) {
        btns.forEach(btn => {
            if (btn.innerHTML === keyboard) {
                if (!btn.classList.contains('chosen')) {
                    if (gameComplete == false) {
                        game.handleInteraction(btn) 
                    }  
                }; 
            }
        });
    }
    
});











