var Promise = require('promise');
var osuRequest = require('../request.js');

// Pretty much the same as get_user_best lol
var getUserRecent = function (osu, object, mode) {
  var params = {};
  params.u = object.id; // ?u=name
  params.type = object.type; // ?type=string or id

  if (object.data) params.limit = object.data; // ?limit=10
  if (mode) params.m = mode; // &m=1 etc.

  return osuRequest(osu, "/get_user_recent", params)
  .then(function(response) {
    if (response.length <= 0) throw new Error("The player has not played recently, or you have provided an invalid username/ID. There was a blank response from the server.");
    else return response;
  });
};

module.exports = Promise.nodeify(getUserRecent);
