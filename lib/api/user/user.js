// Same func as beatmap.js
function ifExistsToString (data) { // If the var exists, turn it into a string (lazy func)
  if (!data) return null;
  return data.toString();
}

// 'data' denotes eventDays for get_user, but denotes limit for get_user_best
// It is done like this so we can just use this same file for the two gets
module.exports = {
  byUserID: function(id, data) {return {id: id.toString(), type: 'id', data: ifExistsToString(data)};},
  byUsername: function(id, data) {return {id: id.toString(), type: 'string', data: ifExistsToString(data)};},
  all: null // Convenience function for getScores
};
