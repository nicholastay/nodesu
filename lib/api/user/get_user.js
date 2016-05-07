var Promise = require('promise');
var osuRequest = require('../request.js');

var getUser = function (osu, object, mode) {
  var params = {};
  params.u = object.id; // ?u=name
  params.type = object.type; // ?type=string or id
  if (mode) params.m = mode; // ?m=1 etc
  if (object.data) params.event_days = object.data; // ?event_days=1

  return osuRequest(osu, "/get_user", params)
  .then(function(response) {
    if (response.length <= 0) throw new Error("Invalid username/ID. Could not find listing.");
    else return response[0];
    // There can actually only be one user response
    // Make it easier on the user, just return first element
  });
};

module.exports = Promise.nodeify(getUser);
