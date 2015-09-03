var osuRequest = require('../request.js');

var getUserBest = function (osu, object, mode, cb) {
  var params = {};
  params.u = object.id; // ?u=name
  params.type = object.type; // ?type=string or id

  if (object.data) {
    params.limit = object.data; // ?limit=10
  }

  if (mode) {
    params.m = mode; // &m=1 etc.
  }

  osuRequest(osu, "/get_user_best", params, function(err, response) {
    if (err) {
      return cb (err);
    }

    if (response.length <= 0) {
      return cb(new Error("Invalid username/ID. Could not find listing."));
    }
    
    return cb(null, response);
  });
};

module.exports = getUserBest;
