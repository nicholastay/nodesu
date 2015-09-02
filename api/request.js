var request = require('request');
var extend = require('xtend'); // Use simple extend module because I'm lazy to write my own

function jsRequest (osu, endpoint, params, cb) { // Raw by JavaScript object. Main basis of other convenience functions
  if (!osu.settings.apiKey) {
    return cb (new Error("No API key defined, aborting."))
  };

  var options = {
    k: osu.settings.apiKey
  };

  var options = extend(options, params);

  request({baseUrl: osu.settings.apiUri, uri: endpoint, qs: options}, function (err, response, body) {
    if (!err && response.statusCode == 200) {
      return cb (null, body)
    };

    return cb (err);
  });
};

module.exports = jsRequest;
