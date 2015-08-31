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

OsuApi.prototype.raw = function (endpoint, params, cb) {
  var url = this.settings.apiUri + endpoint + '?k=' + this.settings.apiKey + '&' + params;

  request(url, function (err, response, body) {
    if (!err && response.statusCode == 200) {
      return cb(null, body);
    };

    return cb(err);
  });
};

module.exports = OsuApi;
