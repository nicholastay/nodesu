var Promise = require('promise');
var osuRequest = require('../request.js');

var getScores = function (osu, beatmap_obj, user_obj, mode) {
  var params = {};

  if (beatmap_obj.style !== 'b') return Promise.reject(new Error('Invalid mode given to request scores. You can only request scores with a beatmap ID.'));
  
  if (user_obj) { // If a user is defined
    params.u = user_obj.id;
    params.type = user_obj.type; // ?type=string or id
  }
  if (mode) params.m = mode; // If mode is defined
  if (beatmap_obj.limit) params.limit = beatmap_obj.limit;
  params.b = beatmap_obj.id; // ?b=beatmap_id

  return osuRequest(osu, '/get_scores', params)
  .then(function(response) {
    if (response.length <= 0) throw new Error('Invalid beatmap ID and/or user ID. Could not find listing.');
    else return response;
  });
};

module.exports = Promise.nodeify(getScores);
