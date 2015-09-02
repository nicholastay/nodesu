module.exports = {
  // TODO: 'limit' param
  byMapset: function(id) {return {style: 's', id: id.toString()};},
  byMapID: function(id) {return {style: 'b', id: id.toString()};},
  byUserID: function(id) {return {style: 'u', id: id.toString(), type: 'id'};},
  byUsername: function(id) {return {style: 'u', id: id.toString(), type: 'string'};},
  byHash: function(id) {return {style: 'h', id: id.toString()};},
  byLetter: function(id, letter) {return {style: letter, id: id.toString()};} // Convenience function, if you regex say 's' or 'b' you can use this byLetter function
};
