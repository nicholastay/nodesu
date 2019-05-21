'use strict';

const Nodesu = require('../nodesu');
const config = require('./config.json');

const api = new Nodesu.Client(config.apiKey, { parseData: true });
api
    .replay.get('1201636', '718454', Nodesu.Mode.osu)
    .then(replay => console.log(replay));