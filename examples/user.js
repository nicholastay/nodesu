'use strict';

const Nodesu = require('../nodesu');
const config = require('./config.json');

const api = new Nodesu.Client(config.apiKey);
api
    .user.get('Nexerq', Nodesu.Mode.mania)
    .then(console.log);