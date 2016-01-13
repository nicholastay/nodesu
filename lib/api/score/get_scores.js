var Q = require('q');
var osuRequest = require('../request.js');

var getScores = function (osu, beatmap_obj, user_obj, mode, cb) {
  var deferred = Q.defer();
  var params = {};

  if (beatmap_obj.style !== 'b') deferred.reject(new Error('Invalid mode given to request scores. You can only request scores with a beatmap ID.'));
  else {
    if (user_obj) { // If a user is defined
      params.u = user_obj.id;
      params.type = user_obj.type; // ?type=string or id
    }
    if (mode) params.m = mode; // If mode is defined
    if (beatmap_obj.limit) params.limit = beatmap_obj.limit;
    params.b = beatmap_obj.id; // ?b=beatmap_id

    osuRequest(osu, '/get_scores', params)
    .then(function(response) {
      if (response.length <= 0) deferred.reject(new Error('Invalid beatmap ID and/or user ID. Could not find listing.'));
      else deferred.resolve(response);
    })
    .catch(function(err) {
      deferred.reject(err);
    });
  }

  deferred.promise.nodeify(cb);
  return deferred.promise;
};

module.exports = getScores;
