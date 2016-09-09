'use strict';

const Nodesu = require('../nodesu');
const config = require('./config.json');

const api = new Nodesu.Client(config.apiKey, { parseData: true });
api
    .user.get('4222959')
    .then(console.log);