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
      if (response.length > 0) { // Not empty json
        return cb(null, response);
      } else {
        return cb(new Error("Invalid beatmap/beatmap set ID. Could not find listing."))
      };
    };

    cb (err);
  });
}

module.exports = get
