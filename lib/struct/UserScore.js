'use strict';

const BeatmapScore = require('./BeatmapScore');

/**
 * Score for an user class
 * @memberof module:CustomClasses
 * @extends BeatmapScore
 * @property {Number} beatmapId The beatmap ID of the song played
 */
class UserScore extends BeatmapScore {
    constructor(data) {
        super(data);
        this.beatmapId = Number(data.beatmap_id);
    }
}

module.exports = UserScore;