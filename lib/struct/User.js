'use strict';

const UserEvent = require('./UserEvent');

/**
 * User class.
 * @memberof module:CustomClasses
 * @property {Number} id User's ID [alias: userId]
 * @property {String} username Username [alias: name]
 * @property {Number} count300
 * @property {Number} count100
 * @property {Number} count50
 * @property {Number} playcount
 * @property {Number} rankedScore
 * @property {Number} totalScore
 * @property {Number} ppRank [alias: rank]
 * @property {Number} accuracy
 * @property {Number} countRankSS
 * @property {Number} countRankS
 * @property {Number} countRankA
 * @property {Number} country
 * @property {Number} ppCountryRank [alias: countryRank]
 * @property {UserEvent[]} events Array of user events
 */
class User {
    constructor(data) {
        this.id = Number(data.user_id);
        this.username = data.username;
        this.count300 = Number(data.count300);
        this.count100 = Number(data.count100);
        this.count50 = Number(data.count50);
        this.playcount = Number(data.playcount);
        this.rankedScore = Number(data.ranked_score);
        this.totalScore = Number(data.total_score);
        this.ppRank = Number(data.pp_rank);
        this.accuracy = Number(data.accuracy);
        this.countRankSS = Number(data.count_rank_ss);
        this.countRankS = Number(data.count_rank_s);
        this.countRankA = Number(data.count_rank_a);
        this.country = data.country;
        this.ppCountryRank = Number(data.pp_country_rank);
        this.events = data.events.map(d => new UserEvent(d));
    }

    get userId() { return this.id; }
    get name() { return this.username; }
    get rank() { return this.ppRank; }
    get countryRank() { return this.ppCountryRank; }
}

module.exports = User;