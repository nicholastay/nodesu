var Q = require('q');
var osuRequest = require('../request.js');

var getReplay = function (osu, beatmap_obj, user_obj, mode, cb) {
  var deferred = Q.defer();
  var params = {};

  if (!mode) deferred.reject(new Error('A gamemode must be given to retrieve a replay.'));
  else if (beatmap_obj.style !== 'b') deferred.reject(new Error('Invalid mode given to request the replay. You can only request replays with a beatmap ID.'));
  else if (!user_obj) deferred.reject(new Error('A user must be given to request a replay.'));
  else {
    params.m = mode;
    params.b = beatmap_obj.id; // ?b=beatmap_id
    params.u = user_obj.id; // ?u=USER

    osuRequest(osu, '/get_replay', params)
    .then(function(response) {
      deferred.resolve(response);
    })
    .catch(function(err) {
      deferred.reject(err);
    });
  }

  deferred.promise.nodeify(cb);
  return deferred.promise;
};

module.exports = getReplay;
