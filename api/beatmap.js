var request = require('request');

function getBeatmapData(style, id, mode, limit, userStyle) {
  var params = {};
  params[style] = id;

  if (style == 'u' && userStyle) {
    params['type'] = userStyle // &type=string
  }

  if (mode) {
    params['m'] = mode // &m=1 etc.
  }

  this.raw("/get_beatmaps", params, function(err, response) {
    if (!err) {
      return response;
    };
  });
};

function byMapset(id, mode, limit) {
  getBeatmapData('s', id, mode, limit);
};

function byMapID(id, mode, limit) {
  getBeatmapData('b', id, mode, limit);
};

function byUserID(id, mode, limit) {
  getBeatmapData('u', id, mode, limit, 'id');
};

function byUsername(id, mode, limit) {
  getBeatmapData('u', id, mode, limit, 'string');
};

function byHash(id, mode, limit) {
  getBeatmapData('h', id, mode, limit);
};

var beatmaps = {
  byMapset: byMapset,
  byMapID: byMapID,
  byUserID: byUserID,
  byUsername: byUsername,
  byHash: byHash
};

module.exports = beatmaps;
