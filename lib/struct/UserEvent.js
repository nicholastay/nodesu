'use strict';

/**
 * Events for User class.
 * @memberof module:CustomClasses
 * @property {String} displayHtml
 * @property {Number} beatmapId
 * @property {Number} beatmapSetId
 * @property {Date} date
 * @property {Number} epicfactor
 */
class UserEvent {
    constructor(data) {
        this.displayHtml = data.display_html;
        this.beatmapId = Number(data.beatmap_id);
        this.beatmapSetId = Number(data.beatmapset_id);
        this.date = new Date(data.date + ' GMT');
        this.epicfactor = Number(data.epicfactor);
    }
}

module.exports = UserEvent;