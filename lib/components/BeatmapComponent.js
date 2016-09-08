'use strict';

const Component = require('./Component')
    , ApiConstants = require('../Constants').API;

/**
 * Beatmap-related API component
 */
class BeatmapComponent extends Component {
    _get(letter, id, mode, limit, includeConverts, lookupType) {
        let options = {};
        options[letter] = id;
        if (mode)
            options.m = mode;
        if (limit)
            options.limit = limit;
        if (includeConverts)
            options.a = includeConverts;
        if (lookupType)
            options.type = lookupType;

        return this.api.requester.get(ApiConstants.BEATMAPS_GET, true, options);
    }

    getBySetId(setId, mode, limit, includeConverts) {
        return this._get('s', setId, mode, limit, includeConverts);
    }

    getByBeatmapId(beatmapId, mode, limit, includeConverts) {
        return this._get('b', beatmapId, mode, limit, includeConverts);
    }

    getByUser(user, mode, limit, includeConverts, lookupType) {
        return this._get('u', user, mode, limit, includeConverts, lookupType);
    }

    getByBeatmapHash(hash, mode, limit, includeConverts) {
        return this._get('h', hash, mode, limit, includeConverts);
    }
}

module.exports = BeatmapComponent;