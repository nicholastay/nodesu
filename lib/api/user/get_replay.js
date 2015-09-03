var osuRequest = require('../request.js');

var getReplay = function (osu, beatmap_obj, user_obj, mode, cb) {
  var params = {};

  if (!mode) {
    return cb (new Error("A gamemode must be given to retrieve a replay."));
  }

  if (beatmap_obj.style !== 'b') {
    return cb (new Error("Invalid mode given to request the replay. You can only request replays with a beatmap ID."));
  }

  if (!user_obj) {
    return cb (new Error("A user must be given to request a replay."));
  }

  params.m = mode;
  params.b = beatmap_obj.id; // ?b=beatmap_id
  params.u = user_obj.id; // ?u=USER

  osuRequest(osu, "/get_replay", params, function(err, response) {
    if (err) {
      return cb (err);
    }

    return cb(null, response);
  });
};

module.exports = getReplay;
