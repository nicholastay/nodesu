'use strict';

/**
 * Beatmap class
 * @memberof module:CustomClasses
 * @property {ApprovalStatus} approved Approval status [alias: rankedStatus]
 * @property {Date} submitDate Date it was first submitted
 * @property {Date} approvedDate Date it was approved
 * @property {Date} lastUpdate The date the map was last updated
 * @property {String} artist The song artist
 * @property {Number} id Beatmap id [alias: beatmapId]
 * @property {Number} setId Beatmap set id [alias: beatmapSetId]
 * @property {Number} bpm Song BPM
 * @property {String} creator The beatmap creator [alias: mapper]
 * @property {Number} difficultyRating The difficulty rating [alias: stars]
 * @property {Number} diffSize Difficulty size (aka CS) [alias: circleSize, CS]
 * @property {Number} diffOverall Difficulty overall (aka OD) [alias: overallDifficulty, OD]
 * @property {Number} diffApproach Difficulty approach (aka AR) [alias: approachRate, AR]
 * @property {Number} diffDrain Difficulty drain (aka HP) [alias: hpDrain, HP]
 * @property {Number} hitLength Drain length
 * @property {String|null} source The source data
 * @property {Genre} genre Genre metadata
 * @property {Language} language Language metadata
 * @property {String} title Title
 * @property {Number} totalLength Total length of song
 * @property {String} version Version (aka diffname) [alias: difficultyName]
 * @property {String} fileMd5 The MD5 of the file
 * @property {Mode} mode The gamemode
 * @property {String[]} tags Tags
 * @property {Number} favouriteCount Number of favorites on the map [alias: favoriteCount]
 * @property {Number} playcount Number of playcounts
 * @property {Number} passcount Number of passcount
 * @property {Number} maxCombo Number of map max combo
 * @property {Number} diffAim Aim difficulty rated by ppv2
 * @property {Number} diffSpeed Speed difficulty rated by ppv2
 */
class Beatmap {
    constructor(data) {
        this.approved = Number(data.approved);
        this.submitDate = new Date(data.submit_date + ' GMT');
        this.approvedDate = new Date(data.approved_date + ' GMT');
        this.lastUpdate = new Date(data.last_update + ' GMT');
        this.artist = data.artist;
        this.id = Number(data.beatmap_id);
        this.setId = Number(data.beatmapset_id);
        this.bpm = Number(data.bpm);
        this.creator = data.creator;
        this.difficultyRating = Number(data.difficultyrating);
        this.diffSize = Number(data.diff_size);
        this.diffOverall = Number(data.diff_overall);
        this.diffApproach = Number(data.diff_approach);
        this.diffDrain = Number(data.diff_drain);
        this.hitLength = Number(data.hit_length);
        this.source = data.source === '' ? null : data.source;
        this.genre = Number(data.genre_id);
        this.language = Number(data.language_id);
        this.title = data.title;
        this.totalLength = Number(data.total_length);
        this.version = data.version;
        this.fileMd5 = data.file_md5;
        this.mode = Number(data.mode);
        this.tags = data.tags.split(' ');
        this.favouriteCount = Number(data.favourite_count);
        this.playcount = Number(data.playcount);
        this.passcount = Number(data.passcount);
        this.maxCombo = Number(data.max_combo);
        this.diffAim = Number(data.diff_aim);
        this.diffSpeed = Number(data.diff_speed);
    }

    // aliases
    get beatmapId() { return this.id; }
    get beatmapSetId() { return this.setId; }
    get rankedStatus() { return this.approved; }
    get mapper() { return this.creator; }
    get stars() { return this.difficultyrating; }
    get circleSize() { return this.diffSize; }
    get overallDifficulty() { return this.diffOverall; }
    get approachRate() { return this.diffApproach; }
    get hpDrain() { return this.diffDrain; }
    get CS() { return this.diffsize; }
    get OD() { return this.diffOverall; }
    get AR() { return this.diffApproach; }
    get HP() { return this.diffDrain; }
    get favoriteCount() { return this.favouriteCount; }
    get difficultyName() { return this.version; }

    toString() { return `${this.artist} - ${this.title} [${this.version}] (mapped by ${this.creator})`; }
}

module.exports = Beatmap;