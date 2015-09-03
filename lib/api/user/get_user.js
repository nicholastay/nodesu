var osuRequest = require('../request.js');

var getUser = function (osu, object, cb) {
  var params = {};
  params.u = object.id; // ?u=name
  params.type = object.type; // ?type=string or id

  // event_days
  if (object.data) {
    params.event_days = object.data; // ?event_days=1
  }

  osuRequest(osu, "/get_user", params, function(err, response) {
    if (err) {
      return cb (err);
    }

    if (response.length <= 0) {
      return cb(new Error("Invalid username/ID. Could not find listing."));
    }
    
    // There can actually only be one user response
    // Make it easier on the user, just return first element
    return cb(null, response[0]);
  });
};

module.exports = getUser;
