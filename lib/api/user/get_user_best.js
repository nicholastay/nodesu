var Q = require('q');
var osuRequest = require('../request.js');

var getUserBest = function (osu, object, mode, cb) {
  var deferred = Q.defer();
  var params = {};
  params.u = object.id; // ?u=name
  params.type = object.type; // ?type=string or id
  if (object.data) params.limit = object.data; // ?limit=10
  if (mode) params.m = mode; // &m=1 etc.

  osuRequest(osu, "/get_user_best", params)
  .then(function(response) {
    if (response.length <= 0) deferred.reject(new Error("Invalid username/ID. Could not find listing."));
    else deferred.resolve(response);
  })
  .catch(function(err) {
    deferred.reject(err);
  });

  deferred.promise.nodeify(cb);
  return deferred.promise;
};

module.exports = getUserBest;
