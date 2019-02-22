'use strict';

/**
 * Enum if converts should be returned (for beatmap queries)
 * @readonly
 * @enum {Number}
 */
const ApprovalStatus = {
    loved: 4,
    qualified: 3,
    approved: 2,
    ranked: 1,
    pending: 0,
    wip: -1,
    graveyard: -2,
};

module.exports = ApprovalStatus;