module.exports = {
  // TODO: 'limit' param
  byMapset: function(id, limit) {return {style: 's', id: id.toString(), limit: limit.toString()};},
  byMapID: function(id, limit) {return {style: 'b', id: id.toString(), limit: limit.toString()};},
  byUserID: function(id, limit) {return {style: 'u', id: id.toString(), type: 'id', limit: limit.toString()};},
  byUsername: function(id, limit) {return {style: 'u', id: id.toString(), type: 'string', limit: limit.toString()};},
  byHash: function(id, limit) {return {style: 'h', id: id.toString(), limit: limit.toString()};},
  byLetter: function(id, letter, limit) {return {style: letter, id: id.toString(), limit: limit.toString()};} // Convenience function, if you regex say 's' or 'b' you can use this byLetter function
};
