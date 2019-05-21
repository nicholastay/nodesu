'use strict';

const Component = require('./Component')
    , ApiConstants = require('../Constants').API
    , ReplayData = require('../struct/ReplayData');

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
     * @param {LookupType} [lookupType] The lookup type, id/string to lookup the user.
     * @param {Mods} [mods] The bitwise combination for the mods.
     * @return {Promise<Object|ReplayData>} An object with the `content` LZMA-stream data encoded as the encoding specified in `object`. If custom classes are enabled, a buffer of the encoded data will be provided by the `content` property.
     */
    get(beatmapId, userId, mode, lookupType, mods) {
        if (!this.api.disableRateLimiting) {
            // needs to be cleaned up just like in the requester
            return new Promise((resolve, reject) => {
                this.api.ratelimiting.replayBucket.removeTokens(1, () => {
                    this._get(beatmapId, userId, mode, lookupType, mods)
                        .then(resolve)
                        .catch(reject);
                });
            });
        }
        
        return this._get(beatmapId, userId, mode, lookupType, mods);
    }

    _get(beatmapId, userId, mode, type, mods) {
        let options = {
            b: beatmapId,
            u: userId,
            m: mode,
            type: type,
            mods: mods
        };

        return this.api.requester.get(ApiConstants.REPLAY_GET, options, true, false, ReplayData);
    }
}

module.exports = ReplayComponent;