var Promise = require('promise');
var extend = require('xtend'); // Use simple extend module because I'm lazy to write my own
var RateLimiter = require('limiter').RateLimiter;

function OsuApi (options) {
  // Bunch of default settings
  var settings = {
    apiUri: 'https://osu.ppy.sh/api',
    apiKey: null,
    reqsPerMinute: 600
  };

  // "Extend" the user's ones in
  settings = extend(settings, options);

  this.settings = settings;
  this.requestsCount = 0;
  if(settings.reqsPerMinute)
    this.limiter = new RateLimiter(settings.reqsPerMinute, 'minute');
}

OsuApi.prototype.request = function(endpoint, params, cb) {
  return require('./api/request.js')(this, endpoint, params, cb);
};

OsuApi.prototype.mode = require('./api/modes.js');

OsuApi.prototype.beatmap = require('./api/beatmap/beatmap.js');

OsuApi.prototype.getBeatmaps = function(object, mode, cb) {
  return require('./api/beatmap/get_beatmaps.js')(this, object, mode, cb);
};

OsuApi.prototype.user = require('./api/user/user.js');

OsuApi.prototype.getUser = function(object, mode, cb) {
  return require('./api/user/get_user.js')(this, object, mode, cb);
};

OsuApi.prototype.getUserBest = function(object, mode, cb) {
  return require('./api/user/get_user_best.js')(this, object, mode, cb);
};

OsuApi.prototype.getUserRecent = function(object, mode, cb) {
  return require('./api/user/get_user_recent.js')(this, object, mode, cb);
};

OsuApi.prototype.scores = require('./api/score/score.js');

OsuApi.prototype.getScores = function(beatmap_obj, user_obj, mode, cb) {
  return require('./api/score/get_scores.js')(this, beatmap_obj, user_obj, mode, cb);
};

OsuApi.prototype.getMatch = function(object, id, cb) {
  return require('./api/multiplayer/get_match.js')(this, object, id, cb);
};

OsuApi.prototype.getReplays = function(beatmap_obj, user_obj, mode, cb) {
  return require('./api/user/get_replay.js')(this, beatmap_obj, user_obj, mode, cb);
};

OsuApi.prototype.getRequestsCount = function() {
  return this.requestsCount;
}

module.exports = OsuApi;
