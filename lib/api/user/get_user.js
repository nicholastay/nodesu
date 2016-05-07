var Q = require('q');
var osuRequest = require('../request.js');

var getUser = function (osu, object, mode, cb) {
  var deferred = Q.defer();
  var params = {};
  params.u = object.id; // ?u=name
  params.type = object.type; // ?type=string or id
  if (mode != null) params.m = mode; // ?type=string or id
  // event_days
  if (object.data) params.event_days = object.data; // ?event_days=1

  osuRequest(osu, "/get_user", params)
  .then(function(response) {
    if (response.length <= 0) deferred.reject(new Error("Invalid username/ID. Could not find listing."));
    else deferred.resolve(response[0]);
    // There can actually only be one user response
    // Make it easier on the user, just return first element
  })
  .catch(function(err) {
    deferred.reject(err);
  });

  deferred.promise.nodeify(cb);
  return deferred.promise;
};

module.exports = getUser;
