'use strict';

/**
 * Enum for the gamemodes.
 * @readonly
 * @enum {Number}
 */
const Mode = {
    /* Limit results to osu! game mode specific. */
    osu: 0,
    taiko: 1,
    ctb: 2,
    mania: 3,

    /* Reverse types */
    /** @type {String} */
    '0': 'osu!',
    /** @type {String} */
    '1': 'Taiko',
    /** @type {String} */
    '2': 'Catch the Beat',
    /** @type {String} */
    '3': 'osu!mania'
};

module.exports = Mode;