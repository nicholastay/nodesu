var osuRequest = require('../request.js');

var getScores = function (osu, beatmap_obj, user_obj, mode, cb) {
  var params = {};

  if (beatmap_obj.style !== 'b') {
    return cb (new Error("Invalid mode given to request scores. You can only request scores with a beatmap ID."));
  }

  if (user_obj) { // If a user is defined
    params.u = user_obj.id;
    params.type = user_obj.type; // ?type=string or id
  }

  if (mode) { // If mode is defined
    params.m = mode;
  }

  if (beatmap_obj.limit) {
    params.limit = beatmap_obj.limit;
  }

  params.b = beatmap_obj.id; // ?b=beatmap_id

  osuRequest(osu, "/get_scores", params, function(err, response) {
    if (err) {
      return cb (err);
    }

    if (response.length <= 0) {
      return cb(new Error("Invalid beatmap ID and/or user ID. Could not find listing."));
    }
    
    return cb(null, response);
  });
};

module.exports = getScores;
