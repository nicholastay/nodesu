var osuRequest = require('../request.js')

var get = function (osu, object, mode, cb) {
  var params = {};
  params[object.style] = object.id;

  if (object.style == 'u' && object.type) {
    params['type'] = object.type // &type=string
  }

  if (mode) {
    params['m'] = mode // &m=1 etc.
  }

  osuRequest(osu, "/get_beatmaps", params, function(err, response) {
    if (!err) {
      if (resp.length > 0) { // Not empty json
        if (resp.length === 1) {
          return cb(null, resp[0]); // Easier to work with if we take off the array and send back if only one map was found
        };
        return cb(null, resp);
      } else {
        return cb(new Error("Invalid beatmap/beatmap set ID. Could not find listing."))
      };
    };

    cb (err);
  });
}

module.exports = get
