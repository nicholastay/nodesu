function ifExistsToString (data) { // If the var exists, turn it into a string (lazy func)
  if (!data) return null;
  return data.toString();
}

module.exports = {
  byMapset: function(id, limit) {return {style: 's', id: id.toString(), limit: ifExistsToString(limit)};},
  byMapID: function(id, limit) {return {style: 'b', id: id.toString(), limit: ifExistsToString(limit)};},
  byUserID: function(id, limit) {return {style: 'u', id: id.toString(), type: 'id', limit: ifExistsToString(limit)};},
  byUsername: function(id, limit) {return {style: 'u', id: id.toString(), type: 'string', limit: ifExistsToString(limit)};},
  byHash: function(id, limit) {return {style: 'h', id: id.toString(), limit: ifExistsToString(limit)};},
  byLetter: function(id, letter, limit) {return {style: letter, id: id.toString(), limit: ifExistsToString(limit)};}, // Convenience function, if you regex say 's' or 'b' you can use this byLetter function

  approvalStatus: {
    3: 'Qualified',
    2: 'Approved',
    1: 'Ranked',
    0: 'Pending',
    '-1': 'WIP',
    '-2': 'Graveyard'
  },
  genre: {
    0: 'Any',
    1: 'Unspecified',
    2: 'Video Game',
    3: 'Anime',
    4: 'Rock',
    5: 'Pop',
    6: 'Other',
    7: 'Novelty',
    9: 'Hip-hop',
    10: 'Electronic'
  },
  language: {
    0: 'Any',
    1: 'Other',
    2: 'English',
    3: 'Japanese',
    4: 'Chinese',
    5: 'Instrumental',
    6: 'Korean',
    7: 'French',
    8: 'German',
    9: 'Swedish',
    10: 'Spanish',
    11: 'Italian'
  }
};
