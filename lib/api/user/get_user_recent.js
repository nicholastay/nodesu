var osuRequest = require('../request.js');

// Pretty much the same as get_user_best lol
var getUserRecent = function (osu, object, mode, cb) {
  var params = {};
  params.u = object.id; // ?u=name
  params.type = object.type; // ?type=string or id

  if (object.data) {
    params.limit = object.data; // ?limit=10
  }

  if (mode) {
    params.m = mode; // &m=1 etc.
  }

  osuRequest(osu, "/get_user_recent", params, function(err, response) {
    if (err) {
      return cb (err);
    }

    if (response.length <= 0) {
      return cb(new Error("The player has not played recently, or you have provided an invalid username/ID. There was a blank response from the server."));
    }
    
    return cb (null, response);
  });
};

module.exports = getUserRecent;
