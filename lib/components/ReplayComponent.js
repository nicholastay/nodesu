'use strict';

const Component = require('./Component')
    , ApiConstants = require('../Constants').API;

/**
 * Replay-related API component
 * @memberof module:Components
 * @example
 * api.replay
 *     .get('1110141', '4222959', Nodesu.Mode.osu)
 *     .then(console.log);
 */
class ReplayComponent extends Component {
    /**
     * Gets the replay. - If ratelimiting is enabled in the Client, this is rate limited under a different bucket with the more stricter conditions that is forced upon this endpoint!
     * @param {String} beatmapId The beatmap ID of the map.
     * @param {String} userId The user that played that beatmap.
     * @param {Mode} mode The gamemode of the play.
     * @return {Promise<String>} Base64 replay file string.
     */
    get(beatmapId, userId, mode) {
        if (!this.api.disableRateLimiting) {
            // needs to be cleaned up just like in the requester
            return new Promise((resolve, reject) => {
                this.api.ratelimiting.replayBucket.removeTokens(1, () => {
                    this._get(beatmapId, userId, mode)
                        .then(resolve)
                        .catch(reject);
                });
            });
        }
        
        return this._get(beatmapId, userId, mode);
    }

    _get(beatmapId, userId, mode) {
        let options = {
            b: beatmapId,
            u: userId,
            m: mode
        };

        return this.api.requester.get(ApiConstants.REPLAY_GET, options, true, false)
            .then(d => d.content);
    }
}

module.exports = ReplayComponent;