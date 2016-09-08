'use strict';

/**
 * Enum if converts should be returned (for beatmap queries)
 * @readonly
 * @enum {Number}
 */
const ApprovalStatus = {
    qualified: 3,
    approved: 2,
    ranked: 1,
    pending: 0,
    wip: -1,
    graveyard: -2,

    /* Reverse types */
    /** @type {String} */
    '3': 'Qualified',
    /** @type {String} */
    '2': 'Approved',
    /** @type {String} */
    '1': 'Ranked',
    /** @type {String} */
    '0': 'Pending',
    /** @type {String} */
    '-1': 'WIP',
    /** @type {String} */
    '-2': 'Graveyard'
};

module.exports = ApprovalStatus;