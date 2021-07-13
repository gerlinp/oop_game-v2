/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */

const game = new Game();
const qwerty = document.querySelector('#qwerty');

document.querySelector('#btn__reset').addEventListener('click', () => game.startGame())

qwerty.addEventListener('click', e => {
    game.handleInteraction(e.target)
})











