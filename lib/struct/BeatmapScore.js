'use strict';

const Score = require('./Score');

/**
 * Score for an beatmap class
 * @memberof module:CustomClasses
 * @extends Score
 * @property {String} username Username of player
 * @property {Number} userId Player's user ID
 * @property {Date} date Date score set
 * @property {String} rank Rank of play, e.g. SS
 * @property {Number} pp PP value achieved
 * @property {Boolean} replayAvailable Is replay inputs data available (via /get_replay endpoint)
 */
class BeatmapScore extends Score {
    constructor(data) {
        super(data);
        this.username = data.username;
        this.userId = Number(data.user_id);
        this.date = new Date(data.date + ' GMT');
        this.rank = data.rank;
        this.pp = Number(data.pp);
        this.replayAvailable = data.replay_available !== undefined ? !!Number(data.replay_available) : undefined;
    }
}

module.exports = BeatmapScore;