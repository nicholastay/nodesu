var request = require('request')

function OsuApi (apiKey) {
  this.apiUri = 'https://osu.ppy.sh/api'
  this.apiKey = apiKey;
};

OsuApi.prototype.raw = function (endpoint, params, cb) {
  var url = this.apiUri + endpoint + '?k=' + this.apiKey + '&' + params;

  request(url, function (err, response, body) {
    if (!err && response.statusCode == 200) {
      return cb(null, body);
    };

    return cb(err)
  });
};

module.exports = OsuApi;
