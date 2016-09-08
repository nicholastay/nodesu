'use strict';

const Requester = require('./api/Requester');

/**
 * The main osu! API client.
 */
class ApiClient {
    /**
     * Creates the osu! API client instance.
     * @param  {String} apiKey The osu! API key. - available from https://osu.ppy.sh/p/api
     * @return {Api}           The osu! API client instance.
     */
    constructor(apiKey) {
        this.apiKey = apiKey;

        this.requester = new Requester(this);
    }

    /**
     * A direct raw API request with a payload of query string options.
     * @param  {String} endpoint The API endpoint.
     * @param  {Object} options  An object of query string options.
     * @return {Promise<Object>} The object returned from the API.
     */
    raw(endpoint, options) {
        return this.requester.get(endpoint, true, options);
    }
}

module.exports = ApiClient;