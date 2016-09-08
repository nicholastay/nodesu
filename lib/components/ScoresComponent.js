'use strict';

const Component = require('./Component')
    , ApiConstants = require('../Constants').API;

/**
 * Scores-related API component
 */
class ScoresComponent extends Component {
    get(beatmapId, mods, mode, limit, userId, lookupType) {
        let options = { b: beatmapId };
        if (mods)
            options.mods = mods;
        if (mode)
            options.m = mode;
        if (limit)
            options.limit = limit;
        if (userId)
            options.u = userId;
        if (lookupType)
            options.type = lookupType;

        return this.api.requester.get(ApiConstants.SCORES_GET, options, true, true);
    }
}

module.exports = ScoresComponent;