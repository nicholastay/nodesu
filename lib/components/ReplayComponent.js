'use strict';

const Component = require('./Component')
    , ApiConstants = require('../Constants').API;

/**
 * Replay-related API component
 */
class ReplayComponent extends Component {
    get(beatmapId, userId, mode) {
        let options = {
            b: beatmapId,
            u: userId,
            m: mode
        };

        return this.api.requester.get(ApiConstants.REPLAY_GET, true, options)
            .then(d => d.content);
    }
}

module.exports = ReplayComponent;