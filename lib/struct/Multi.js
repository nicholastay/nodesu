'use strict';

const MultiMatch = require('./MultiMatch')
    , MultiGame = require('./MultiGame');

/**
 * Multi lobby class
 * @memberof module:CustomClasses
 * @property {MultiMatch} match Information about the multi match
 * @property {MultiGame[]} games The games played within the multi
 */
class Multi {
    constructor(data) {
        this.match = new MultiMatch(data.match);
        this.games = data.games.map(g => new MultiGame(g));
    }
}

module.exports = Multi;