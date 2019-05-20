'use strict';

const Score = require('./Score');

/**
 * Scores in multi match data class
 * @memberof module:CustomClasses
 * @extends Score
 * @property {Number} slot 0-based index of the player's slot in the lobby
 * @property {MultiTeam|null} team The team the player is on if relevant
 * @property {Boolean} pass If the player passed (i.e. played through, no fails/revives)
 * @property {number} userId User who set the score
 */
class MultiScore extends Score {
    constructor(data) {
        super(data);
        this.slot = Number(data.slot);
        this.team = data.team === '0' ? null : Number(data.team);
        this.pass = !!Number(data.pass);
        this.userId = Number(data.user_id);
    }
}

module.exports = MultiScore;