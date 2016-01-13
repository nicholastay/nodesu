var Q = require('q');
var osuRequest = require('../request.js');

var getMatch = function (osu, id, cb) {
  var deferred = Q.defer();
  osuRequest(osu, '/get_match', {mp: id.toString()})
  .then(function(response) {
    if (response.length <= 0) deferred.reject(new Error("Invalid match ID. Could not find listing."));
    else deferred.resolve(response);
  })
  .catch(function(err) {
    deferred.reject(err);
  });

  deferred.promise.nodeify(cb);
  return deferred.promise;
};

module.exports = getMatch;
