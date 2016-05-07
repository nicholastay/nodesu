var Promise = require('promise');
var osuRequest = require('../request.js');

var getMatch = function (osu, id) {
  return osuRequest(osu, '/get_match', {mp: id.toString()})
  .then(function(response) {
    if (response.length <= 0) throw new Error("Invalid match ID. Could not find listing.");
    else return response;
  });
};

module.exports = Promise.nodeify(getMatch);
