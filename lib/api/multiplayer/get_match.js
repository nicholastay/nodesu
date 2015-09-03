var osuRequest = require('../request.js');

var getMatch = function (osu, id, cb) {
  osuRequest(osu, "/get_match", {mp: id.toString()}, function(err, response) {
    if (err) {
      return cb (err);
    }

    if (response.length <= 0) {
      return cb (new Error("Invalid match ID. Could not find listing."));
    }
    
    return cb (null, response);
  });
};

module.exports = getMatch;
