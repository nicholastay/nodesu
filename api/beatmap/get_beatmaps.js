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
      var parsed = JSON.parse(response)
      if (parsed.length > 0) { // Not empty code
        if (parsed.length === 1) {
          return cb(null, parsed[0]); // Easier to work with if we take off the array and send back if only one map was found
        };
        return cb(null, parsed);
      } else {
        return cb(new Error("Invalid beatmap/beatmap set ID. Could not find listing."))
      };
    };
    return (err);
  });
}

module.exports = get
