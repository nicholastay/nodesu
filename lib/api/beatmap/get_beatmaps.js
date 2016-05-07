var Promise = require('promise');
var osuRequest = require('../request.js');

var getBeatmap = function (osu, object, mode) {
  var params = {};
  params[object.style] = object.id;

  if (object.style == 'u' && object.type) params.type = object.type; // &type=string
  if (object.limit) params.limit = object.limit;
  if (mode) params.m = mode; // &m=1 etc.

  return osuRequest(osu, '/get_beatmaps', params).then(function(response) {
    if (response.length <= 0) throw new Error('Invalid beatmap/beatmap set ID. Could not find listing.');
    else return response;
  });
};

module.exports = Promise.nodeify(getBeatmap);
