/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */

const game = new Game();
const qwerty = document.querySelector('#qwerty');

document.querySelector('#btn__reset').addEventListener('click', () => game.startGame())

qwerty.addEventListener('click', e => {
    if (e.target.tagName === 'BUTTON') {   
        if (!e.target.classList.contains('chosen')) {
            game.handleInteraction(e.target)
        }; 
    }
});



document.addEventListener('keydown', function(e) {
    
    let keyboard = e.code.substring(3).toLocaleLowerCase();
    let btns = document.querySelectorAll('.key');

    if (/^[a-zA-Z]$/.test(keyboard)) {
        btns.forEach(btn => {
            if (btn.innerHTML === keyboard) {
                if (!btn.classList.contains('chosen')) {
                    game.handleInteraction(btn)   
                }; 
            }
        });
    }
    
});











