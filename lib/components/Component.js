'use strict';

/**
 * These form the basis of nodesu.
 * @module Components
 * @example
 * <Client>.<component>
 * // where <component> is the the component name lower-cased (BeatmapComponent -> <Client>.beatmap)
 */

class Component {
    constructor(api) {
        this.api = api;
    }
}

module.exports = Component;