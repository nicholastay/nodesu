'use strict';

const Requester = require('./Requester')
    , Ratelimiting = require('./Ratelimiting')
    , UserComponent = require('./components/UserComponent')
    , BeatmapsComponent = require('./components/BeatmapsComponent')
    , ScoresComponent = require('./components/ScoresComponent')
    , ReplayComponent = require('./components/ReplayComponent')
    , MultiComponent = require('./components/MultiComponent')
    , ApiConstants = require('./Constants').API;

/**
 * The main osu! API client.
 * @property {UserComponent} user The set of functions that are related to the User section.
 * @property {BeatmapComponent} beatmaps The set of functions that are related to the Beatmap section.
 * @property {ScoresComponent} scores The set of functions that are related to the Score section.
 * @property {ReplayComponent} replay The set of functions that are related to the Replay section.
 * @property {MultiComponent} multi The set of functions that are related to the Multiplayer section.
 * @property {String} apiKey The osu! API key in use.
 * @property {Boolean} disableRateLimiting Should ratelimiting be used throughout the client instance.
 * @property {Number} requestsPerMinute How many requests per minute are allowed if ratelimiting is used.
 * @property {Boolean} parseData If data should be parsed into our custom nodesu classes. (experimental and could be subject to break)
 */
class Client {
    /**
     * Creates the osu! API client instance.
     * @param {String} apiKey The osu! API key. - available from https://osu.ppy.sh/p/api
     * @param {Object} [options] Options for the instance.
     * @param {Boolean} [options.disableRateLimiting=false] Disabled ratelimiting through the client instance.
     * @param {Number} [options.requestsPerMinute=60] Requests per minute for the main limiting bucket if ratelimiting is enabled (note that the replay endpoint has a special 10/minute bucket).
     * @param {Boolean} [options.parseData=false] If data should be parsed into our custom nodesu classes (experimental and could be subject to break).
     * @param {String} [options.baseUrl="https://osu.ppy.sh/api"] osu! API base URL. May be changed for mocking purposes, or for using a rate-limiting proxy.
     * @return {Client} The osu! API client instance.
     */
    constructor(apiKey, options) {
        this.apiKey = apiKey;
        if (!options)
            options = {};
        this.disableRateLimiting = options.disableRateLimiting || false;
        this.requestsPerMinute = options.requestsPerMinute || 60;
        this.parseData = options.parseData || false;
        this.baseUrl = options.baseUrl || `https://${ApiConstants.HOST}${ApiConstants.BASE_PATH}`;

        this.requester = new Requester(this);
        if (!this.disableRateLimiting)
            this.ratelimiting = new Ratelimiting(this);

        // components
        this.user = new UserComponent(this);
        this.beatmaps = new BeatmapsComponent(this);
        this.scores = new ScoresComponent(this);
        this.replay = new ReplayComponent(this);
        this.multi = new MultiComponent(this);
    }

    /**
     * A direct raw API request with a payload of query string options.
     * @param {String} endpoint The API endpoint.
     * @param {Object} options  An object of query string options.
     * @return {Promise<Object>} The object returned from the API.
     */
    raw(endpoint, options) {
        return this.requester.get(endpoint, options, true, true);
    }
}

module.exports = Client;