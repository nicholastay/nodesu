'use strict';

class Beatmap {
    constructor(data) {
        this.approved = Number(data.approved);
        this.approvedDate = new Date(data.approved_date + ' GMT+0800');
        this.lastUpdate = new Date(data.last_update + ' GMT+0800');
        this.artist = data.artist;
        this.beatmapId = data.beatmap_id;
        this.beatmapSetId = data.beatmapset_id
        this.bpm = Number(data.bpm);
        this.creator = data.creator;
        this.difficultyrating = Number(data.difficultyrating);
        this.diffSize = Number(data.diff_size);
        this.diffOverall = Number(data.diff_overall);
        this.diffApproach = Number(data.diff_approach);
        this.diffDrain = Number(data.diff_drain);
        this.hitLength = Number(data.hit_length);
        this.source = data.source === '' ? null : data.source;
        this.genreId = Number(data.genre_id);
        this.languageId = Number(data.language_id);
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
    }

    // aliases
    get rankedStatus() { return this.approved; }
    get mapper() { return this.creator; }
    get stars() { return this.difficultyrating; }
    get circleSize() { return this.diffSize; }
    get overallDifficulty() { return this.diffOverall; }
    get approachRate() { return this.diffApproach; }
    get hpDrain() { return this.diffDrain; }
    get favoriteCount() { return this.favouriteCount; }
    get difficultyName() { return this.version; }

    toString() { return `${this.artist} - ${this.title} [${this.version}] (mapped by ${this.creator})`; }
}

module.exports = Beatmap;