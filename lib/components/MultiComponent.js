'use strict';

const Component = require('./Component')
    , ApiConstants = require('../Constants').API
    , Multi = require('../struct/Multi');

/**
 * Multi-related API component
 * @memberof module:Components
 * @example
 * api.multi
 *     .getMatch('matchId')
 *     .then(console.log);
 */
class MultiComponent extends Component {
    /**
     * Gets the info for a multi match
     * @param {String} matchId The ID of the match
     * @return {Promise<Object|Multi>} The object from the API, or Multi object if parsing is enabled.
     */
    getMatch(matchId) {
        let options = { mp: matchId };

        // for some reason the API returns an object and not an array. It is handled as such in the requester.
        return this.api.requester.get(ApiConstants.MULTI_MATCH_GET, options, true, true, Multi);
    }
}

module.exports = MultiComponent;