function ifExistsToString (data) { // If the var exists, turn it into a string (lazy func)
  if (!data) {
    return null;
  }

  return data.toString();
}

module.exports = {
  // TODO: 'limit' param
  byMapset: function(id, limit) {return {style: 's', id: id.toString(), limit: ifExistsToString(limit)};},
  byMapID: function(id, limit) {return {style: 'b', id: id.toString(), limit: ifExistsToString(limit)};},
  byUserID: function(id, limit) {return {style: 'u', id: id.toString(), type: 'id', limit: ifExistsToString(limit)};},
  byUsername: function(id, limit) {return {style: 'u', id: id.toString(), type: 'string', limit: ifExistsToString(limit)};},
  byHash: function(id, limit) {return {style: 'h', id: id.toString(), limit: ifExistsToString(limit)};},
  byLetter: function(id, letter, limit) {return {style: letter, id: id.toString(), limit: ifExistsToString(limit)};} // Convenience function, if you regex say 's' or 'b' you can use this byLetter function
};
