'use strict';

/**
 * Information about a multi match class
 * @memberof module:CustomClasses
 * @property {Number} id The match ID [alias: matchId]
 * @property {String} name The name of the multi lobby
 * @property {Date} startTime The time the match was started
 * @property {Date} endTime The time the match was ended
 */
class MultiMatch {
    constructor(data) {
        this.id = Number(data.match_id);
        this.name = data.name;
        this.startTime = new Date(data.start_time + ' GMT');
        this.endTime = new Date(data.end_time + ' GMT');
    }

    get matchId() { return this.id; }
}

module.exports = MultiMatch;