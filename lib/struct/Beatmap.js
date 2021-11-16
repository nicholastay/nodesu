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
 * @property {Number} creatorId The user id of the beatmap creator [alias: mapperId]
 * @property {Number} difficultyRating The difficulty rating [alias: stars]
 * @property {Number} diffSize Difficulty size (aka CS) [alias: circleSize, CS]
 * @property {Number} diffOverall Difficulty overall (aka OD) [alias: overallDifficulty, OD]
 * @property {Number} diffApproach Difficulty approach (aka AR) [alias: approachRate, AR]
 * @property {Number} diffDrain Difficulty drain (aka HP) [alias: hpDrain, HP]
 * @property {Number} countNormal Amount of normal notes (hitcircles).
 * @property {Number} countSlider Amount of slider notes.
 * @property {Number} countSpinner Amount of spinners.
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
 * @property {Number} rating User rating (1-10) [alias: userRating]
 * @property {Boolean} downloadUnavailable If beatmap is not downloadable [reverse alias: downloadAvailable]
 * @property {Boolean} audioUnavailable If beatmap is downloadable but has no audio [reverse alias: audioAvailable]
 * @property {Number} playcount Number of playcounts
 * @property {Number} passcount Number of passcount
 * @property {Number} maxCombo Number of map max combo
 * @property {Number} diffAim Aim difficulty rated by ppv2
 * @property {Number} diffSpeed Speed difficulty rated by ppv2
 * @property {String[]} packs Beatmap packs including this beatmap
 * @property {Boolean} video True if this beatmap contains a video
 * @property {Boolean} storyboard True if this beatmap contains a storyboard
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
        this.creatorId = Number(data.creator_id);
        this.difficultyRating = Number(data.difficultyrating);
        this.diffSize = Number(data.diff_size);
        this.diffOverall = Number(data.diff_overall);
        this.diffApproach = Number(data.diff_approach);
        this.diffDrain = Number(data.diff_drain);
        this.countNormal = Number(data.count_normal);
        this.countSlider = Number(data.count_slider);
        this.countSpinner = Number(data.count_spinner);
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
        this.rating = Number(data.rating);
        this.downloadUnavailable = !!Number(data.download_unavailable);
        this.audioUnavailable = !!Number(data.audio_unavailable);
        this.playcount = Number(data.playcount);
        this.passcount = Number(data.passcount);
        this.maxCombo = Number(data.max_combo);
        this.diffAim = Number(data.diff_aim);
        this.diffSpeed = Number(data.diff_speed);
        this.packs = data.packs ? data.packs.split(",") : [];
        this.storyboard = !!Number(data.storyboard);
        this.video = !!Number(data.video);
    }

    // aliases
    get beatmapId() { return this.id; }
    get beatmapSetId() { return this.setId; }
    get rankedStatus() { return this.approved; }
    get mapper() { return this.creator; }
    get mapperId() { return this.creatorId; }
    get stars() { return this.difficultyRating; }
    get circleSize() { return this.diffSize; }
    get overallDifficulty() { return this.diffOverall; }
    get approachRate() { return this.diffApproach; }
    get hpDrain() { return this.diffDrain; }
    get CS() { return this.diffSize; }
    get OD() { return this.diffOverall; }
    get AR() { return this.diffApproach; }
    get HP() { return this.diffDrain; }
    get favoriteCount() { return this.favouriteCount; }
    get userRating() { return this.rating; }
    get downloadAvailable() { return !this.downloadUnavailable; }
    get audioAvailable() { return !this.audioUnavailable; }
    get difficultyName() { return this.version; }

    toString() { return `${this.artist} - ${this.title} [${this.version}] (mapped by ${this.creator})`; }
}

module.exports = Beatmap;