/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */


let Game = class {
    constructor() {
        this.missed = 0;
        this.phrases = [
            'May the Force be with you',
            'Theres no place like home',
            'Break a leg',
            'Just keep swimming',
            'To infinity and beyond'
        ];
        this.activePhrase = null;
    }
};
