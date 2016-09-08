'use strict';

const Mode = {
    osu: 0,
    taiko: 1,
    ctb: 2,
    mania: 3,

    // reverse lookups
    0: 'osu!',
    1: 'Taiko',
    2: 'CtB',
    3: 'osu!mania'
};

module.exports = Mode;