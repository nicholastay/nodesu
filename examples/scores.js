'use strict';

const Nodesu = require('../nodesu');
const config = require('./config.json');

const api = new Nodesu.Client(config.apiKey);
api
    .scores.get('646609')
    .then(console.log);