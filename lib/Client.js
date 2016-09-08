'use strict';

const Requester = require('./Requester')
    , Ratelimiting = require('./Ratelimiting')
    , UserComponent = require('./components/UserComponent')
    , BeatmapComponent = require('./components/BeatmapComponent')
    , ScoresComponent = require('./components/ScoresComponent')
    , ReplayComponent = require('./components/ReplayComponent');

/**
 * The main osu! API client.
 */
class Client {
    /**
     * Creates the osu! API client instance.
     * @param  {String} apiKey The osu! API key. - available from https://osu.ppy.sh/p/api
     * @return {Client}        The osu! API client instance.
     */
    constructor(apiKey, options) {
        this.apiKey = apiKey;
        if (!options)
            options = {};
        this.disableRateLimiting = options.disableRateLimiting || false;
        this.requestsPerMinute = options.requestsPerMinute || 60;

        this.requester = new Requester(this);
        if (!this.disableRateLimiting)
            this.ratelimiting = new Ratelimiting(this);

        // components
        this.user = new UserComponent(this);
        this.beatmaps = new BeatmapComponent(this);
        this.scores = new ScoresComponent(this);
        this.replay = new ReplayComponent(this);
    }

    /**
     * A direct raw API request with a payload of query string options.
     * @param  {String} endpoint The API endpoint.
     * @param  {Object} options  An object of query string options.
     * @return {Promise<Object>} The object returned from the API.
     */
    raw(endpoint, options) {
        return this.requester.get(endpoint, options, true, true);
    }
}

module.exports = Client;