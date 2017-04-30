'use strict';

const Component = require('./Component')
    , ApiConstants = require('../Constants').API
    , User = require('../struct/User')
    , UserScore = require('../struct/UserScore');

/**
 * User-related API component
 * @memberof module:Components
 * @example
 * api.user
 *     .get('4222959')
 *     .then(console.log);
 */
class UserComponent extends Component {
    /**
     * Gets general user information.
     * @param {String} user The username or id to lookup.
     * @param {Mode} [mode] The gamemode.
     * @param {Number} [eventDays] The max number of event days.
     * @param {LookupType} [lookupType] The lookup type, id/string to lookup the user.
     * @return {Promise<Object|User>} The object from the API, or User object if parsing is enabled.
     */
    get(user, mode, eventDays, lookupType) {
        let options = { u: user };
        if (mode !== undefined)
            options.m = mode;
        if (eventDays !== undefined)
            options.event_days = eventDays;
        if (lookupType !== undefined)
            options.type = lookupType

        return this.api.requester.get(ApiConstants.USER_GET, options, true, true, User)
            .then(d => d[0]); // there can only be one user
    }

    /**
     * Gets the top scores for the user specified.
     * @param {String} user The username or id to lookup.
     * @param {Mode} [mode] The gamemode.
     * @param {Number} [limit] Amount of results to limit to.
     * @param {LookupType} [lookupType] The lookup type, id/string to lookup the user.
     * @return {Promise<Object[]|UserScore[]>} The object array from the API, or UserScore object array if parsing is enabled.
     */
    getBest(user, mode, limit, lookupType) {
        let options = { u: user };
        if (mode !== undefined)
            options.m = mode;
        if (limit !== undefined)
            options.limit = limit;
        if (lookupType !== undefined)
            options.type = lookupType;

        return this.api.requester.get(ApiConstants.USER_GET_BEST, options, true, true, UserScore);
    }

    /**
     * Gets the recent plays for the user specified.
     * @param {String} user The username or id to lookup.
     * @param {Mode} [mode] The gamemode.
     * @param {Number} [limit] Amount of results to limit to.
     * @param {LookupType} [lookupType] The lookup type, id/string to lookup the user.
     * @return {Promise<Object[]|UserScore[]>} The object array from the API, or UserScore object array if parsing is enabled.
     */
    getRecent(user, mode, limit, lookupType) {
        let options = { u: user };
        if (mode !== undefined)
            options.m = mode;
        if (limit !== undefined)
            options.limit = limit;
        if (lookupType !== undefined)
            options.type = lookupType;

        return this.api.requester.get(ApiConstants.USER_GET_RECENT, options, true, true, UserScore);
    }
}

module.exports = UserComponent;