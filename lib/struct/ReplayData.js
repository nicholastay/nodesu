'use strict';

/**
 * Replay data class.
 * @memberof module:CustomClasses
 * @property {Buffer} content A buffer containing the *LZMA* stream as part of the .osr file. Note that this is NOT the .osr file itself. You can read more about what this buffer actually contains on the API wiki. We are not turning this data into a fully-fledged .osr as this is *outside the scope of this library*. An external module should be used instead.
 */
class ReplayData {
    constructor(data) {
        this.content = Buffer.from(data.content, 'base64');
    }
}

module.exports = ReplayData;