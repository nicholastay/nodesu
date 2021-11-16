'use strict';

const Component = require('./Component')
    , ApiConstants = require('../Constants').API
    , Beatmap = require('../struct/Beatmap')
    , Mods = require('../enum/Mods');

/**
 * Beatmap-related API component
 * @memberof module:Components
 * @example
 * api.beatmaps
 *     .getByBeatmapId('646609')
 *     .then(console.log);
 */
class BeatmapsComponent extends Component {
    _get(letter, id, mode, limit, includeConverts, lookupType, mods) {
        let options = {};
        options[letter] = id;
        if (mode !== undefined)
            options.m = mode;
        if (limit !== undefined)
            options.limit = limit;
        if (includeConverts !== undefined)
            options.a = includeConverts;
        if (lookupType !== undefined)
            options.type = lookupType;

        // Include mods and filter out mods that return null difficulty values
        if (mods !== undefined)
            options.mods = mods & (Mods.DoubleTime | Mods.Easy | Mods.HalfTime | Mods.HardRock | Mods.Flashlight
                | Mods.Key4 | Mods.Key5 | Mods.Key6 | Mods.Key7 | Mods.Key8 | Mods.Key9);

        return this.api.requester.get(ApiConstants.BEATMAPS_GET, options, true, true, Beatmap);
    }

    /**
     * Get beatmaps via beatmap set ID.
     * @param {String} setId The set ID to lookup beatmaps from.
     * @param {Mode} [mode] The gamemode of maps to find.
     * @param {Number} [limit] The limit of maps to find.
     * @param {Converts} [includeConverts] If converts should be included in the lookup.
     * @param {Mods} [mods] Applied mods.
     * @return {Promise<Object[]|Beatmap[]>} The object array from the API, or Beatmap object array if parsing is enabled.
     */
    getBySetId(setId, mode, limit, includeConverts, mods) {
        return this._get('s', setId, mode, limit, includeConverts, undefined, mods);
    }

    /**
     * Get beatmaps via beatmap ID.
     * @param {String} beatmapId The beatmap ID to lookup beatmaps from.
     * @param {Mode} [mode] The gamemode of maps to find.
     * @param {Number} [limit] The limit of maps to find.
     * @param {Converts} [includeConverts] If converts should be included in the lookup.
     * @param {Mods} [mods] Applied mods.
     * @return {Promise<Object[]|Beatmap[]>} The object array from the API, or Beatmap object array if parsing is enabled.
     */
    getByBeatmapId(beatmapId, mode, limit, includeConverts, mods) {
        return this._get('b', beatmapId, mode, limit, includeConverts, undefined, mods);
    }

    /**
     * Get beatmaps via user ID.
     * @param {String} user The user to lookup beatmaps from.
     * @param {Mode} [mode] The gamemode of maps to find.
     * @param {Number} [limit] The limit of maps to find.
     * @param {Converts} [includeConverts] If converts should be included in the lookup.
     * @param {LookupType} [lookupType] The type of lookup of the user.
     * @param {Mods} [mods] Applied mods.
     * @return {Promise<Object[]|Beatmap[]>} The object array from the API, or Beatmap object array if parsing is enabled.
     */
    getByUser(user, mode, limit, includeConverts, lookupType, mods) {
        return this._get('u', user, mode, limit, includeConverts, lookupType, mods);
    }

    /**
     * Get beatmaps via the hash of a beatmap.
     * @param {String} hash The hash of the beatmap to lookup.
     * @param {Mode} [mode] The gamemode of maps to find.
     * @param {Number} [limit] The limit of maps to find.
     * @param {Converts} [includeConverts] If converts should be included in the lookup.
     * @param {Mods} [mods] Applied mods.
     * @return {Promise<Object[]|Beatmap[]>} The object array from the API, or Beatmap object array if parsing is enabled.
     */
    getByBeatmapHash(hash, mode, limit, includeConverts, mods) {
        return this._get('h', hash, mode, limit, includeConverts, undefined, mods);
    }

    /**
     * Get beatmaps via their ranked/approval date.
     * @param {Date|string} since Minimum approved_date. Date object or MySQL date.
     * @param {Mode} [mode] The gamemode of maps to find.
     * @param {Number} [limit] The limit of maps to find.
     * @param {Converts} [includeConverts] If converts should be included in the lookup.
     * @param {Mods} [mods] Applied mods.
     * @return {Promise<Object[]|Beatmap[]>} The object array from the API, or Beatmap object array if parsing is enabled.
     */
    getSince(since, mode, limit, includeConverts, mods) {
        const date = typeof since === 'string' ? since : since.toJSON().slice(0, 19).replace('T', ' ');
        return this._get('since', date, mode, limit, includeConverts, undefined, mods);
    }
}

module.exports = BeatmapsComponent;
