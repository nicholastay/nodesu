'use strict';

const https = require('https')
    , querystring = require('querystring');

const ApiConstants = require('./Constants').API
    , OsuApiError = require('./error/OsuApiError');

/**
 * Class for internal API requests
 * @property {String} userAgent The useragent used to make requests.
 */
class Requester {
    /**
     * Creates the internal requester
     * @return {Requester} A Requester instance
     */
    constructor(api) {
        this.api = api;
        this.userAgent = `nodesu v${require('../package.json').version} (https://github.com/nicholastay/nodesu)`;
    }

    /**
     * Gets data from an API endpoint.
     * @param {String} endpoint The endpoint to get the data from.
     * @param {Object} payloadOptions An object of options to be used as the query string.
     * @param {Boolean} withKey To use the API key defined in the parent client or not.
     * @param {Boolean} ratelimit Ratelimit the request on the main bucket if ratelimiting is enabled.
     * @param {Any} castType "Cast" the elements of the array to the certain type.
     * @return {Promise<Object[]|Any>} The returned object array from the API or Type[] as defined in castType.
     */
    get(endpoint, payloadOptions, withKey, ratelimit, castType) {
        let p = () => {
            let prom = this._get(endpoint, payloadOptions, withKey);

            if (castType && this.api.parseData) {
                return prom
                    .then(d => {
                        if (Array.isArray(d))
                            return d.map(f => new castType(f));
                        return new castType(d);
                    });
            }

            return prom;
        };

        if (ratelimit && !this.api.disableRateLimiting) {
            return new Promise((resolve, reject) => {
                this.api.ratelimiting.mainBucket.removeTokens(1, () => {
                    p().then(resolve).catch(reject);
                });
            });
        }

        return p();
    }

    _get(endpoint, payloadOptions, withKey) {
        let options = {};
        if (withKey)    
            options.k = this.api.apiKey; // api key
        Object.assign(options, payloadOptions || {}); // merge in payload of options

        const requestOptions = {
            hostname: ApiConstants.HOST,
            path: `${ApiConstants.BASE_PATH}${endpoint}?${querystring.stringify(options)}`,
            headers: {
                'User-Agent': this.userAgent
            }
        };

        return new Promise((resolve, reject) => {
            https.get(requestOptions, res => {
                let data = '';
                res.on('data', chunk => data += chunk);
                res.once('end', () => {
                    // parse json
                    let j;
                    try {
                        j = JSON.parse(data);
                    }
                    catch (e) {
                        return reject(e);
                    }

                    if (j.error) // error from api
                        return reject(new OsuApiError(j.error));

                    resolve(j); // resolve json
                });
            })
        });
    }
}

module.exports = Requester;