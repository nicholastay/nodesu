var Q = require('q');
var request = require('request');
var extend = require('xtend'); // Use simple extend module because I'm lazy to write my own

function jsRequest(osu, endpoint, params, cb) { // Raw by JavaScript object. Main basis of other convenience functions
  var deferred = Q.defer();
  if (!osu.settings.apiKey) deferred.reject(new Error('No API key defined, aborting.'));

  var options = {k: osu.settings.apiKey};
  options = extend(options, params);

  request({baseUrl: osu.settings.apiUri, uri: endpoint, qs: options}, function (err, response, body) {
    if (err) deferred.reject(err);
    else {
      body = JSON.parse(body);
      if (body.error) deferred.reject(new Error('osu! API server side error response: ' + body.error));
      else deferred.resolve(body);
    }
  });

  deferred.promise.nodeify(cb);
  return deferred.promise;
}

module.exports = jsRequest;