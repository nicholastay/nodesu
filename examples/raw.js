'use strict';

const Nodesu = require('../nodesu');
const config = require('./config.json');

const api = new Nodesu.ApiClient(config.apiKey);
api
    .raw('/get_user', {
        u: 'Nexerq',
        type: 'string'
    })
    .then(d => d[0])
    .then(console.log);