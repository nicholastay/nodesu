'use strict';

/**
 * General Score class
 * @property {Number} score Score achieved
 * @property {Number} count300
 * @property {Number} count100
 * @property {Number} count50
 * @property {Number} countMiss
 * @property {Number} maxCombo
 * @property {Number} countKatu
 * @property {Number} countGeki
 * @property {Boolean} perfect True if maximum combo reached of map
 */
class Score {
    constructor(data) {
        this.count300 = Number(data.count300);
        this.count100 = Number(data.count100);
        this.count50 = Number(data.count50);
        this.countMiss = Number(data.countmiss);
        this.maxCombo = Number(data.maxcombo);
        this.countKatu = Number(data.countkatu);
        this.countGeki = Number(data.countgeki);
        this.perfect = !!data.perfect;
    }
}

module.exports = Score;