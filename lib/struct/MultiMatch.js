'use strict';

/**
 * Information about a multi match class
 * @property {Number} id The match ID [alias: matchId]
 * @property {String} name The name of the multi lobby
 * @property {Date} startTime The time the match was started
 */
class MultiMatch {
    constructor(data) {
        this.id = Number(data.match_id);
        this.name = data.name;
        this.startTime = new Date(data.start_time + ' GMT+0800');
    }

    get matchId() { return this.id; }
}

module.exports = MultiMatch;