'use strict';

const Component = require('./Component')
    , ApiConstants = require('../Constants').API
    , BeatmapScore = require('../struct/BeatmapScore');

/**
 * Scores-related API component
 * @memberof module:Components
 * @example
 * api.scores
 *     .get('1110141')
 *     .then(console.log);
 */
class ScoresComponent extends Component {
    /**
     * Gets scores for a specific beatmap
     * @param {String} beatmapId The beatmap ID.
     * @param {Mods} [mods] The bitwise combination for the mods.
     * @param {Mode} [mode] The gamemode.
     * @param {Number} [limit] The limit of scores to get.
     * @param {String} [user] User to lookup.
     * @param {LookupType} [lookupType] Only for if user is given, the lookup mode for it.
     * @return {Promise<Object[]|BeatmapScore[]>} The object array from the API, or BeatmapScore object array if parsing is enabled.
     */
    get(beatmapId, mods, mode, limit, user, lookupType) {
        let options = { b: beatmapId };
        if (mods !== undefined)
            options.mods = mods;
        if (mode !== undefined)
            options.m = mode;
        if (limit !== undefined)
            options.limit = limit;
        if (user !== undefined)
            options.u = user;
        if (lookupType !== undefined)
            options.type = lookupType;

        return this.api.requester.get(ApiConstants.SCORES_GET, options, true, true, BeatmapScore);
    }
}

module.exports = ScoresComponent;