'use strict';

const Nodesu = require('../nodesu');
const config = require('./config.json');
const util = require('util');

const api = new Nodesu.Client(config.apiKey, { parseData: true });
api
    .multi.getMatch('51895781')
    .then((multi) => console.log(util.inspect(multi, false, 5, true)));