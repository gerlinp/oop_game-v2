/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */


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
    getRandomPhrase() {
        return this.phrases[Math.floor(Math.random() * this.phrases.length)];
    }

}

