var request = require('request');
var extend = require('xtend'); // Use simple extend module because I'm lazy to write my own

function OsuApi (options) {
  // Bunch of default settings
  var settings = {
    apiUri: 'https://osu.ppy.sh/api',
    apiKey: null
  };

  // "Extend" the user's ones in
  settings = extend(settings, options);

  this.settings = settings;
};

OsuApi.prototype.rawString = function (endpoint, params, cb) { // Raw by string
  var url = this.settings.apiUri + endpoint + '?k=' + this.settings.apiKey + '&' + params;

  request(url, function (err, response, body) {
    if (!err && response.statusCode == 200) {
      return cb(null, body);
    };

    return cb(err);
  });
};

OsuApi.prototype.raw = function (endpoint, params, cb) { // Raw by JavaScript object. Main basis of other convenience functions
  var options = {
    k: this.settings.apiKey
  };

  var options = extend(options, params);

  // Construct the url then make request
  var url = this.settings.apiUri + endpoint + '?';
  // https://stackoverflow.com/questions/684672/loop-through-javascript-object
  for (var key in options) {
    if (options.hasOwnProperty(key)) {
      url += (key + "=" + options[key] + "&");
    };
  };

  request(url, function (err, response, body) {
    if (!err && response.statusCode == 200) {
      return cb(null, body);
    };

    return cb(err);
  });
};

OsuApi.prototype.modes = require('./api/modes.js');
OsuApi.prototype.beatmaps = require('./api/beatmap.js');

module.exports = OsuApi;
