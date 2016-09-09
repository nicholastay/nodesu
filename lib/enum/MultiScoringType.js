'use strict';

/**
 * Enum for the scoring type used in a multi match
 * @readonly
 * @enum {Number}
 */
const MultiScoringType = {
    scoreV2: 3,
    combo: 2,
    accuracy: 1,
    score: 0,
};

module.exports = MultiScoringType;