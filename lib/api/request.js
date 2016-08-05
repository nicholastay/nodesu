var Promise = require('promise')
var request = require('request');
var extend = require('xtend'); // Use simple extend module because I'm lazy to write my own

function jsRequest(osu, endpoint, params) { // Raw by JavaScript object. Main basis of other convenience functions
  if (!osu.settings.apiKey) return Promise.reject(new Error('No API key defined, aborting.'));

  var options = {k: osu.settings.apiKey};
  options = extend(options, params);

  function callApi(resolve, reject) {
    osu.requestsCount++;
    request({baseUrl: osu.settings.apiUri, uri: endpoint, qs: options}, function (err, response, body) {
      if (err) reject(err);
      else {
        body = JSON.parse(body);
        if (body.error) reject(new Error('osu! API server side error response: ' + body.error));
        else resolve(body);
      }
    });
  }

  return new Promise(function(resolve, reject) {
    if(osu.settings.reqsPerMinute)
      osu.limiter.removeTokens(1, function() {
        callApi(resolve, reject);
      });
    else
      callApi(resolve, reject);
  });
}

module.exports = jsRequest;