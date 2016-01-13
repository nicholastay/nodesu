var Q = require('q');
var osuRequest = require('../request.js');

var getBeatmap = function (osu, object, mode, cb) {
  var deferred = Q.defer();
  var params = {};
  params[object.style] = object.id;

  if (object.style == 'u' && object.type) params.type = object.type; // &type=string
  if (object.limit) params.limit = object.limit;
  if (mode) params.m = mode; // &m=1 etc.

  osuRequest(osu, '/get_beatmaps', params)
  .then(function(response) {
    if (response.length <= 0) deferred.reject(new Error('Invalid beatmap/beatmap set ID. Could not find listing.'));
    else deferred.resolve(response);
  })
  .catch(function(err) {
    deferred.reject(err);
  });

  deferred.promise.nodeify(cb);
  return deferred.promise;
};

module.exports = getBeatmap;
