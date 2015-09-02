module.exports = {
  byUserID: function(id, days) {return {id: id.toString(), type: 'id', eventDays: days};},
  byUsername: function(id, days) {return {id: id.toString(), type: 'string', eventDays: days};}
};
