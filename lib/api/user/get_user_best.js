var Promise = require('promise');
var osuRequest = require('../request.js');

var getUserBest = function (osu, object, mode, cb) {
  var params = {};
  params.u = object.id; // ?u=name
  params.type = object.type; // ?type=string or id
  if (object.data) params.limit = object.data; // ?limit=10
  if (mode) params.m = mode; // &m=1 etc.

  return osuRequest(osu, "/get_user_best", params)
  .then(function(response) {
    if (response.length <= 0) throw new Error("Invalid username/ID. Could not find listing.");
    else return response;
  });
};

module.exports = Promise.nodeify(getUserBest);
